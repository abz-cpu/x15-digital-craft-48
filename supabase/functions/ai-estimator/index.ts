import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Please provide a project description' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing AI estimation for prompt:", prompt.substring(0, 100));

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
          { role: "user", content: `Analyze this project request and provide an estimate: "${prompt}"` }
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
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error("No response from AI");
    }

    console.log("AI response received:", content.substring(0, 200));

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
      JSON.stringify({ error: error instanceof Error ? error.message : "Failed to analyze project" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
