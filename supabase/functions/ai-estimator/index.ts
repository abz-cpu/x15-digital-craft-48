import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting: 5 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

// Clean up old entries
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

// Validate prompt to prevent abuse
function validatePrompt(prompt: string): { valid: boolean; error?: string } {
  if (!prompt || typeof prompt !== 'string') {
    return { valid: false, error: 'Please provide a project description' };
  }
  
  const trimmed = prompt.trim();
  
  if (trimmed.length === 0) {
    return { valid: false, error: 'Please provide a project description' };
  }
  
  if (trimmed.length < 10) {
    return { valid: false, error: 'Please provide more detail about your project (at least 10 characters)' };
  }
  
  if (trimmed.length > 1000) {
    return { valid: false, error: 'Please keep your description under 1000 characters' };
  }
  
  // Block obvious spam patterns
  const spamPatterns = [
    /^(.)\1{10,}$/,  // Repeated single character
    /^[0-9]+$/,      // Only numbers
    /https?:\/\//i,  // URLs
    /<script/i,      // Script injection attempts
  ];
  
  for (const pattern of spamPatterns) {
    if (pattern.test(trimmed)) {
      return { valid: false, error: 'Invalid project description' };
    }
  }
  
  return { valid: true };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Clean up old rate limit entries periodically
  cleanupRateLimitMap();

  // Get client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("cf-connecting-ip") ||
                   "unknown";

  // Check rate limit
  if (isRateLimited(clientIP)) {
    console.log(`Rate limited IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please wait a minute before trying again." }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { prompt } = await req.json();
    
    // Validate the prompt
    const validation = validatePrompt(prompt);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("Service temporarily unavailable");
    }

    console.log(`Processing AI estimation from IP ${clientIP}:`, prompt.substring(0, 100));

    const systemPrompt = `You are a digital agency project estimator for L&D Digital, a UK-based web development and AI automation agency. Analyze client project requests and provide professional, helpful estimates.

Always respond with a valid JSON object containing these exact fields:
- estimatedTimeline: A realistic timeline string (e.g., "2-3 weeks", "4-6 weeks")
- recommendedPackage: The best package for them (e.g., "Professional Website + AI Chatbot", "E-commerce Starter", "Business Website")
- keyFeatures: An array of 4-6 key features that would be included
- approach: A 2-3 sentence description of how you'd approach this project

Consider:
- Simple brochure sites: 1-2 weeks, from £200
- Business websites with booking: 2-3 weeks, from £400
- E-commerce sites: 3-4 weeks, from £600
- AI chatbot integration: adds 1 week, from £50/month
- Custom web apps: 4-8 weeks, custom pricing

Be encouraging, professional, and realistic.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Analyze this project request and provide an estimate: "${prompt.trim()}"` }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "We're experiencing high demand. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error("AI service unavailable");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error("No response from AI");
    }

    console.log("AI response received for IP", clientIP);

    // Parse JSON from the response - handle markdown code blocks
    let parsed;
    try {
      // Remove markdown code blocks if present
      let cleanContent = content.trim();
      if (cleanContent.startsWith('```json')) {
        cleanContent = cleanContent.replace(/^```json\n?/, '').replace(/\n?```$/, '');
      } else if (cleanContent.startsWith('```')) {
        cleanContent = cleanContent.replace(/^```\n?/, '').replace(/\n?```$/, '');
      }
      parsed = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", content);
      // Return a fallback response
      parsed = {
        estimatedTimeline: "2-4 weeks",
        recommendedPackage: "Custom Solution",
        keyFeatures: [
          "Professional design tailored to your needs",
          "Mobile-responsive layout",
          "SEO optimization",
          "Content management system"
        ],
        approach: "We'd love to discuss your project in more detail. Our team will create a tailored solution that meets your specific requirements and budget."
      };
    }

    return new Response(
      JSON.stringify(parsed),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("AI estimator error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to analyze project. Please try again." }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
