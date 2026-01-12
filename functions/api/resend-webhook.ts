// functions/api/resend-webhook.ts
// Cloudflare Pages Function - Resend Webhook Handler
// POST /api/resend-webhook
// Handles email delivery status updates from Resend (Svix-signed)

interface Env {
  RESEND_WEBHOOK_SECRET?: string; // e.g. "whsec_..." from Resend/Svix
  EMAIL_STATUS_KV?: KVNamespace;
  RESEND_API_KEY?: string;
  FROM_EMAIL?: string;
  TO_EMAIL?: string;
}

type ResendEventType =
  | "email.sent"
  | "email.delivered"
  | "email.delivery_delayed"
  | "email.complained"
  | "email.bounced"
  | "email.opened"
  | "email.clicked";

interface ResendWebhookEvent {
  type: ResendEventType;
  created_at: string;
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject: string;
    created_at: string;
    bounce?: {
      message?: string;
      type?: string;
    };
    [key: string]: unknown;
  };
}

interface EmailStatusRecord {
  inquiryId: string; // may be empty if unknown
  resendEmailId: string;
  userEmail: string;
  timestamp: string; // ISO string
  confirmationStatus: "sent" | "delivered" | "bounced" | "failed";
  bounceReason?: string;
  lastUpdated: string; // ISO string
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, svix-id, svix-timestamp, svix-signature",
};

// ---------- Svix signature verification helpers ----------

function parseSvixSignatures(headerValue: string): string[] {
  // Seen formats:
  // 1) "v1=abc, v1=def"
  // 2) "v1,abc v1,def"
  // 3) "v1=abc"
  const tokens = headerValue
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const out: string[] = [];
  for (const t of tokens) {
    if (t.startsWith("v1=")) out.push(t.slice(3));
    else if (t.includes("=")) out.push(t.split("=")[1] || "");
    else if (t.includes(",")) out.push(t.split(",")[1] || "");
    else out.push(t);
  }
  return out.filter(Boolean);
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function verifyWebhookSignature(payload: string, headers: Headers, secret: string): Promise<boolean> {
  try {
    const svixId = headers.get("svix-id");
    const svixTimestamp = headers.get("svix-timestamp");
    const svixSignature = headers.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
      console.warn("Missing Svix headers for webhook verification");
      return false;
    }

    const timestampSeconds = Number(svixTimestamp);
    if (!Number.isFinite(timestampSeconds)) {
      console.warn("Invalid Svix timestamp");
      return false;
    }

    // Replay protection (±5 minutes)
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - timestampSeconds) > 300) {
      console.warn("Webhook timestamp outside acceptable range");
      return false;
    }

    // Svix signed payload: "{id}.{timestamp}.{payload}"
    const signedPayload = `${svixId}.${svixTimestamp}.${payload}`;

    // IMPORTANT:
    // Resend/Svix secrets often look like "whsec_...". Treat the part after "whsec_" as a normal UTF-8 secret.
    const normalizedSecret = secret.startsWith("whsec_") ? secret.slice(6) : secret;

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(normalizedSecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );

    const signatureBytes = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(signedPayload));
    const expectedSignature = arrayBufferToBase64(signatureBytes);

    const candidates = parseSvixSignatures(svixSignature);
    const ok = candidates.some((sig) => sig === expectedSignature);

    if (!ok) {
      console.warn("Webhook signature mismatch");
    }
    return ok;
  } catch (error) {
    console.error("Webhook signature verification error:", error);
    return false;
  }
}

// ---------- Bounce notification email ----------

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

async function sendBounceNotificationEmail(
  userEmail: string,
  originalSubject: string,
  bounceReason: string,
  env: Env,
): Promise<void> {
  if (!env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured - bounce notification not sent");
    return;
  }

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fef2f2;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #fecaca;padding:24px;box-shadow:0 4px 10px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:14px;font-size:42px;">⚠️</div>
    <h2 style="margin:0 0 10px;text-align:center;color:#b91c1c;font-size:20px;">Email Bounced</h2>
    <p style="margin:0 0 18px;text-align:center;color:#374151;font-size:14px;">
      A customer confirmation email bounced and could not be delivered.
    </p>

    <table style="width:100%;border-collapse:collapse;margin:10px 0;">
      <tr>
        <td style="padding:10px 12px;color:#6b7280;font-size:13px;border-bottom:1px solid #f3f4f6;">Customer Email</td>
        <td style="padding:10px 12px;color:#111827;font-size:13px;font-weight:600;border-bottom:1px solid #f3f4f6;">${escapeHtml(
          userEmail,
        )}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;color:#6b7280;font-size:13px;border-bottom:1px solid #f3f4f6;">Original Subject</td>
        <td style="padding:10px 12px;color:#111827;font-size:13px;border-bottom:1px solid #f3f4f6;">${escapeHtml(
          originalSubject,
        )}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;color:#6b7280;font-size:13px;border-bottom:1px solid #f3f4f6;">Bounce Reason</td>
        <td style="padding:10px 12px;color:#b91c1c;font-size:13px;font-weight:700;border-bottom:1px solid #f3f4f6;">${escapeHtml(
          bounceReason,
        )}</td>
      </tr>
      <tr>
        <td style="padding:10px 12px;color:#6b7280;font-size:13px;">Timestamp (UK)</td>
        <td style="padding:10px 12px;color:#111827;font-size:13px;">${new Date().toLocaleString("en-GB", {
          timeZone: "Europe/London",
        })}</td>
      </tr>
    </table>

    <div style="margin-top:16px;padding:14px;background:#fef3c7;border:1px solid #fcd34d;border-radius:10px;">
      <p style="margin:0;color:#92400e;font-size:13px;">
        <strong>Action:</strong> Consider contacting the customer via phone (if provided) or ask them to resubmit with a corrected email.
      </p>
    </div>
  </div>
  <p style="text-align:center;margin:18px 0 0;color:#9ca3af;font-size:11px;">
    L&amp;D Digital - Luminous &amp; Deliver • Automated Bounce Notification
  </p>
</body>
</html>
  `.trim();

  const fromEmail = env.FROM_EMAIL || "hello@luminousanddeliver.co.uk";
  const toEmail = env.TO_EMAIL || "contact@luminousanddeliver.co.uk";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `L&D Digital – Luminous & Deliver <${fromEmail}>`,
        to: [toEmail],
        subject: `⚠️ BOUNCED: Email to ${userEmail} failed`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to send bounce notification: ${errorText}`);
    }
  } catch (error) {
    console.error("Error sending bounce notification:", error);
  }
}

// ---------- Pages Functions ----------

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const payload = await request.text();

    // Verify signature if configured
    if (env.RESEND_WEBHOOK_SECRET) {
      const isValid = await verifyWebhookSignature(payload, request.headers, env.RESEND_WEBHOOK_SECRET);
      if (!isValid) {
        return new Response(JSON.stringify({ ok: false, error: "invalid_signature" }), {
          status: 401,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
    } else {
      console.warn("RESEND_WEBHOOK_SECRET not configured - webhook verification skipped");
    }

    const event: ResendWebhookEvent = JSON.parse(payload);

    const emailId = event.data.email_id;
    const eventType = event.type;

    console.log(`Resend webhook received: ${eventType} for email ${emailId}`);

    // Map Resend events to our status model
    let newStatus: EmailStatusRecord["confirmationStatus"] | null = null;
    let bounceReason: string | undefined;

    switch (eventType) {
      case "email.delivered":
        newStatus = "delivered";
        break;
      case "email.bounced":
        newStatus = "bounced";
        bounceReason = event.data.bounce?.message || "Email bounced";
        break;
      case "email.complained":
        newStatus = "failed";
        bounceReason = "Recipient marked as spam";
        break;
      default:
        // sent/opened/clicked/delayed -> ignore for status
        newStatus = null;
        break;
    }

    // Update KV if needed
    if (newStatus && env.EMAIL_STATUS_KV) {
      const nowIso = new Date().toISOString();

      try {
        const existingData = await env.EMAIL_STATUS_KV.get(`email:${emailId}`);

        if (existingData) {
          const record = JSON.parse(existingData) as EmailStatusRecord;

          record.confirmationStatus = newStatus;
          record.lastUpdated = nowIso;
          if (bounceReason) record.bounceReason = bounceReason;

          await env.EMAIL_STATUS_KV.put(`email:${emailId}`, JSON.stringify(record), {
            expirationTtl: 60 * 60 * 24 * 30,
          });

          if (record.inquiryId) {
            await env.EMAIL_STATUS_KV.put(`inquiry:${record.inquiryId}`, JSON.stringify(record), {
              expirationTtl: 60 * 60 * 24 * 30,
            });
          }

          console.log(`Updated email status for ${emailId}: ${newStatus}`);
        } else {
          // Create a full record even if we don't know inquiryId yet
          const createdAt = event.data.created_at || event.created_at || nowIso;

          const record: EmailStatusRecord = {
            inquiryId: "",
            resendEmailId: emailId,
            userEmail: (event.data.to?.[0] || "").toLowerCase(),
            timestamp: createdAt,
            confirmationStatus: newStatus,
            bounceReason,
            lastUpdated: nowIso,
          };

          await env.EMAIL_STATUS_KV.put(`email:${emailId}`, JSON.stringify(record), {
            expirationTtl: 60 * 60 * 24 * 30,
          });

          console.log(`Created email status record for ${emailId}: ${newStatus}`);
        }
      } catch (kvError) {
        console.error("KV storage error:", kvError);
        // Don't fail webhook response; sender may retry depending on status codes.
      }
    } else if (newStatus && !env.EMAIL_STATUS_KV) {
      console.warn("EMAIL_STATUS_KV not configured - status update logged only");
      console.log(`Email ${emailId} status would be: ${newStatus}`, bounceReason ? `Reason: ${bounceReason}` : "");
    }

    // Bounce notification (only for customer emails, not your admin inbox)
    if (eventType === "email.bounced") {
      const adminEmail = (env.TO_EMAIL || "contact@luminousanddeliver.co.uk").toLowerCase();
      const bouncedTo = (event.data.to?.[0] || "").toLowerCase();

      if (bouncedTo && bouncedTo !== adminEmail) {
        await sendBounceNotificationEmail(
          bouncedTo,
          event.data.subject || "Unknown subject",
          bounceReason || "Email bounced",
          env,
        );
      }
    }

    return new Response(JSON.stringify({ ok: true, received: eventType }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Resend webhook error:", error);

    // You can return 500 to force retries; returning 200 prevents retries.
    // Keeping 200 to avoid retry storms while still logging.
    return new Response(JSON.stringify({ ok: true, error: "processing_failed" }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};
