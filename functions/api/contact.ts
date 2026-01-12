// Cloudflare Pages Function - Contact Form Handler
// POST /api/contact
// Sends: (1) customer confirmation email + optional plain-text fallback (2) internal admin notification email
// Tracks confirmation delivery status in KV for Resend webhook updates.

interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  EMAIL_STATUS_KV?: KVNamespace;
  FROM_EMAIL?: string;
  REPLY_TO_EMAIL?: string;
  TO_EMAIL?: string;
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

// Email delivery status tracking (stored in KV for webhook updates)
interface EmailStatusRecord {
  inquiryId: string;
  resendEmailId: string;
  userEmail: string;
  timestamp: string;
  confirmationStatus: "sent" | "delivered" | "bounced" | "failed";
  bounceReason?: string;
  lastUpdated: string;
}

// Confirmation status for admin email display
type ConfirmationStatusType = "sent" | "failed" | "not_sent";

// Plain fallback detection result
interface PlainFallbackResult {
  needed: boolean;
  reason: "privacy_relay" | "education" | "";
  reasonDisplay: string;
}

// Detect Apple Hide My Email / privacy relay domains
function isPrivacyRelayEmail(email: string): boolean {
  const domain = email.toLowerCase().split("@")[1] || "";
  const localPart = email.toLowerCase().split("@")[0] || "";

  return (
    domain.includes("privaterelay") ||
    domain.includes("icloud.com") ||
    domain.includes("hide.email") ||
    domain.includes("relay.firefox.com") ||
    domain.includes("duck.com") ||
    domain.includes("simplelogin") ||
    domain.includes("anonaddy") ||
    domain.includes("burnermail") ||
    domain.includes("guerrillamail") ||
    // Random alias pattern: 20+ alphanumeric chars in local part
    /^[a-z0-9]{20,}$/.test(localPart)
  );
}

// Detect education/university domains
function isEducationEmail(email: string): boolean {
  const domain = email.toLowerCase().split("@")[1] || "";

  return (
    domain.endsWith(".ac.uk") ||
    domain.endsWith(".edu") ||
    domain.endsWith(".edu.au") ||
    domain.endsWith(".edu.sg") ||
    domain.endsWith(".edu.in") ||
    domain.endsWith(".edu.my") ||
    domain.includes(".sch.") ||
    domain.includes("university") ||
    domain.includes("college") ||
    domain.includes("student") ||
    // Common UK universities
    /gre\.ac\.uk|ucl\.ac\.uk|kcl\.ac\.uk|imperial\.ac\.uk|ox\.ac\.uk|cam\.ac\.uk|lse\.ac\.uk|qmul\.ac\.uk/.test(domain)
  );
}

// Combined check for plain fallback necessity
function needsPlainFallback(email: string): PlainFallbackResult {
  if (isPrivacyRelayEmail(email)) {
    return { needed: true, reason: "privacy_relay", reasonDisplay: "Privacy/relay email detected" };
  }
  if (isEducationEmail(email)) {
    return { needed: true, reason: "education", reasonDisplay: "School/university email detected" };
  }
  return { needed: false, reason: "", reasonDisplay: "" };
}

// Generate plain-text fallback confirmation email (no HTML, no links, no tracking)
function getPlainConfirmationEmail(inquiryId: string, customerName: string): { subject: string; text: string } {
  const firstName = customerName?.split(" ")[0]?.trim() || "";
  const greeting = firstName ? `Hi ${firstName}` : "Hello";

  return {
    subject: `We received your enquiry (Ref: ${inquiryId})`,
    text: `${greeting},

Thank you for getting in touch with L&D Digital.

Your enquiry reference is: ${inquiryId}

What happens next:
- We review your request within 24-48 hours (Mon-Fri)
- You'll receive a reply with a quote and next steps
- If you don't hear from us, please reply to this email

Questions? Simply reply to this email or contact us at:
Email: contact@luminousanddeliver.co.uk
Phone: +44 7488 855786

Best regards,
L&D Digital
London, UK`,
  };
}

// Generate a short unique inquiry ID (8 chars, alphanumeric)
function generateInquiryId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Avoid ambiguous chars
  let result = "";
  const randomBytes = crypto.getRandomValues(new Uint8Array(8));
  for (let i = 0; i < 8; i++) {
    result += chars[randomBytes[i] % chars.length];
  }
  return result;
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

  if (record.count >= RATE_LIMIT) return true;

  record.count++;
  return false;
}

// Clean up old entries periodically
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

// Helper to darken/lighten hex color
function adjustColorBrightness(hex: string, percent: number): string {
  hex = hex.replace(/^#/, "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  r = Math.max(0, Math.min(255, r + (r * percent) / 100));
  g = Math.max(0, Math.min(255, g + (g * percent) / 100));
  b = Math.max(0, Math.min(255, b + (b * percent) / 100));

  return `#${Math.round(r).toString(16).padStart(2, "0")}${Math.round(g)
    .toString(16)
    .padStart(2, "0")}${Math.round(b).toString(16).padStart(2, "0")}`;
}

// Helper to escape HTML
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

// HTML Email Templates
function getInternalEmailHtml(
  data: ContactRequest,
  clientIP: string,
  config: EmailConfig = DEFAULT_EMAIL_CONFIG,
  submittedAtInput?: string | number,
  timezone: string = "UTC",
  inquiryId?: string,
  confirmationStatus?: ConfirmationStatusType,
  confirmationFailReason?: string,
  plainFallbackSent?: boolean,
  plainFallbackReason?: string,
): string {
  const now = new Date();

  const submittedAtDate = (() => {
    if (typeof submittedAtInput === "number") {
      const d = new Date(submittedAtInput);
      return isNaN(d.getTime()) ? now : d;
    }
    if (typeof submittedAtInput === "string" && submittedAtInput.trim()) {
      const d = new Date(submittedAtInput);
      return isNaN(d.getTime()) ? now : d;
    }
    return now;
  })();

  const tzLabel = timezone === "Europe/London" ? "UK" : timezone;

  const formatEmailDateTime = (d: Date): string => {
    const raw = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(d);

    const cleaned = raw
      .replace(/,/g, "")
      .replace(/\b(am|pm)\b/i, (m) => m.toUpperCase())
      .replace(/(\d{4})\s/, "$1, ");

    return `${cleaned} (${tzLabel})`;
  };

  const submittedAtFormatted = formatEmailDateTime(submittedAtDate);

  const slaHours = 48;
  const dueAt = new Date(submittedAtDate.getTime() + slaHours * 60 * 60 * 1000);
  const dueAtFormatted = formatEmailDateTime(dueAt);

  const elapsedMs = now.getTime() - submittedAtDate.getTime();
  const elapsedMinutes = Math.max(0, Math.floor(elapsedMs / (1000 * 60)));
  const elapsedHours = Math.max(0, Math.floor(elapsedMs / (1000 * 60 * 60)));

  const getElapsedLabel = (mins: number, hrs: number): string => {
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins} min${mins === 1 ? "" : "s"} ago`;
    if (hrs < 48) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
    const overdueHours = hrs - 48;
    return `Overdue: ${overdueHours} hour${overdueHours === 1 ? "" : "s"} past SLA`;
  };

  const elapsedLabel = getElapsedLabel(elapsedMinutes, elapsedHours);

  const timeRemainingMs = dueAt.getTime() - now.getTime();
  const hoursRemaining = Math.max(0, Math.floor(timeRemainingMs / (1000 * 60 * 60)));
  const minutesRemaining = Math.max(0, Math.floor((timeRemainingMs % (1000 * 60 * 60)) / (1000 * 60)));

  const getTimeRemainingLabel = (): string => {
    if (timeRemainingMs <= 0) return "⚠️ OVERDUE";
    if (hoursRemaining >= 24) {
      const days = Math.floor(hoursRemaining / 24);
      const remainingHrs = hoursRemaining % 24;
      return `${days}d ${remainingHrs}h remaining`;
    }
    if (hoursRemaining > 0) return `${hoursRemaining}h ${minutesRemaining}m remaining`;
    return `${minutesRemaining}m remaining`;
  };

  const timeRemainingLabel = getTimeRemainingLabel();

  const getSlaStatus = (hrs: number): { color: string; bgColor: string; label: string } => {
    if (hrs >= 48) return { color: "#b91c1c", bgColor: "#fee2e2", label: "Overdue" };
    if (hrs >= 24) return { color: "#92400e", bgColor: "#fef3c7", label: "Due Soon" };
    return { color: "#166534", bgColor: "#dcfce7", label: "On Track" };
  };

  const slaStatus = getSlaStatus(elapsedHours);

  const customerName = data.name?.trim() || "";
  const displayName = customerName || "(Not provided)";
  const firstName = customerName ? customerName.split(" ")[0] : "";
  const capitalizedFirstName = firstName ? firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() : "";

  const customerEmail = data.email?.trim()?.toLowerCase() || "";
  const hasValidEmail = customerEmail && customerEmail.includes("@");

  const customerPhone = data.phone?.trim() || "";
  const hasPhone = customerPhone.length >= 10;

  let phoneE164 = "";
  let phoneDigitsOnly = "";
  let phoneDisplay = customerPhone;

  if (hasPhone) {
    const digitsOnly = customerPhone.replace(/\D/g, "");
    if (digitsOnly.length >= 10 && digitsOnly.length <= 13) {
      if (digitsOnly.startsWith("08") && digitsOnly.length >= 10) {
        phoneE164 = "+353" + digitsOnly.substring(1);
        phoneDigitsOnly = "353" + digitsOnly.substring(1);
      } else if (digitsOnly.startsWith("44")) {
        phoneE164 = "+" + digitsOnly;
        phoneDigitsOnly = digitsOnly;
      } else if (digitsOnly.startsWith("353")) {
        phoneE164 = "+" + digitsOnly;
        phoneDigitsOnly = digitsOnly;
      } else if (digitsOnly.startsWith("1") && digitsOnly.length >= 11 && !digitsOnly.startsWith("07")) {
        phoneE164 = "+" + digitsOnly;
        phoneDigitsOnly = digitsOnly;
      } else if (digitsOnly.startsWith("0")) {
        phoneE164 = "+44" + digitsOnly.substring(1);
        phoneDigitsOnly = "44" + digitsOnly.substring(1);
      } else {
        phoneE164 = "+44" + digitsOnly;
        phoneDigitsOnly = "44" + digitsOnly;
      }

      if (digitsOnly.startsWith("07") && digitsOnly.length === 11) {
        phoneDisplay = digitsOnly.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3");
      }
    }
  }

  const hasValidPhone = phoneDigitsOnly.length > 0;

  const brandColor = config.brandPrimaryColor || DEFAULT_EMAIL_CONFIG.brandPrimaryColor;
  const brandColorDark = adjustColorBrightness(brandColor, -15);

  let isUrgent = false;
  let daysUntilDeadline: number | null = null;
  let deadlineDisplay = data.deadline?.trim() || "";

  if (deadlineDisplay) {
    try {
      const deadlineDate = new Date(deadlineDisplay);
      if (!isNaN(deadlineDate.getTime())) {
        daysUntilDeadline = Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        isUrgent = daysUntilDeadline <= 7 && daysUntilDeadline >= 0;
      }
    } catch (_deadlineParseError) {
      // ignore
    }
  }

  const messageText = data.message?.trim() || "";
  const messageCharCount = messageText.length;

  const replySubject = encodeURIComponent("Re: Your enquiry to L&D Digital");
  const replyBody = encodeURIComponent(
    `Hi ${capitalizedFirstName || "there"},\n\nThanks for reaching out to L&D Digital! We've reviewed your enquiry and would love to discuss your project further.\n\n`,
  );
  const replyMailtoLink = hasValidEmail ? `mailto:${customerEmail}?subject=${replySubject}&body=${replyBody}` : "";

  const projectTypeMap: Record<string, string> = {
    website: "New Website",
    redesign: "Redesign Existing Site",
    ai: "AI Automation / Chatbot",
    both: "Website + AI",
    "not-sure": "Not Sure Yet",
  };
  const projectTypeRaw = data.need?.trim() || "";
  const projectType = projectTypeMap[projectTypeRaw] || projectTypeRaw || "Not specified";

  const whatsappPrefill = encodeURIComponent(
    `Hi ${capitalizedFirstName || "there"}, thanks for your enquiry about ${projectType || "your project"}. When would be a good time to chat?`,
  );
  const whatsappLink = hasValidPhone ? `https://wa.me/${phoneDigitsOnly}` : "";
  const whatsappLinkPrefilled = hasValidPhone ? `https://wa.me/${phoneDigitsOnly}?text=${whatsappPrefill}` : "";

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
                    <table role="presentation" style="margin-bottom: 16px;">
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 20px; font-weight: 700; color: #ffffff;">
                          <img src="https://digital.luminousanddeliver.co.uk/brand/logo2-email-gradient.png"
                               alt="L&D DIGITAL - Luminous & Deliver" 
                               width="220"
                               height="50"
                               style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%;" />
                        </td>
                      </tr>
                    </table>

                    <table role="presentation" style="margin-bottom: 12px;">
                      <tr>
                        <td>
                          <span style="display: inline-block; padding: 4px 10px; background-color: ${slaStatus.bgColor}; color: ${slaStatus.color}; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 8px;">⏱️ ${slaStatus.label}</span>
                          <span style="display: inline-block; padding: 4px 10px; background-color: rgba(255,255,255,0.15); color: #ffffff; border-radius: 20px; font-size: 11px; font-weight: 600;">SLA: 24–48h (Mon–Fri)</span>
                        </td>
                      </tr>
                    </table>

                    ${
                      inquiryId
                        ? `
                    <table role="presentation" style="margin-bottom: 12px;">
                      <tr>
                        <td>
                          <span style="display: inline-block; padding: 4px 10px; background-color: ${
                            confirmationStatus === "sent"
                              ? "#dcfce7"
                              : confirmationStatus === "failed"
                                ? "#fee2e2"
                                : "#f1f5f9"
                          }; color: ${
                            confirmationStatus === "sent"
                              ? "#166534"
                              : confirmationStatus === "failed"
                                ? "#b91c1c"
                                : "#64748b"
                          }; border-radius: 20px; font-size: 11px; font-weight: 600; margin-right: 6px;">
                            📧 Primary: ${confirmationStatus === "sent" ? "✓ Sent" : confirmationStatus === "failed" ? "✗ Failed" : "Not sent"}
                          </span>
                          <span style="display: inline-block; padding: 4px 10px; background-color: ${
                            plainFallbackSent ? "#dbeafe" : "rgba(255,255,255,0.15)"
                          }; color: ${
                            plainFallbackSent ? "#1e40af" : "rgba(255,255,255,0.7)"
                          }; border-radius: 20px; font-size: 11px; font-weight: 600;">
                            📄 Plain fallback: ${plainFallbackSent ? "✓ Sent" : "No"}
                          </span>
                        </td>
                      </tr>
                      ${
                        plainFallbackSent && plainFallbackReason
                          ? `
                      <tr>
                        <td style="padding-top: 6px;">
                          <span style="color: rgba(255,255,255,0.8); font-size: 11px;">ℹ️ Reason: ${escapeHtml(plainFallbackReason)}</span>
                        </td>
                      </tr>
                      `
                          : ""
                      }
                      ${
                        confirmationStatus === "failed" && confirmationFailReason
                          ? `
                      <tr>
                        <td style="padding-top: 6px;">
                          <span style="color: #fecaca; font-size: 11px;">⚠️ ${escapeHtml(confirmationFailReason)}</span>
                        </td>
                      </tr>
                      `
                          : ""
                      }
                    </table>
                    `
                        : ""
                    }

                    ${isUrgent && daysUntilDeadline !== null ? `<span style="display: inline-block; padding: 4px 10px; background-color: #ef4444; color: #ffffff; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">🔥 Urgent: deadline in ${daysUntilDeadline} day${daysUntilDeadline === 1 ? "" : "s"}</span>` : ""}
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Project Enquiry</h1>
                    <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">${escapeHtml(config.brandName)} Contact Form</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 16px;">
                    <table role="presentation" style="width: 100%; background-color: rgba(0,0,0,0.15); border-radius: 8px; padding: 12px;">
                      <tr>
                        <td style="padding: 12px;">
                          <p style="margin: 0 0 8px; color: rgba(255,255,255,0.9); font-size: 13px;">
                            📅 <strong>Received:</strong> ${submittedAtFormatted}
                            <span style="display: inline-block; margin-left: 8px; padding: 2px 8px; background-color: rgba(255,255,255,0.2); border-radius: 12px; font-size: 11px; font-weight: 600; color: #fef08a;">
                              ${elapsedLabel}
                            </span>
                          </p>
                          <p style="margin: 0 0 4px; color: rgba(255,255,255,0.85); font-size: 12px;">
                            ⏱️ <strong>SLA Countdown:</strong>
                            <span style="display: inline-block; margin-left: 8px; padding: 3px 10px; background-color: ${slaStatus.bgColor}; color: ${slaStatus.color}; border-radius: 12px; font-size: 12px; font-weight: 700;">
                              ${timeRemainingLabel}
                            </span>
                          </p>
                          <p style="margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 11px;">
                            📆 <strong>Response due by:</strong> ${dueAtFormatted}
                          </p>
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
                    ${projectType && projectType !== "Not specified" ? `<span style="display: inline-block; padding: 6px 14px; background-color: #dbeafe; color: #1e40af; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 4px;">📋 ${escapeHtml(projectType)}</span>` : ""}
                    ${data.budget?.trim() ? `<span style="display: inline-block; padding: 6px 14px; background-color: #dcfce7; color: #166534; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 4px;">💰 ${escapeHtml(data.budget)}</span>` : ""}
                    ${deadlineDisplay ? `<span style="display: inline-block; padding: 6px 14px; background-color: ${isUrgent ? "#fee2e2" : "#f3f4f6"}; color: ${isUrgent ? "#b91c1c" : "#374151"}; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 4px;">📆 ${escapeHtml(deadlineDisplay)}</span>` : ""}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${
            inquiryId
              ? `
          <tr>
            <td style="padding: 12px 32px 0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <span style="display: inline-block; padding: 4px 12px; background-color: #f1f5f9; color: #64748b; border-radius: 6px; font-size: 11px; font-weight: 500; font-family: monospace; letter-spacing: 0.5px;">
                      Inquiry ID: ${escapeHtml(inquiryId)}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `
              : ""
          }

          <!-- Quick Actions -->
          <tr>
            <td class="content-padding" style="padding: 24px 32px;">
              <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                <tr>
                  <td style="padding: 16px; text-align: center;">
                    <p style="margin: 0 0 12px; color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">⚡ Quick Actions</p>
                    <table role="presentation" class="action-row" style="width: 100%;">
                      <tr>
                        ${
                          hasValidPhone
                            ? `
                        <td style="padding: 4px; text-align: center;">
                          <a href="${whatsappLinkPrefilled}" class="action-btn" style="display: inline-block; padding: 10px 16px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; min-width: 120px;">
                            💬 WhatsApp
                          </a>
                        </td>
                        `
                            : ""
                        }
                        ${
                          hasValidEmail
                            ? `
                        <td style="padding: 4px; text-align: center;">
                          <a href="${replyMailtoLink}" class="action-btn" style="display: inline-block; padding: 10px 16px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; min-width: 120px;">
                            ✉️ Reply Email
                          </a>
                        </td>
                        `
                            : ""
                        }
                        ${
                          hasValidPhone
                            ? `
                        <td style="padding: 4px; text-align: center;">
                          <a href="tel:${phoneE164}" class="action-btn" style="display: inline-block; padding: 10px 16px; background-color: ${brandColor}; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 12px; font-weight: 600; min-width: 120px;">
                            📞 Call
                          </a>
                        </td>
                        `
                            : ""
                        }
                      </tr>
                    </table>
                    ${!hasValidEmail && !hasValidPhone ? `<p style="margin: 0; color: #94a3b8; font-size: 12px; font-style: italic;">No contact details provided</p>` : ""}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Details -->
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

                    <table role="presentation" style="width: 100%; margin-bottom: 16px;">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <span style="display: inline-block; width: 28px; height: 28px; background-color: #3b82f615; border-radius: 6px; text-align: center; line-height: 28px; font-size: 14px;">✉️</span>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p class="text-muted" style="margin: 0 0 2px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          ${
                            hasValidEmail
                              ? `<a href="mailto:${escapeHtml(customerEmail)}" style="color: #3b82f6; text-decoration: none; font-size: 15px; font-weight: 500;">${escapeHtml(
                                  customerEmail,
                                )}</a>`
                              : '<p class="text-secondary" style="margin: 0; color: #94a3b8; font-size: 14px; font-style: italic;">(Not provided)</p>'
                          }
                        </td>
                      </tr>
                    </table>

                    ${
                      hasValidPhone
                        ? `
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <span style="display: inline-block; width: 28px; height: 28px; background-color: #22c55e15; border-radius: 6px; text-align: center; line-height: 28px; font-size: 14px;">📱</span>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p class="text-muted" style="margin: 0 0 2px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                          <a href="tel:${phoneE164}" style="color: #22c55e; text-decoration: none; font-size: 15px; font-weight: 500;">${escapeHtml(
                            phoneDisplay,
                          )}</a>
                          ${whatsappLink ? `<div style="margin-top: 6px;"><a href="${whatsappLinkPrefilled}" style="color: #25D366; text-decoration: none; font-size: 12px; font-weight: 500;">💬 Message on WhatsApp</a></div>` : ""}
                        </td>
                      </tr>
                    </table>
                    `
                        : ""
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Details -->
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
                            <p class="text-primary" style="margin: 0; color: #1e293b; font-size: 13px; font-weight: 600;">${escapeHtml(
                              projectType,
                            )}</p>
                          </div>
                        </td>
                        <td style="width: 33%; padding: 8px; vertical-align: top;">
                          <div style="padding: 12px; background-color: #f8fafc; border-radius: 8px; text-align: center;">
                            <p class="text-muted" style="margin: 0 0 4px; color: #64748b; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;">Budget</p>
                            <p class="text-primary" style="margin: 0; color: #1e293b; font-size: 13px; font-weight: 600;">${escapeHtml(
                              data.budget?.trim() || "Not specified",
                            )}</p>
                          </div>
                        </td>
                        <td style="width: 33%; padding: 8px; vertical-align: top;">
                          <div style="padding: 12px; background-color: ${isUrgent ? "#fef2f2" : "#f8fafc"}; border-radius: 8px; text-align: center; ${
                            isUrgent ? "border: 1px solid #fecaca;" : ""
                          }">
                            <p class="text-muted" style="margin: 0 0 4px; color: ${isUrgent ? "#b91c1c" : "#64748b"}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;">${
                              isUrgent ? "🔥 " : ""
                            }Deadline</p>
                            <p style="margin: 0; color: ${isUrgent ? "#b91c1c" : "#1e293b"}; font-size: 13px; font-weight: 600;">${escapeHtml(
                              deadlineDisplay || "Flexible",
                            )}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
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
                    <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(
                      messageText || "(No message provided)",
                    )}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 6px; color: #6b7280; font-size: 11px;">
                      📅 Submitted: ${submittedAtFormatted}
                    </p>
                    ${
                      config.sourceUrl
                        ? `
                    <p style="margin: 0 0 6px; color: #6b7280; font-size: 11px;">
                      🔗 Form: <a href="${escapeHtml(config.sourceUrl)}" style="color: #6b7280; text-decoration: underline;">${escapeHtml(
                        config.sourceUrl,
                      )}</a>
                    </p>
                    `
                        : ""
                    }
                    <p style="margin: 0; color: #9ca3af; font-size: 10px;">
                      IP: ${escapeHtml(clientIP)}
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

interface ConfirmationEmailData {
  name?: string;
  projectType?: string;
  budget?: string;
  deadline?: string;
}

function getConfirmationEmailHtml(data: ConfirmationEmailData, config: EmailConfig = DEFAULT_EMAIL_CONFIG): string {
  const customerName = data.name?.trim() || "";
  const hasName = customerName.length > 0;

  const brandColor = config.brandPrimaryColor || DEFAULT_EMAIL_CONFIG.brandPrimaryColor;
  const brandColorDark = adjustColorBrightness(brandColor, -15);

  const whatsappNumber = "447356260648";
  const whatsappMessage = encodeURIComponent(
    "Hi, I just submitted an enquiry on your website and wanted to follow up.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const summaryRows: string[] = [];
  if (data.projectType?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 10px 16px; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top; border-bottom: 1px solid #f3f4f6;">Project type</td>
        <td style="padding: 10px 16px; color: #111827; font-size: 13px; font-weight: 500; border-bottom: 1px solid #f3f4f6;">${escapeHtml(
          data.projectType,
        )}</td>
      </tr>
    `);
  }
  if (data.budget?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 10px 16px; color: #6b7280; font-size: 13px; vertical-align: top; border-bottom: 1px solid #f3f4f6;">Budget range</td>
        <td style="padding: 10px 16px; color: #111827; font-size: 13px; font-weight: 500; border-bottom: 1px solid #f3f4f6;">${escapeHtml(
          data.budget,
        )}</td>
      </tr>
    `);
  }
  if (data.deadline?.trim()) {
    summaryRows.push(`
      <tr>
        <td style="padding: 10px 16px; color: #6b7280; font-size: 13px; vertical-align: top;">Deadline</td>
        <td style="padding: 10px 16px; color: #111827; font-size: 13px; font-weight: 500;">${escapeHtml(
          data.deadline,
        )}</td>
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
          
          <tr>
            <td class="header-padding" style="background: linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%); padding: 36px 40px; text-align: center;">
              <table role="presentation" style="margin: 0 auto 16px;">
                <tr>
                  <td style="text-align: center; font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: 700; color: #ffffff; line-height: 1.2;">
                    <img src="https://digital.luminousanddeliver.co.uk/brand/logo2-email-gradient.png" 
                         alt="L&D DIGITAL – Luminous & Deliver" 
                         width="240"
                         height="55"
                         border="0"
                         loading="eager"
                         style="display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; height: auto; font-family: 'Segoe UI', Arial, sans-serif; font-size: 20px; font-weight: 700; color: #ffffff; font-style: normal; vertical-align: middle;" />
                  </td>
                </tr>
              </table>
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">Thanks for getting in touch!</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">We're excited to learn more about your project</p>
            </td>
          </tr>
          
          <tr>
            <td class="content-padding" style="padding: 36px 40px 28px;">
              ${
                hasName
                  ? `<p class="text-primary" style="margin: 0 0 20px; color: #1f2937; font-size: 16px; font-weight: 500;">Hi ${escapeHtml(
                      customerName,
                    )},</p>`
                  : ""
              }
              
              <p class="text-secondary" style="margin: 0 0 24px; color: #4b5563; font-size: 15px; line-height: 1.7;">
                We've received your enquiry and we're excited to learn more about your project. Our team will review your requirements shortly.
              </p>

              <table role="presentation" style="width: 100%; margin-bottom: 28px;">
                <tr>
                  <td class="callout-box" style="padding: 16px 20px; background-color: #fef9f3; border-left: 4px solid #f59e0b; border-radius: 6px;">
                    <p style="margin: 0 0 8px; color: #92400e; font-size: 14px; font-weight: 600;">
                      ⏱️ What happens next?
                    </p>
                    <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                      We'll review your requirements and get back to you within <strong style="color: #b45309;">24–48 hours</strong> (during business hours) with a clear quote and next steps.
                    </p>
                  </td>
                </tr>
              </table>

              <p class="text-secondary" style="margin: 0 0 24px; color: #4b5563; font-size: 14px; line-height: 1.7;">
                In the meantime, if you have any additional details to share or questions, feel free to reply to this email or message us on WhatsApp.
              </p>

              <table role="presentation" style="width: 100%; margin-bottom: 32px;">
                <tr>
                  <td style="text-align: center;">
                    <a href="${whatsappLink}" style="display: inline-block; padding: 14px 32px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);">
                      💬 Message us on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

              ${
                hasSummary
                  ? `
              <table class="summary-table" role="presentation" style="width: 100%; margin-bottom: 28px; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="padding: 14px 16px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 12px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.8px;">📋 Your submission details</p>
                  </td>
                </tr>
                ${summaryRows.join("")}
              </table>
              `
                  : ""
              }

              <!-- Sister Brand Section - email-template-version: 2026-01-12-ldbuilds-orange -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px; padding-top: 20px; border-top: 1px dashed #e5e7eb;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px; line-height: 1.5;">
                      If you also need help with <strong style="color: #374151; font-weight: 700 !important;">custom PCs</strong> or technical support, our sister brand may be useful:
                    </p>
                    <p style="margin: 0;">
                      <a href="https://builds.luminousanddeliver.co.uk/" style="color: #f46734 !important; text-decoration: none; font-size: 13px; font-weight: 600;">
                        🖥️ builds.luminousanddeliver.co.uk
                      </a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- What You Get / What's Covered Two-Column Section -->
              <table role="presentation" style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td style="vertical-align: top; width: 50%; padding-right: 12px;">
                    <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.5px;">
                      WHAT YOU GET
                    </p>
                    <ul style="margin: 0; padding-left: 16px; color: #4b5563; font-size: 12px; line-height: 1.8;">
                      <li>Remote support for quick fixes</li>
                      <li>Network &amp; Wi-Fi troubleshooting</li>
                      <li>Hardware advice &amp; upgrades</li>
                      <li>Software support</li>
                    </ul>
                  </td>
                  <td style="vertical-align: top; width: 50%; padding-left: 12px;">
                    <p style="margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.5px;">
                      WHAT'S COVERED
                    </p>
                    <ul style="margin: 0; padding-left: 16px; color: #4b5563; font-size: 12px; line-height: 1.8;">
                      <li>Email setup &amp; troubleshooting</li>
                      <li>Printer &amp; peripheral setup</li>
                      <li>Cloud storage &amp; backups</li>
                      <li>Password &amp; security guidance</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <table role="presentation" style="width: 100%; border-top: 1px solid #e5e7eb; padding-top: 24px;">
                <tr>
                  <td>
                    <p class="text-primary" style="margin: 0 0 4px; color: #374151; font-size: 14px;">Speak soon,</p>
                    <p style="margin: 0; color: #111827; font-size: 15px; font-weight: 600;">${escapeHtml(
                      config.brandName,
                    )}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 28px 40px;">
              <table role="presentation" style="width: 100%;">
                <!-- Social Icons Row -->
                <tr>
                  <td style="text-align: center; padding-bottom: 16px;">
                    <a href="https://linkedin.com/company/landdigital" style="display: inline-block; width: 36px; height: 36px; background-color: #334155; border-radius: 50%; text-align: center; line-height: 36px; margin: 0 6px; text-decoration: none;">
                      <span style="color: #e2e8f0; font-size: 14px; font-weight: 600;">in</span>
                    </a>
                    <a href="https://instagram.com/landdigital" style="display: inline-block; width: 36px; height: 36px; background-color: #334155; border-radius: 50%; text-align: center; line-height: 36px; margin: 0 6px; text-decoration: none;">
                      <span style="color: #e2e8f0; font-size: 14px;">📷</span>
                    </a>
                    <a href="https://tiktok.com/@landdigital" style="display: inline-block; width: 36px; height: 36px; background-color: #334155; border-radius: 50%; text-align: center; line-height: 36px; margin: 0 6px; text-decoration: none;">
                      <span style="color: #e2e8f0; font-size: 14px;">♪</span>
                    </a>
                  </td>
                </tr>
                <!-- Company Info -->
                <tr>
                  <td style="text-align: center; padding-bottom: 14px;">
                    <p style="margin: 0 0 4px; color: #e2e8f0; font-size: 13px; font-weight: 500;">L&amp;D Digital - Luminous &amp; Deliver</p>
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">📍 London, UK • East London</p>
                  </td>
                </tr>
                <!-- Navigation Links -->
                <tr>
                  <td style="text-align: center; padding: 12px 0;">
                    <a href="https://luminousanddeliver.co.uk/" style="color: #2dd4bf; text-decoration: none; font-size: 12px; font-weight: 500; margin: 0 8px;">Landing Page</a>
                    <span style="color: #475569;">•</span>
                    <a href="https://ai.luminousanddeliver.co.uk/" style="color: #2dd4bf; text-decoration: none; font-size: 12px; font-weight: 500; margin: 0 8px;">AI</a>
                    <span style="color: #475569;">•</span>
                    <a href="https://seo.luminousanddeliver.co.uk/" style="color: #2dd4bf; text-decoration: none; font-size: 12px; font-weight: 500; margin: 0 8px;">SEO</a>
                  </td>
                </tr>
                <!-- Copyright -->
                <tr>
                  <td style="text-align: center; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <p style="margin: 0; color: #64748b; font-size: 11px;">
                      © 2026 ${escapeHtml(config.brandName)}. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
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
    const body: ContactRequest = await request.json();
    const { name, email, phone, need, budget, deadline, message, turnstileToken } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ ok: false, error: "missing_fields", message: "Please fill in all required fields." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Validate phone if provided
    if (phone && phone.trim()) {
      const phoneDigits = phone.replace(/\D/g, "");
      if (phoneDigits.length < 10 || phoneDigits.length > 13) {
        return new Response(
          JSON.stringify({ ok: false, error: "invalid_phone", message: "Please enter a valid phone number." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
        );
      }
    }

    if (!turnstileToken) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "missing_turnstile_token",
          message: "Please complete the security verification.",
        }),
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
        JSON.stringify({
          ok: false,
          error: "turnstile_failed",
          message: "Security verification failed. Please refresh and try again.",
        }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Email config
    const emailConfig: EmailConfig = {
      brandPrimaryColor: "#0d9488",
      brandName: "L&D Digital",
      sourceUrl: request.headers.get("Referer") || "https://digital.luminousanddeliver.co.uk/contact",
    };

    const fromEmail = env.FROM_EMAIL || "hello@luminousanddeliver.co.uk";
    const replyToEmail = env.REPLY_TO_EMAIL || "contact@luminousanddeliver.co.uk";
    const toEmail = env.TO_EMAIL || "contact@luminousanddeliver.co.uk";

    // IMPORTANT: consistent sender display name
    const fromHeader = `L&D Digital – Luminous & Deliver <${fromEmail}>`;

    // Generate unique inquiry ID
    const inquiryId = generateInquiryId();
    const customerName = name?.trim() || "";
    const submittedAtIso = new Date().toISOString();

    // Track confirmation email status
    let confirmationStatus: ConfirmationStatusType = "not_sent";
    let confirmationFailReason: string | undefined;
    let resendEmailId: string | undefined;

    // Check if plain fallback is needed
    const fallbackCheck = needsPlainFallback(email);
    let plainFallbackSent = false;
    let plainFallbackReason = "";

    // 1) Send confirmation email to user FIRST (so admin email can show status)
    const confirmationEmailData: ConfirmationEmailData = {
      name,
      projectType: need,
      budget,
      deadline,
    };

    try {
      const confirmationEmailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromHeader,
          to: [email],
          reply_to: replyToEmail,
          subject: "We've received your enquiry — we'll be in touch shortly",
          html: getConfirmationEmailHtml(confirmationEmailData, emailConfig),
        }),
      });

      if (confirmationEmailResponse.ok) {
        confirmationStatus = "sent";
        const responseData = (await confirmationEmailResponse.json()) as { id?: string };
        resendEmailId = responseData.id;

        // Store in KV for webhook tracking
        if (env.EMAIL_STATUS_KV && resendEmailId) {
          const statusRecord: EmailStatusRecord = {
            inquiryId,
            resendEmailId,
            userEmail: email,
            timestamp: submittedAtIso,
            confirmationStatus: "sent",
            lastUpdated: submittedAtIso,
          };

          try {
            await env.EMAIL_STATUS_KV.put(`email:${resendEmailId}`, JSON.stringify(statusRecord), {
              expirationTtl: 60 * 60 * 24 * 30,
            });
            await env.EMAIL_STATUS_KV.put(`inquiry:${inquiryId}`, JSON.stringify(statusRecord), {
              expirationTtl: 60 * 60 * 24 * 30,
            });
          } catch (kvError) {
            console.warn("KV storage failed:", kvError);
          }
        }
      } else {
        confirmationStatus = "failed";
        const errorText = await confirmationEmailResponse.text();
        console.error("Resend API error (confirmation email):", errorText);

        try {
          const errorData = JSON.parse(errorText) as { message?: string; error?: string };
          confirmationFailReason = errorData.message || errorData.error || "Email delivery failed";
        } catch (_parseError) {
          confirmationFailReason = "Email delivery failed";
        }
      }
    } catch (confirmError) {
      confirmationStatus = "failed";
      confirmationFailReason = confirmError instanceof Error ? confirmError.message : "Network error";
      console.error("Confirmation email send error:", confirmError);
    }

    // 2) Plain-text fallback (best-effort) for privacy/education emails
    // Sent regardless of primary status to maximize deliverability
    if (fallbackCheck.needed) {
      try {
        const plainEmail = getPlainConfirmationEmail(inquiryId, customerName);

        const plainEmailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromHeader,
            to: [email],
            reply_to: replyToEmail,
            subject: plainEmail.subject,
            text: plainEmail.text,
          }),
        });

        if (plainEmailResponse.ok) {
          plainFallbackSent = true;
          plainFallbackReason = fallbackCheck.reasonDisplay;
          console.log(`Plain fallback sent (${fallbackCheck.reason}) to: ${email}`);
        } else {
          console.warn("Plain fallback email failed:", await plainEmailResponse.text());
        }
      } catch (plainError) {
        console.warn("Plain fallback email error:", plainError);
      }
    }

    // 3) Send internal admin email (include confirmation status + fallback status)
    const internalEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromHeader,
        to: [toEmail],
        reply_to: email,
        subject: `${confirmationStatus === "failed" ? "⚠️ " : ""}${plainFallbackSent ? "📄 " : ""}New enquiry from ${
          customerName || "a visitor"
        } – L&D Digital [${inquiryId}]`,
        html: getInternalEmailHtml(
          body,
          clientIP,
          emailConfig,
          submittedAtIso,
          "Europe/London",
          inquiryId,
          confirmationStatus,
          confirmationFailReason,
          plainFallbackSent,
          plainFallbackReason,
        ),
      }),
    });

    if (!internalEmailResponse.ok) {
      const errorText = await internalEmailResponse.text();
      console.error("Resend API error (internal email):", errorText);
      return new Response(
        JSON.stringify({
          ok: false,
          error: "email_failed",
          message: "Failed to send your enquiry. Please try again or contact us directly.",
        }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Success
    return new Response(
      JSON.stringify({
        ok: true,
        inquiryId,
        confirmationStatus,
        plainFallbackSent,
        isPrivacyEmail: fallbackCheck.needed,
        resendEmailId: resendEmailId || null,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "server_error", message: "Something went wrong. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};
