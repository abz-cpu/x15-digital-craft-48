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

// Email template configuration - configurable brand color
interface EmailConfig {
  brandPrimaryColor: string; // Hex color e.g. "#0d9488"
  brandName: string;
  sourceUrl?: string;
}

// Default brand configuration (teal/green to match L&D Digital)
const DEFAULT_EMAIL_CONFIG: EmailConfig = {
  brandPrimaryColor: "#0d9488", // Teal-600
  brandName: "L&D Digital",
};

// HTML Email Templates
function getInternalEmailHtml(
  data: ContactRequest, 
  clientIP: string,
  config: EmailConfig = DEFAULT_EMAIL_CONFIG
): string {
  const submittedAt = new Date().toLocaleString('en-GB', { 
    timeZone: 'Europe/London',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  // Safely extract customer name - never use form name or placeholders
  const customerName = data.name?.trim() || '';
  const displayName = customerName || '(Not provided)';
  const firstName = customerName ? customerName.split(' ')[0] : '';
  
  // Email must be lowercase for display, never uppercase
  const customerEmail = data.email?.trim()?.toLowerCase() || '';
  const hasValidEmail = customerEmail && customerEmail.includes('@');
  
  // Brand color with fallback
  const brandColor = config.brandPrimaryColor || DEFAULT_EMAIL_CONFIG.brandPrimaryColor;
  const brandColorDark = adjustColorBrightness(brandColor, -20); // Darker shade for gradient
  
  // Build summary items (only show fields that exist)
  const summaryItems: string[] = [];
  if (data.need?.trim()) {
    summaryItems.push(`<span style="display: inline-block; padding: 4px 10px; background-color: ${brandColor}15; color: ${brandColor}; border-radius: 4px; font-size: 12px; font-weight: 500; margin-right: 8px; margin-bottom: 4px;">${escapeHtml(data.need)}</span>`);
  }
  if (data.budget?.trim()) {
    summaryItems.push(`<span style="display: inline-block; padding: 4px 10px; background-color: #f59e0b15; color: #b45309; border-radius: 4px; font-size: 12px; font-weight: 500; margin-right: 8px; margin-bottom: 4px;">${escapeHtml(data.budget)}</span>`);
  }
  if (data.deadline?.trim()) {
    summaryItems.push(`<span style="display: inline-block; padding: 4px 10px; background-color: #6366f115; color: #4f46e5; border-radius: 4px; font-size: 12px; font-weight: 500; margin-bottom: 4px;">${escapeHtml(data.deadline)}</span>`);
  }
  const hasSummary = summaryItems.length > 0;
  
  // Build reply mailto link with pre-filled body
  const replySubject = encodeURIComponent('Re: Your enquiry');
  const replyBody = encodeURIComponent(`Hi ${firstName || 'there'},\n\nThanks for reaching out — we've received your enquiry and will get back to you within 24–48 hours (Mon–Fri).\n\n`);
  const replyMailtoLink = hasValidEmail 
    ? `mailto:${customerEmail}?subject=${replySubject}&body=${replyBody}` 
    : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>New Enquiry - ${escapeHtml(config.brandName)}</title>
  <style>
    @media (prefers-color-scheme: dark) {
      .email-body { background-color: #1f2937 !important; }
      .email-card { background-color: #111827 !important; }
      .section-bg { background-color: #1f2937 !important; }
      .text-primary { color: #f9fafb !important; }
      .text-secondary { color: #d1d5db !important; }
      .footer-bg { background-color: #1f2937 !important; }
    }
  </style>
</head>
<body class="email-body" style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table class="email-card" role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header with configurable brand color -->
          <tr>
            <td style="background: linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">New Project Enquiry</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">${escapeHtml(config.brandName)} Contact Form</p>
              <p style="margin: 12px 0 0; color: rgba(255,255,255,0.75); font-size: 12px;">We typically respond within 24–48 hours (Mon–Fri).</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              ${hasSummary ? `
              <!-- Quick Summary -->
              <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 12px 16px; background-color: #f9fafb; border-radius: 8px; text-align: center;">
                    ${summaryItems.join('')}
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td class="section-bg" style="padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid ${brandColor};">
                    <h2 class="text-primary" style="margin: 0 0 12px; color: #111827; font-size: 16px; font-weight: 600;">Contact Details</h2>
                    <p class="text-secondary" style="margin: 0 0 8px; color: #374151; font-size: 14px;">
                      <strong>Name:</strong> ${escapeHtml(displayName)}
                    </p>
                    <p class="text-secondary" style="margin: 0 0 8px; color: #374151; font-size: 14px;">
                      <strong>Email:</strong> ${hasValidEmail 
                        ? `<a href="mailto:${escapeHtml(customerEmail)}" style="color: ${brandColor}; text-decoration: none;">${escapeHtml(customerEmail)}</a>` 
                        : '<span style="color: #9ca3af; font-style: italic;">(Not provided)</span>'}
                    </p>
                    ${data.phone?.trim() ? `<p class="text-secondary" style="margin: 0; color: #374151; font-size: 14px;"><strong>Phone:</strong> <a href="tel:${escapeHtml(data.phone)}" style="color: ${brandColor}; text-decoration: none;">${escapeHtml(data.phone)}</a></p>` : ''}
                  </td>
                </tr>
              </table>

              <!-- Project Details -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td class="section-bg" style="padding: 16px; background-color: #f9fafb; border-radius: 8px;">
                    <h2 class="text-primary" style="margin: 0 0 12px; color: #111827; font-size: 16px; font-weight: 600;">Project Details</h2>
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td class="text-secondary" style="padding: 4px 0; color: #6b7280; font-size: 14px; width: 120px;">Project Type:</td>
                        <td class="text-primary" style="padding: 4px 0; color: #111827; font-size: 14px;">${escapeHtml(data.need?.trim() || 'Not specified')}</td>
                      </tr>
                      <tr>
                        <td class="text-secondary" style="padding: 4px 0; color: #6b7280; font-size: 14px;">Budget Range:</td>
                        <td class="text-primary" style="padding: 4px 0; color: #111827; font-size: 14px;">${escapeHtml(data.budget?.trim() || 'Not specified')}</td>
                      </tr>
                      <tr>
                        <td class="text-secondary" style="padding: 4px 0; color: #6b7280; font-size: 14px;">Deadline:</td>
                        <td class="text-primary" style="padding: 4px 0; color: #111827; font-size: 14px;">${escapeHtml(data.deadline?.trim() || 'Not specified')}</td>
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
                    <p style="margin: 0; color: #78350f; font-size: 14px; white-space: pre-wrap;">${escapeHtml(data.message || '(No message provided)')}</p>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center; padding-top: 16px;">
                    ${hasValidEmail 
                      ? `<a href="${replyMailtoLink}" 
                           style="display: inline-block; padding: 14px 28px; background-color: ${brandColor}; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                          Reply to customer
                        </a>`
                      : `<p style="margin: 0; color: #9ca3af; font-size: 13px; font-style: italic;">No email provided — reply unavailable.</p>`
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer with debug metadata -->
          <tr>
            <td class="footer-bg" style="padding: 20px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 4px; color: #6b7280; font-size: 12px;">
                      Submitted: ${submittedAt}
                    </p>
                    ${config.sourceUrl ? `<p style="margin: 0 0 4px; color: #9ca3af; font-size: 11px;">Source: ${escapeHtml(config.sourceUrl)}</p>` : ''}
                    <p style="margin: 0; color: #d1d5db; font-size: 10px;">
                      IP: ${clientIP}
                    </p>
                  </td>
                </tr>
              </table>
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

// Helper to darken/lighten hex color
function adjustColorBrightness(hex: string, percent: number): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  // Adjust brightness
  r = Math.max(0, Math.min(255, r + (r * percent / 100)));
  g = Math.max(0, Math.min(255, g + (g * percent / 100)));
  b = Math.max(0, Math.min(255, b + (b * percent / 100)));
  
  // Convert back to hex
  return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

interface ConfirmationEmailData {
  name?: string;
  projectType?: string;
  budget?: string;
  deadline?: string;
}

function getConfirmationEmailHtml(data: ConfirmationEmailData, config: EmailConfig = DEFAULT_EMAIL_CONFIG): string {
  const customerName = data.name?.trim() || '';
  const hasName = customerName.length > 0;
  
  // Brand color with fallback
  const brandColor = config.brandPrimaryColor || DEFAULT_EMAIL_CONFIG.brandPrimaryColor;
  const brandColorDark = adjustColorBrightness(brandColor, -20);
  
  // Build summary items (only show fields that exist)
  const summaryRows: string[] = [];
  if (data.projectType?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 8px 12px; color: #6b7280; font-size: 13px; width: 110px; vertical-align: top;">Project type</td>
        <td style="padding: 8px 12px; color: #111827; font-size: 13px; font-weight: 500;">${escapeHtml(data.projectType)}</td>
      </tr>
    `);
  }
  if (data.budget?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 8px 12px; color: #6b7280; font-size: 13px; vertical-align: top;">Budget range</td>
        <td style="padding: 8px 12px; color: #111827; font-size: 13px; font-weight: 500;">${escapeHtml(data.budget)}</td>
      </tr>
    `);
  }
  if (data.deadline?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 8px 12px; color: #6b7280; font-size: 13px; vertical-align: top;">Deadline</td>
        <td style="padding: 8px 12px; color: #111827; font-size: 13px; font-weight: 500;">${escapeHtml(data.deadline)}</td>
      </tr>
    `);
  }
  const hasSummary = summaryRows.length > 0;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>We've received your enquiry - ${escapeHtml(config.brandName)}</title>
  <style>
    @media (prefers-color-scheme: dark) {
      .email-body { background-color: #1f2937 !important; }
      .email-card { background-color: #111827 !important; }
      .section-bg { background-color: #1f2937 !important; }
      .text-primary { color: #f9fafb !important; }
      .text-secondary { color: #d1d5db !important; }
      .text-muted { color: #9ca3af !important; }
      .footer-bg { background-color: #1f2937 !important; }
      .summary-table td { color: #d1d5db !important; }
    }
  </style>
</head>
<body class="email-body" style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table class="email-card" role="presentation" style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
          <!-- Header with brand gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%); padding: 28px 32px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.3px;">We've received your enquiry</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px 32px 24px;">
              ${hasName ? `<p class="text-primary" style="margin: 0 0 20px; color: #111827; font-size: 15px;">Hi ${escapeHtml(customerName)},</p>` : ''}
              
              <!-- Confirmation message -->
              <p class="text-secondary" style="margin: 0 0 8px; color: #374151; font-size: 15px;">
                Thanks — your enquiry has been received.
              </p>
              <p class="text-muted" style="margin: 0 0 24px; color: #6b7280; font-size: 14px;">
                We typically respond within 24–48 hours (Mon–Fri).
              </p>

              ${hasSummary ? `
              <!-- Summary section -->
              <table class="summary-table" role="presentation" style="width: 100%; margin-bottom: 24px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 13px; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.5px;">Your submission</p>
                  </td>
                </tr>
                ${summaryRows.join('')}
              </table>
              ` : ''}

              <!-- Reply instruction -->
              <p class="text-secondary" style="margin: 0 0 24px; color: #374151; font-size: 14px; padding: 12px 16px; background-color: ${brandColor}08; border-left: 3px solid ${brandColor}; border-radius: 0 6px 6px 0;">
                If you need to add anything, you can reply directly to this email.
              </p>

              <!-- Signature -->
              <p class="text-primary" style="margin: 0; color: #374151; font-size: 14px;">
                Best regards,<br>
                <strong style="color: #111827;">${escapeHtml(config.brandName)}</strong>
              </p>
            </td>
          </tr>

          <!-- Sister brand section (subtle) -->
          <tr>
            <td style="padding: 0 32px 28px;">
              <table role="presentation" style="width: 100%; border-top: 1px solid #e5e7eb; padding-top: 24px;">
                <tr>
                  <td>
                    <p class="text-muted" style="margin: 0 0 12px; color: #6b7280; font-size: 12px;">
                      If you also need help with custom PCs or technical support, our sister brand may be useful:
                    </p>
                    <p style="margin: 0 0 16px;">
                      <a href="https://builds.luminousanddeliver.co.uk/" style="color: ${brandColor}; text-decoration: none; font-size: 13px; font-weight: 500;">builds.luminousanddeliver.co.uk</a>
                    </p>
                    
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="vertical-align: top; width: 50%; padding-right: 12px;">
                          <p style="margin: 0 0 6px; color: #374151; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px;">What you get</p>
                          <ul style="margin: 0; padding: 0 0 0 14px; color: #6b7280; font-size: 11px; line-height: 1.7;">
                            <li>Remote support for quick fixes</li>
                            <li>Network & Wi-Fi troubleshooting</li>
                            <li>Hardware advice & upgrades</li>
                            <li>Software support</li>
                          </ul>
                        </td>
                        <td style="vertical-align: top; width: 50%; padding-left: 12px;">
                          <p style="margin: 0 0 6px; color: #374151; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px;">What's covered</p>
                          <ul style="margin: 0; padding: 0 0 0 14px; color: #6b7280; font-size: 11px; line-height: 1.7;">
                            <li>Email setup & troubleshooting</li>
                            <li>Printer & peripheral setup</li>
                            <li>Cloud storage & backups</li>
                            <li>Password & security guidance</li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-bg" style="padding: 16px 32px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0 0 4px; color: #6b7280; font-size: 11px;">
                ${escapeHtml(config.brandName)} • London, UK
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 10px;">
                <a href="https://digital.luminousanddeliver.co.uk" style="color: ${brandColor}; text-decoration: none;">digital.luminousanddeliver.co.uk</a>
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

    // Email config - use brand colors and settings
    const emailConfig: EmailConfig = {
      brandPrimaryColor: "#0d9488", // Teal-600 matching L&D Digital site
      brandName: "L&D Digital",
      sourceUrl: request.headers.get("Referer") || "https://digital.luminousanddeliver.co.uk/contact",
    };

    // Send internal email to site owner via Resend REST API
    const customerName = name?.trim() || '';
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
        subject: `New enquiry from ${customerName || 'a visitor'} – L&D Digital`,
        html: getInternalEmailHtml(body, clientIP, emailConfig),
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
    const confirmationEmailData: ConfirmationEmailData = {
      name: name,
      projectType: need,
      budget: budget,
      deadline: deadline,
    };
    
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
        subject: "We've received your enquiry — we'll be in touch shortly",
        html: getConfirmationEmailHtml(confirmationEmailData, emailConfig),
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