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
  const now = new Date();
  const submittedAt = now.toLocaleString('en-GB', { 
    timeZone: 'Europe/London',
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Safely extract customer name - never use form name or placeholders
  const customerName = data.name?.trim() || '';
  const displayName = customerName || '(Not provided)';
  const firstName = customerName ? customerName.split(' ')[0] : '';
  
  // Email must be lowercase for display, never uppercase
  const customerEmail = data.email?.trim()?.toLowerCase() || '';
  const hasValidEmail = customerEmail && customerEmail.includes('@');
  
  // Phone formatting - compute E.164 and display formats
  const customerPhone = data.phone?.trim() || '';
  const hasPhone = customerPhone.length > 0;
  
  // Parse phone to E.164 format (+447356260648) and display format
  let phoneE164 = '';
  let phoneDigitsOnly = '';
  let phoneDisplay = customerPhone;
  
  if (hasPhone) {
    // Remove all non-digit characters
    const digitsOnly = customerPhone.replace(/\D/g, '');
    
    // Convert to E.164 format (UK assumed)
    if (digitsOnly.startsWith('44')) {
      phoneE164 = '+' + digitsOnly;
      phoneDigitsOnly = digitsOnly;
    } else if (digitsOnly.startsWith('0')) {
      phoneE164 = '+44' + digitsOnly.substring(1);
      phoneDigitsOnly = '44' + digitsOnly.substring(1);
    } else {
      // Assume UK number without prefix
      phoneE164 = '+44' + digitsOnly;
      phoneDigitsOnly = '44' + digitsOnly;
    }
    
    // Format display nicely if it looks like a UK mobile (07xxx)
    if (digitsOnly.startsWith('07') && digitsOnly.length === 11) {
      phoneDisplay = digitsOnly.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
    }
  }
  
  // Brand color with fallback
  const brandColor = config.brandPrimaryColor || DEFAULT_EMAIL_CONFIG.brandPrimaryColor;
  const brandColorDark = adjustColorBrightness(brandColor, -15);
  
  // Check if deadline is urgent (within 7 days)
  let isUrgent = false;
  let daysUntilDeadline: number | null = null;
  let deadlineDisplay = data.deadline?.trim() || '';
  
  if (deadlineDisplay) {
    try {
      const deadlineDate = new Date(deadlineDisplay);
      if (!isNaN(deadlineDate.getTime())) {
        daysUntilDeadline = Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        isUrgent = daysUntilDeadline <= 7 && daysUntilDeadline >= 0;
      }
    } catch (e) {
      // Invalid date format, not urgent
    }
  }
  
  // Message character count
  const messageText = data.message?.trim() || '';
  const messageCharCount = messageText.length;
  
  // Build reply mailto link with pre-filled body
  const replySubject = encodeURIComponent('Re: Your enquiry to L&D Digital');
  const replyBody = encodeURIComponent(`Hi ${firstName || 'there'},\n\nThanks for reaching out to L&D Digital! We've reviewed your enquiry and would love to discuss your project further.\n\n`);
  const replyMailtoLink = hasValidEmail 
    ? `mailto:${customerEmail}?subject=${replySubject}&body=${replyBody}` 
    : '';
  
  // WhatsApp links - regular and prefilled
  const projectType = data.need?.trim() || '';
  const whatsappPrefill = encodeURIComponent(`Hi ${firstName || 'there'}, thanks for your enquiry about ${projectType || 'your project'}. When would you like to chat?`);
  const whatsappLink = hasPhone ? `https://wa.me/${phoneDigitsOnly}` : '';
  const whatsappLinkPrefilled = hasPhone ? `https://wa.me/${phoneDigitsOnly}?text=${whatsappPrefill}` : '';

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
      .email-body { background-color: #0f172a !important; }
      .email-card { background-color: #1e293b !important; }
      .section-card { background-color: #334155 !important; border-color: #475569 !important; }
      .text-heading { color: #f1f5f9 !important; }
      .text-primary { color: #e2e8f0 !important; }
      .text-secondary { color: #94a3b8 !important; }
      .text-muted { color: #64748b !important; }
      .footer-bg { background-color: #1e293b !important; }
      .divider { border-color: #334155 !important; }
    }
    @media only screen and (max-width: 600px) {
      .email-card { margin: 0 !important; border-radius: 0 !important; }
      .content-padding { padding: 20px 16px !important; }
      .header-padding { padding: 24px 16px !important; }
      .action-btn { display: block !important; width: 100% !important; margin-bottom: 8px !important; }
      .action-row td { display: block !important; width: 100% !important; }
    }
  </style>
</head>
<body class="email-body" style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f1f5f9; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 32px 16px;">
        <table class="email-card" role="presentation" style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td class="header-padding" style="background: linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%); padding: 28px 32px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    ${isUrgent && daysUntilDeadline !== null ? `<span style="display: inline-block; padding: 4px 10px; background-color: #ef4444; color: #ffffff; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">🔥 Urgent: deadline in ${daysUntilDeadline} day${daysUntilDeadline === 1 ? '' : 's'}</span>` : ''}
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Project Enquiry</h1>
                    <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">${escapeHtml(config.brandName)} Contact Form</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 16px;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="vertical-align: middle;">
                          <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 13px;">
                            📅 <strong>Received:</strong> ${submittedAt}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px;">
                          <span style="display: inline-block; padding: 6px 12px; background-color: rgba(255,255,255,0.2); color: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 600;">
                            ⏱️ Respond within 2–4 hours
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Priority Tags -->
          <tr>
            <td style="padding: 20px 32px 0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    ${data.need?.trim() ? `<span style="display: inline-block; padding: 6px 14px; background-color: #dbeafe; color: #1e40af; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 4px;">📋 ${escapeHtml(data.need)}</span>` : ''}
                    ${data.budget?.trim() ? `<span style="display: inline-block; padding: 6px 14px; background-color: #dcfce7; color: #166534; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 4px;">💰 ${escapeHtml(data.budget)}</span>` : ''}
                    ${deadlineDisplay ? `<span style="display: inline-block; padding: 6px 14px; background-color: ${isUrgent ? '#fee2e2' : '#f3f4f6'}; color: ${isUrgent ? '#b91c1c' : '#374151'}; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 4px;">📆 ${escapeHtml(deadlineDisplay)}</span>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Actions Bar -->
          <tr>
            <td class="content-padding" style="padding: 24px 32px;">
              <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                <tr>
                  <td style="padding: 16px; text-align: center;">
                    <p style="margin: 0 0 12px; color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">⚡ Quick Actions</p>
                    <table role="presentation" class="action-row" style="width: 100%;">
                      <tr>
                        ${hasPhone ? `
                        <td style="padding: 4px; text-align: center;">
                          <a href="${whatsappLinkPrefilled}" class="action-btn" style="display: inline-block; padding: 10px 16px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; min-width: 120px;">
                            💬 WhatsApp
                          </a>
                        </td>
                        ` : ''}
                        ${hasValidEmail ? `
                        <td style="padding: 4px; text-align: center;">
                          <a href="${replyMailtoLink}" class="action-btn" style="display: inline-block; padding: 10px 16px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; min-width: 120px;">
                            ✉️ Reply Email
                          </a>
                        </td>
                        ` : ''}
                        ${hasPhone ? `
                        <td style="padding: 4px; text-align: center;">
                          <a href="tel:${phoneE164}" class="action-btn" style="display: inline-block; padding: 10px 16px; background-color: ${brandColor}; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; min-width: 120px;">
                            📞 Call
                          </a>
                        </td>
                        ` : ''}
                      </tr>
                    </table>
                    ${!hasValidEmail && !hasPhone ? `<p style="margin: 0; color: #94a3b8; font-size: 12px; font-style: italic;">No contact details provided</p>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Details Card -->
          <tr>
            <td style="padding: 0 32px 20px;">
              <table class="section-card" role="presentation" style="width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <tr>
                  <td style="padding: 16px 20px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <p class="text-heading" style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">👤 Contact Details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <!-- Name -->
                    <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <span style="display: inline-block; width: 28px; height: 28px; background-color: ${brandColor}15; border-radius: 6px; text-align: center; line-height: 28px; font-size: 14px;">👤</span>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p class="text-muted" style="margin: 0 0 2px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                          <p class="text-heading" style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">${escapeHtml(displayName)}</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Email -->
                    <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <span style="display: inline-block; width: 28px; height: 28px; background-color: #3b82f615; border-radius: 6px; text-align: center; line-height: 28px; font-size: 14px;">✉️</span>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p class="text-muted" style="margin: 0 0 2px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          ${hasValidEmail 
                            ? `<table role="presentation"><tr>
                                <td><a href="mailto:${escapeHtml(customerEmail)}" style="color: #3b82f6; text-decoration: none; font-size: 15px; font-weight: 500;">${escapeHtml(customerEmail)}</a></td>
                                <td style="padding-left: 8px;"><a href="#" onclick="navigator.clipboard.writeText('${escapeHtml(customerEmail)}'); this.innerText='✓ Copied'; setTimeout(() => this.innerText='📋 Copy', 2000); return false;" style="display: inline-block; padding: 4px 8px; background-color: #f1f5f9; color: #64748b; text-decoration: none; border-radius: 4px; font-size: 11px; font-weight: 500; cursor: pointer;" data-copy="${escapeHtml(customerEmail)}">📋 Copy</a></td>
                              </tr></table>` 
                            : '<p class="text-secondary" style="margin: 0; color: #94a3b8; font-size: 14px; font-style: italic;">(Not provided)</p>'}
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Phone -->
                    ${hasPhone ? `
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <span style="display: inline-block; width: 28px; height: 28px; background-color: #22c55e15; border-radius: 6px; text-align: center; line-height: 28px; font-size: 14px;">📱</span>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p class="text-muted" style="margin: 0 0 2px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                          <table role="presentation"><tr>
                            <td><a href="tel:${phoneE164}" style="color: #22c55e; text-decoration: none; font-size: 15px; font-weight: 500;">${escapeHtml(phoneDisplay)}</a></td>
                            <td style="padding-left: 8px;"><a href="#" onclick="navigator.clipboard.writeText('${phoneE164}'); this.innerText='✓ Copied'; setTimeout(() => this.innerText='📋 Copy', 2000); return false;" style="display: inline-block; padding: 4px 8px; background-color: #f1f5f9; color: #64748b; text-decoration: none; border-radius: 4px; font-size: 11px; font-weight: 500; cursor: pointer;" data-copy="${phoneE164}">📋 Copy</a></td>
                          </tr></table>
                          ${whatsappLink ? `<a href="${whatsappLinkPrefilled}" style="color: #25D366; text-decoration: none; font-size: 12px; font-weight: 500; display: inline-block; margin-top: 4px;">💬 Message on WhatsApp</a>` : ''}
                        </td>
                      </tr>
                    </table>
                    ` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Details Card -->
          <tr>
            <td style="padding: 0 32px 20px;">
              <table class="section-card" role="presentation" style="width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <tr>
                  <td style="padding: 16px 20px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <p class="text-heading" style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">📋 Project Details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 33%; padding: 8px; vertical-align: top;">
                          <div style="padding: 12px; background-color: #f8fafc; border-radius: 8px; text-align: center;">
                            <p class="text-muted" style="margin: 0 0 4px; color: #64748b; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;">Type</p>
                            <p class="text-primary" style="margin: 0; color: #1e293b; font-size: 13px; font-weight: 600;">${escapeHtml(data.need?.trim() || 'Not specified')}</p>
                          </div>
                        </td>
                        <td style="width: 33%; padding: 8px; vertical-align: top;">
                          <div style="padding: 12px; background-color: #f8fafc; border-radius: 8px; text-align: center;">
                            <p class="text-muted" style="margin: 0 0 4px; color: #64748b; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;">Budget</p>
                            <p class="text-primary" style="margin: 0; color: #1e293b; font-size: 13px; font-weight: 600;">${escapeHtml(data.budget?.trim() || 'Not specified')}</p>
                          </div>
                        </td>
                        <td style="width: 33%; padding: 8px; vertical-align: top;">
                          <div style="padding: 12px; background-color: ${isUrgent ? '#fef2f2' : '#f8fafc'}; border-radius: 8px; text-align: center; ${isUrgent ? 'border: 1px solid #fecaca;' : ''}">
                            <p class="text-muted" style="margin: 0 0 4px; color: ${isUrgent ? '#b91c1c' : '#64748b'}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;">${isUrgent ? '🔥 ' : ''}Deadline</p>
                            <p style="margin: 0; color: ${isUrgent ? '#b91c1c' : '#1e293b'}; font-size: 13px; font-weight: 600;">${escapeHtml(deadlineDisplay || 'Flexible')}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Card -->
          <tr>
            <td style="padding: 0 32px 24px;">
              <table class="section-card" role="presentation" style="width: 100%; background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <tr>
                  <td style="padding: 16px 20px; background-color: #fef3c7; border-bottom: 1px solid #fde68a;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td>
                          <p class="text-heading" style="margin: 0; color: #92400e; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">💬 Message</p>
                        </td>
                        <td style="text-align: right;">
                          <span style="color: #b45309; font-size: 11px; font-weight: 500;">${messageCharCount} characters</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(messageText || '(No message provided)')}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-bg" style="padding: 20px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p class="text-muted" style="margin: 0 0 6px; color: #64748b; font-size: 12px;">
                      📅 Submitted: ${submittedAt}
                    </p>
                    ${config.sourceUrl ? `
                    <p class="text-muted" style="margin: 0 0 6px; color: #94a3b8; font-size: 11px;">
                      🔗 Source: <a href="${escapeHtml(config.sourceUrl)}" style="color: ${brandColor}; text-decoration: none;">${escapeHtml(config.sourceUrl)}</a>
                    </p>
                    ` : ''}
                    <p class="text-muted" style="margin: 0; color: #cbd5e1; font-size: 10px;">
                      IP: ${clientIP}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        
        <!-- Bottom tip -->
        <table role="presentation" style="max-width: 640px; margin: 16px auto 0;">
          <tr>
            <td style="text-align: center;">
              <p style="margin: 0; color: #94a3b8; font-size: 11px;">
                💡 Tip: Reply quickly to convert more leads — aim for under 2 hours during business hours.
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
  const brandColorDark = adjustColorBrightness(brandColor, -15);
  const brandColorLight = adjustColorBrightness(brandColor, 85); // Very light tint for backgrounds
  
  // WhatsApp config
  const whatsappNumber = '447961341548';
  const whatsappMessage = encodeURIComponent('Hi, I just submitted an enquiry on your website and wanted to follow up.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // Build summary items (only show fields that exist)
  const summaryRows: string[] = [];
  if (data.projectType?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 10px 16px; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top; border-bottom: 1px solid #f3f4f6;">Project type</td>
        <td style="padding: 10px 16px; color: #111827; font-size: 13px; font-weight: 500; border-bottom: 1px solid #f3f4f6;">${escapeHtml(data.projectType)}</td>
      </tr>
    `);
  }
  if (data.budget?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 10px 16px; color: #6b7280; font-size: 13px; vertical-align: top; border-bottom: 1px solid #f3f4f6;">Budget range</td>
        <td style="padding: 10px 16px; color: #111827; font-size: 13px; font-weight: 500; border-bottom: 1px solid #f3f4f6;">${escapeHtml(data.budget)}</td>
      </tr>
    `);
  }
  if (data.deadline?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 10px 16px; color: #6b7280; font-size: 13px; vertical-align: top;">Deadline</td>
        <td style="padding: 10px 16px; color: #111827; font-size: 13px; font-weight: 500;">${escapeHtml(data.deadline)}</td>
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
  <title>Thanks for getting in touch - ${escapeHtml(config.brandName)}</title>
  <style>
    @media (prefers-color-scheme: dark) {
      .email-body { background-color: #1a1a1a !important; }
      .email-card { background-color: #262626 !important; }
      .section-bg { background-color: #333333 !important; }
      .text-primary { color: #f9fafb !important; }
      .text-secondary { color: #d1d5db !important; }
      .text-muted { color: #9ca3af !important; }
      .footer-bg { background-color: #1f1f1f !important; }
      .summary-table td { color: #d1d5db !important; }
      .callout-box { background-color: #451a03 !important; border-color: #92400e !important; }
    }
    @media only screen and (max-width: 600px) {
      .email-card { margin: 0 !important; border-radius: 0 !important; }
      .content-padding { padding: 24px 20px !important; }
      .header-padding { padding: 24px 20px !important; }
    }
  </style>
</head>
<body class="email-body" style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f0f4f5; line-height: 1.65;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 16px;">
        <table class="email-card" role="presentation" style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
          
          <!-- Header with brand gradient -->
          <tr>
            <td class="header-padding" style="background: linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%); padding: 36px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">Thanks for getting in touch!</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">We're excited to learn more about your project</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td class="content-padding" style="padding: 36px 40px 28px;">
              ${hasName ? `<p class="text-primary" style="margin: 0 0 20px; color: #1f2937; font-size: 16px; font-weight: 500;">Hi ${escapeHtml(customerName)},</p>` : ''}
              
              <!-- Opening message -->
              <p class="text-secondary" style="margin: 0 0 24px; color: #4b5563; font-size: 15px; line-height: 1.7;">
                We've received your enquiry and we're excited to learn more about your project. Our team will review your requirements shortly.
              </p>

              <!-- What happens next callout box - amber style with left border -->
              <table role="presentation" style="width: 100%; margin-bottom: 28px;">
                <tr>
                  <td class="callout-box" style="padding: 16px 20px; background-color: #fef9f3; border-left: 4px solid #f59e0b; border-radius: 6px;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="vertical-align: top;">
                          <p style="margin: 0 0 8px; color: #92400e; font-size: 14px; font-weight: 600; display: flex; align-items: center;">
                            <span style="margin-right: 6px;">⏱️</span> What happens next?
                          </p>
                          <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                            We'll review your requirements and get back to you within <strong style="color: #b45309;">24–48 hours</strong> (during business hours) with a clear quote and next steps.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Additional message -->
              <p class="text-secondary" style="margin: 0 0 24px; color: #4b5563; font-size: 14px; line-height: 1.7;">
                In the meantime, if you have any additional details to share or questions, feel free to reply to this email or message us on WhatsApp.
              </p>

              <!-- WhatsApp button -->
              <table role="presentation" style="width: 100%; margin-bottom: 32px;">
                <tr>
                  <td style="text-align: center;">
                    <a href="${whatsappLink}" style="display: inline-block; padding: 14px 32px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);">
                      <span style="vertical-align: middle;">💬</span>&nbsp;&nbsp;Message us on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

              ${hasSummary ? `
              <!-- Summary section -->
              <table class="summary-table" role="presentation" style="width: 100%; margin-bottom: 28px; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="padding: 14px 16px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 12px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.8px;">📋 Your submission details</p>
                  </td>
                </tr>
                ${summaryRows.join('')}
              </table>
              ` : ''}

              <!-- Signature -->
              <table role="presentation" style="width: 100%; border-top: 1px solid #e5e7eb; padding-top: 24px;">
                <tr>
                  <td>
                    <p class="text-primary" style="margin: 0 0 4px; color: #374151; font-size: 14px;">
                      Best regards,
                    </p>
                    <p style="margin: 0; color: #111827; font-size: 15px; font-weight: 600;">${escapeHtml(config.brandName)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sister brand section (subtle) -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <table role="presentation" style="width: 100%; background-color: #fafafa; border-radius: 10px; padding: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <p class="text-muted" style="margin: 0 0 10px; color: #6b7280; font-size: 12px;">
                      If you also need help with custom PCs or technical support, our sister brand may be useful:
                    </p>
                    <p style="margin: 0 0 14px;">
                      <a href="https://builds.luminousanddeliver.co.uk/" style="color: ${brandColor}; text-decoration: none; font-size: 13px; font-weight: 600;">🖥️ builds.luminousanddeliver.co.uk</a>
                    </p>
                    
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="vertical-align: top; width: 50%; padding-right: 10px;">
                          <p style="margin: 0 0 6px; color: #4b5563; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">What you get</p>
                          <ul style="margin: 0; padding: 0 0 0 14px; color: #6b7280; font-size: 11px; line-height: 1.8;">
                            <li>Remote support for quick fixes</li>
                            <li>Network & Wi-Fi troubleshooting</li>
                            <li>Hardware advice & upgrades</li>
                            <li>Software support</li>
                          </ul>
                        </td>
                        <td style="vertical-align: top; width: 50%; padding-left: 10px;">
                          <p style="margin: 0 0 6px; color: #4b5563; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px;">What's covered</p>
                          <ul style="margin: 0; padding: 0 0 0 14px; color: #6b7280; font-size: 11px; line-height: 1.8;">
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
            <td class="footer-bg" style="padding: 20px 40px; background-color: #f3f4f6; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0 0 6px; color: #6b7280; font-size: 12px; font-weight: 500;">
                ${escapeHtml(config.brandName)} • London, UK
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                <a href="https://digital.luminousanddeliver.co.uk" style="color: ${brandColor}; text-decoration: none;">digital.luminousanddeliver.co.uk</a>
              </p>
            </td>
          </tr>
        </table>
        
        <!-- Unsubscribe footer -->
        <table role="presentation" style="max-width: 580px; margin: 16px auto 0;">
          <tr>
            <td style="text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 10px;">
                This is a one-time confirmation email. You won't receive marketing emails unless you subscribe.
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