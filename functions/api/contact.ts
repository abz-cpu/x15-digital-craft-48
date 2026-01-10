// Cloudflare Pages Function - Contact Form Handler
// POST /api/contact

interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
}

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  need?: string;
  budget?: string;
  deadline?: string;
  message: string;
  turnstileToken: string;
}

// Simple in-memory rate limiting (5 requests per minute per IP)
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

// Clean up old entries periodically
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://digital.luminousanddeliver.co.uk",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// HTML Email Templates
function getInternalEmailHtml(data: ContactRequest, clientIP: string): string {
  const submittedAt = new Date().toLocaleString('en-GB', { 
    timeZone: 'Europe/London',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry - L&D Digital</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">New Project Enquiry</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">L&D Digital Contact Form</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #6366f1;">
                    <h2 style="margin: 0 0 12px; color: #111827; font-size: 16px; font-weight: 600;">Contact Details</h2>
                    <p style="margin: 0 0 8px; color: #374151; font-size: 14px;">
                      <strong>Name:</strong> ${escapeHtml(data.name)}
                    </p>
                    <p style="margin: 0 0 8px; color: #374151; font-size: 14px;">
                      <strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}" style="color: #6366f1;">${escapeHtml(data.email)}</a>
                    </p>
                    ${data.phone ? `<p style="margin: 0; color: #374151; font-size: 14px;"><strong>Phone:</strong> <a href="tel:${escapeHtml(data.phone)}" style="color: #6366f1;">${escapeHtml(data.phone)}</a></p>` : ''}
                  </td>
                </tr>
              </table>

              <!-- Project Details -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #f9fafb; border-radius: 8px;">
                    <h2 style="margin: 0 0 12px; color: #111827; font-size: 16px; font-weight: 600;">Project Details</h2>
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="padding: 4px 0; color: #6b7280; font-size: 14px; width: 120px;">Project Type:</td>
                        <td style="padding: 4px 0; color: #111827; font-size: 14px;">${escapeHtml(data.need || 'Not specified')}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; color: #6b7280; font-size: 14px;">Budget Range:</td>
                        <td style="padding: 4px 0; color: #111827; font-size: 14px;">${escapeHtml(data.budget || 'Not specified')}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; color: #6b7280; font-size: 14px;">Deadline:</td>
                        <td style="padding: 4px 0; color: #111827; font-size: 14px;">${escapeHtml(data.deadline || 'Not specified')}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <h2 style="margin: 0 0 12px; color: #92400e; font-size: 16px; font-weight: 600;">Message</h2>
                    <p style="margin: 0; color: #78350f; font-size: 14px; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center; padding-top: 16px;">
                    <a href="mailto:${escapeHtml(data.email)}?subject=Re: Your enquiry to L&D Digital" 
                       style="display: inline-block; padding: 12px 24px; background-color: #6366f1; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      Reply to ${escapeHtml(data.name.split(' ')[0])}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px; text-align: center;">
                Submitted: ${submittedAt} • IP: ${clientIP}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function getConfirmationEmailHtml(name: string): string {
  const firstName = name.split(' ')[0];
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We've received your enquiry - L&D Digital</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">Thanks for getting in touch!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 16px; color: #374151; font-size: 16px;">
                Hi ${escapeHtml(firstName)},
              </p>
              
              <p style="margin: 0 0 16px; color: #374151; font-size: 16px;">
                We've received your enquiry and we're excited to learn more about your project.
              </p>

              <!-- Timeline Box -->
              <table role="presentation" style="width: 100%; margin: 24px 0;">
                <tr>
                  <td style="padding: 20px; background-color: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
                    <p style="margin: 0; color: #065f46; font-size: 14px; font-weight: 600;">
                      ⏱️ What happens next?
                    </p>
                    <p style="margin: 8px 0 0; color: #047857; font-size: 14px;">
                      We'll review your requirements and get back to you within <strong>2–4 hours</strong> (during business hours) with a clear quote and next steps.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 16px; color: #374151; font-size: 16px;">
                In the meantime, if you have any additional details to share or questions, feel free to reply to this email or message us on WhatsApp.
              </p>

              <!-- WhatsApp Button -->
              <table role="presentation" style="width: 100%; margin: 24px 0;">
                <tr>
                  <td style="text-align: center;">
                    <a href="https://wa.me/447356260648?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20and%20wanted%20to%20add%20some%20details" 
                       style="display: inline-block; padding: 12px 24px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      💬 Message us on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 24px 0 0; color: #374151; font-size: 16px;">
                Speak soon,<br>
                <strong>The L&D Digital Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px;">
                L&D Digital • London, UK
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                <a href="https://digital.luminousanddeliver.co.uk" style="color: #6366f1; text-decoration: none;">digital.luminousanddeliver.co.uk</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// Helper to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Clean up old rate limit entries
  cleanupRateLimitMap();

  // Get client IP for rate limiting
  const clientIP = request.headers.get("CF-Connecting-IP") || 
                   request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() || 
                   "unknown";

  // Check rate limit
  if (isRateLimited(clientIP)) {
    return new Response(
      JSON.stringify({ ok: false, error: "rate_limited", message: "Too many requests. Please try again in a minute." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }

  try {
    const body: ContactRequest = await request.json();

    const { name, email, phone, need, budget, deadline, message, turnstileToken } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ ok: false, error: "missing_fields", message: "Please fill in all required fields." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ ok: false, error: "missing_turnstile_token", message: "Please complete the security verification." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: clientIP,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json() as { success: boolean };

    if (!turnstileResult.success) {
      return new Response(
        JSON.stringify({ ok: false, error: "turnstile_failed", message: "Security verification failed. Please refresh and try again." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Send internal email to site owner via Resend REST API
    const internalEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "L&D Digital <noreply@luminousanddeliver.co.uk>",
        to: ["contact.luminousanddeliver@gmail.com"],
        reply_to: email,
        subject: `New enquiry from ${name} – L&D Digital`,
        html: getInternalEmailHtml(body, clientIP),
      }),
    });

    if (!internalEmailResponse.ok) {
      const errorText = await internalEmailResponse.text();
      console.error("Resend API error (internal email):", errorText);
      return new Response(
        JSON.stringify({ ok: false, error: "email_failed", message: "Failed to send your enquiry. Please try again or contact us directly." }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Send confirmation email to the user
    const confirmationEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "L&D Digital <contact@luminousanddeliver.co.uk>",
        to: [email],
        reply_to: "contact.luminousanddeliver@gmail.com",
        subject: "We've received your enquiry – L&D Digital",
        html: getConfirmationEmailHtml(name),
      }),
    });

    if (!confirmationEmailResponse.ok) {
      // Log but don't fail - internal email was sent successfully
      const errorText = await confirmationEmailResponse.text();
      console.error("Resend API error (confirmation email):", errorText);
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "server_error", message: "Something went wrong. Please try again." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
};