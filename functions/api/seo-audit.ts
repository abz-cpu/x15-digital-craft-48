// Cloudflare Pages Function - SEO Audit Request Handler
// POST /api/seo-audit
// Sends: (1) customer confirmation email (2) internal admin notification with audit request details

interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  FROM_EMAIL?: string;
  REPLY_TO_EMAIL?: string;
  TO_EMAIL?: string;
}

interface SeoAuditRequest {
  businessName: string;
  businessType: string;
  websiteUrl: string;
  email: string;
  phone?: string;
  targetAreas: string[];
  turnstileToken: string;
}

// Business type display names
const BUSINESS_TYPE_LABELS: Record<string, string> = {
  clinic: "Clinic / Healthcare",
  trades: "Trades / Home Services",
  restaurant: "Restaurant / Hospitality",
  retail: "Retail / Shop",
  property: "Property / Estate Agent",
  professional: "Professional Services",
  salon: "Salon / Beauty",
  fitness: "Fitness / Gym",
  other: "Other",
};

// Area display names
const AREA_LABELS: Record<string, string> = {
  stratford: "Stratford",
  ilford: "Ilford",
  "east-ham": "East Ham",
  barking: "Barking",
  newham: "Newham",
  hackney: "Hackney",
  shoreditch: "Shoreditch",
  "tower-hamlets": "Tower Hamlets",
  walthamstow: "Walthamstow",
  leyton: "Leyton",
  greenwich: "Greenwich",
  "central-london": "Central London",
  "north-london": "North London",
  "south-london": "South London",
  "west-london": "West London",
  nationwide: "Nationwide / Multiple",
};

// Generate unique audit ID
function generateAuditId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "SEO-";
  const randomBytes = crypto.getRandomValues(new Uint8Array(6));
  for (let i = 0; i < 6; i++) {
    result += chars[randomBytes[i] % chars.length];
  }
  return result;
}

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }
  if (record.count >= RATE_LIMIT) return true;
  record.count++;
  return false;
}

function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) rateLimitMap.delete(ip);
  }
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://digital.luminousanddeliver.co.uk",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return (text || "").replace(/[&<>"']/g, (m) => map[m]);
}

// Customer confirmation email
function getCustomerEmailHtml(data: SeoAuditRequest, auditId: string): string {
  const firstName = data.businessName?.split(" ")[0]?.trim() || "there";
  const areasFormatted = data.targetAreas
    .map((a) => AREA_LABELS[a] || a)
    .join(", ");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Free SEO Audit Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 32px 16px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d9488 0%, #065f53 100%); padding: 32px; text-align: center;">
              <img src="https://digital.luminousanddeliver.co.uk/brand/logo2-email-gradient.png"
                   alt="L&D Digital" 
                   width="180"
                   style="display: inline-block; border: 0;" />
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 16px; font-size: 24px; color: #1e293b;">
                Thanks for requesting your free SEO audit! 🎉
              </h1>
              
              <p style="margin: 0 0 16px; color: #475569;">
                Hi ${escapeHtml(firstName)},
              </p>
              
              <p style="margin: 0 0 24px; color: #475569;">
                We've received your request and will be reviewing <strong style="color: #0d9488;">${escapeHtml(data.websiteUrl)}</strong> for local SEO opportunities.
              </p>
              
              <!-- What happens next -->
              <div style="background-color: #f0fdfa; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 12px; font-size: 16px; color: #0d9488;">
                  What happens next?
                </h2>
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1;">
                      <span style="display: inline-block; width: 24px; height: 24px; background-color: #0d9488; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">1</span>
                      <span style="color: #1e293b;">We review your website and local competition</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1;">
                      <span style="display: inline-block; width: 24px; height: 24px; background-color: #0d9488; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">2</span>
                      <span style="color: #1e293b;">We identify quick wins and opportunities</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="display: inline-block; width: 24px; height: 24px; background-color: #0d9488; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold; margin-right: 12px;">3</span>
                      <span style="color: #1e293b;">You receive a custom action plan within 24 hours</span>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Request summary -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="margin: 0 0 12px; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                  Your Request Details
                </h3>
                <table role="presentation" style="width: 100%; font-size: 14px;">
                  <tr>
                    <td style="padding: 4px 0; color: #64748b; width: 120px;">Reference:</td>
                    <td style="padding: 4px 0; color: #1e293b; font-weight: 600;">${auditId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #64748b;">Business:</td>
                    <td style="padding: 4px 0; color: #1e293b;">${escapeHtml(data.businessName)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #64748b;">Website:</td>
                    <td style="padding: 4px 0; color: #0d9488;">${escapeHtml(data.websiteUrl)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #64748b;">Target Areas:</td>
                    <td style="padding: 4px 0; color: #1e293b;">${escapeHtml(areasFormatted)}</td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 0 0 24px; color: #475569; font-size: 14px;">
                Questions in the meantime? Just reply to this email or WhatsApp us at 
                <a href="https://wa.me/447488855786" style="color: #0d9488;">+44 7488 855786</a>.
              </p>
              
              <p style="margin: 0; color: #475569;">
                Best regards,<br>
                <strong style="color: #1e293b;">The L&D Digital Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 24px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 12px; color: #94a3b8;">
                L&D Digital • London, UK
              </p>
              <p style="margin: 0; font-size: 12px;">
                <a href="https://digital.luminousanddeliver.co.uk" style="color: #5eead4; text-decoration: none;">digital.luminousanddeliver.co.uk</a>
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

// Internal admin notification email
function getInternalEmailHtml(data: SeoAuditRequest, auditId: string, clientIP: string): string {
  const businessTypeLabel = BUSINESS_TYPE_LABELS[data.businessType] || data.businessType;
  const areasFormatted = data.targetAreas
    .map((a) => AREA_LABELS[a] || a)
    .join(", ");
  
  const now = new Date();
  const submittedAt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  // Build WhatsApp link if phone provided
  let whatsappLink = "";
  if (data.phone) {
    const phoneDigits = data.phone.replace(/\D/g, "");
    if (phoneDigits.length >= 10) {
      const normalized = phoneDigits.startsWith("0") 
        ? "44" + phoneDigits.substring(1) 
        : phoneDigits.startsWith("44") 
          ? phoneDigits 
          : "44" + phoneDigits;
      whatsappLink = `https://wa.me/${normalized}`;
    }
  }

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New SEO Audit Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 32px 16px;">
        <table role="presentation" style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d9488 0%, #065f53 100%); padding: 24px 32px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-size: 20px; color: #ffffff;">
                      🔍 New SEO Audit Request
                    </h1>
                    <p style="margin: 8px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">
                      ${submittedAt} (UK)
                    </p>
                  </td>
                  <td style="text-align: right;">
                    <span style="display: inline-block; padding: 6px 12px; background-color: rgba(255,255,255,0.2); color: #ffffff; border-radius: 20px; font-size: 12px; font-weight: 600;">
                      ${auditId}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              
              <!-- Business Details -->
              <div style="background-color: #f0fdfa; border: 1px solid #99f6e4; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px; font-size: 16px; color: #0d9488;">
                  📋 Business Details
                </h2>
                <table role="presentation" style="width: 100%; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1; color: #64748b; width: 140px;">Business Name:</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1; color: #1e293b; font-weight: 600;">${escapeHtml(data.businessName)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1; color: #64748b;">Business Type:</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1; color: #1e293b;">${escapeHtml(businessTypeLabel)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1; color: #64748b;">Website:</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #ccfbf1;">
                      <a href="${escapeHtml(data.websiteUrl.startsWith("http") ? data.websiteUrl : "https://" + data.websiteUrl)}" 
                         style="color: #0d9488; text-decoration: none; font-weight: 600;">
                        ${escapeHtml(data.websiteUrl)}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;">Target Areas:</td>
                    <td style="padding: 8px 0; color: #1e293b;">${escapeHtml(areasFormatted)}</td>
                  </tr>
                </table>
              </div>
              
              <!-- Contact Details -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px; font-size: 16px; color: #475569;">
                  📞 Contact Details
                </h2>
                <table role="presentation" style="width: 100%; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Email:</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                      <a href="mailto:${escapeHtml(data.email)}" style="color: #0d9488; text-decoration: none;">${escapeHtml(data.email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;">Phone:</td>
                    <td style="padding: 8px 0; color: #1e293b;">
                      ${data.phone ? escapeHtml(data.phone) : "<span style='color: #94a3b8;'>Not provided</span>"}
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Quick Actions -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="padding-right: 8px;">
                    <a href="mailto:${escapeHtml(data.email)}?subject=Your%20Free%20SEO%20Audit%20(${auditId})&body=Hi%20${encodeURIComponent(data.businessName.split(" ")[0] || "there")}%2C%0A%0AThanks%20for%20requesting%20an%20SEO%20audit%20for%20${encodeURIComponent(data.websiteUrl)}.%0A%0A" 
                       style="display: block; padding: 12px 20px; background-color: #0d9488; color: #ffffff; text-align: center; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      📧 Reply via Email
                    </a>
                  </td>
                  ${whatsappLink ? `
                  <td style="padding-left: 8px;">
                    <a href="${whatsappLink}?text=${encodeURIComponent(`Hi ${data.businessName.split(" ")[0] || "there"}, thanks for requesting an SEO audit for ${data.websiteUrl}. I've had a look at your site...`)}" 
                       style="display: block; padding: 12px 20px; background-color: #25D366; color: #ffffff; text-align: center; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      💬 WhatsApp
                    </a>
                  </td>
                  ` : ""}
                </tr>
              </table>
              
              <p style="margin: 24px 0 0; font-size: 12px; color: #94a3b8; text-align: center;">
                IP: ${clientIP} • Source: SEO Audit Form
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

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  cleanupRateLimitMap();

  const clientIP =
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(clientIP)) {
    return new Response(
      JSON.stringify({ ok: false, error: "rate_limited", message: "Too many requests. Please try again in a minute." }),
      { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }

  try {
    const body: SeoAuditRequest = await request.json();
    const { businessName, businessType, websiteUrl, email, phone, targetAreas, turnstileToken } = body;

    // Validate required fields
    if (!businessName?.trim() || !businessType || !websiteUrl?.trim() || !email?.trim()) {
      return new Response(
        JSON.stringify({ ok: false, error: "missing_fields", message: "Please fill in all required fields." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    if (!targetAreas || targetAreas.length === 0) {
      return new Response(
        JSON.stringify({ ok: false, error: "missing_areas", message: "Please select at least one target area." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ ok: false, error: "missing_turnstile_token", message: "Please complete the security verification." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Verify Turnstile token
    const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: clientIP,
      }),
    });

    const turnstileResult = (await turnstileResponse.json()) as { success: boolean };
    if (!turnstileResult.success) {
      return new Response(
        JSON.stringify({ ok: false, error: "turnstile_failed", message: "Security verification failed. Please refresh and try again." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Generate audit ID
    const auditId = generateAuditId();

    const fromEmail = env.FROM_EMAIL || "hello@luminousanddeliver.co.uk";
    const replyToEmail = env.REPLY_TO_EMAIL || "contact@luminousanddeliver.co.uk";
    const toEmail = env.TO_EMAIL || "contact@luminousanddeliver.co.uk";
    const fromHeader = `L&D Digital – Luminous & Deliver <${fromEmail}>`;

    // 1) Send confirmation email to customer
    let confirmationSent = false;
    try {
      const confirmationResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromHeader,
          to: [email],
          reply_to: replyToEmail,
          subject: `Your Free SEO Audit Request (${auditId})`,
          html: getCustomerEmailHtml(body, auditId),
        }),
      });

      if (confirmationResponse.ok) {
        confirmationSent = true;
      } else {
        console.error("Customer confirmation email failed:", await confirmationResponse.text());
      }
    } catch (confirmError) {
      console.error("Customer confirmation email error:", confirmError);
    }

    // 2) Send internal notification email
    const internalResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromHeader,
        to: [toEmail],
        reply_to: email,
        subject: `🔍 SEO Audit Request: ${businessName} - ${websiteUrl} [${auditId}]`,
        html: getInternalEmailHtml(body, auditId, clientIP),
      }),
    });

    if (!internalResponse.ok) {
      const errorText = await internalResponse.text();
      console.error("Internal notification email failed:", errorText);
      return new Response(
        JSON.stringify({ ok: false, error: "email_failed", message: "Failed to submit your request. Please try again or contact us directly." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Success
    return new Response(
      JSON.stringify({
        ok: true,
        auditId,
        confirmationSent,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );

  } catch (error) {
    console.error("SEO audit form error:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "server_error", message: "Something went wrong. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};
