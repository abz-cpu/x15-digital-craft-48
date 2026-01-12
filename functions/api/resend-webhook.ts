// Cloudflare Pages Function - Resend Webhook Handler
// POST /api/resend-webhook
// Handles email delivery status updates from Resend

interface Env {
  RESEND_WEBHOOK_SECRET?: string;
  EMAIL_STATUS_KV?: KVNamespace;
  RESEND_API_KEY?: string;
  FROM_EMAIL?: string;
  TO_EMAIL?: string;
}

interface ResendWebhookEvent {
  type: 'email.sent' | 'email.delivered' | 'email.delivery_delayed' | 'email.complained' | 'email.bounced' | 'email.opened' | 'email.clicked';
  created_at: string;
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject: string;
    created_at: string;
    bounce?: {
      message: string;
      type?: string;
    };
    // Additional fields for different event types
    [key: string]: unknown;
  };
}

interface EmailStatusRecord {
  inquiryId: string;
  resendEmailId: string;
  userEmail: string;
  timestamp: string;
  confirmationStatus: 'sent' | 'delivered' | 'bounced' | 'failed';
  bounceReason?: string;
  lastUpdated: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, svix-id, svix-timestamp, svix-signature",
};

// Verify webhook signature from Resend (using Svix)
async function verifyWebhookSignature(
  payload: string,
  headers: Headers,
  secret: string
): Promise<boolean> {
  try {
    const svixId = headers.get('svix-id');
    const svixTimestamp = headers.get('svix-timestamp');
    const svixSignature = headers.get('svix-signature');

    if (!svixId || !svixTimestamp || !svixSignature) {
      console.warn('Missing Svix headers for webhook verification');
      return false;
    }

    // Verify timestamp is within 5 minutes to prevent replay attacks
    const timestampSeconds = parseInt(svixTimestamp, 10);
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - timestampSeconds) > 300) {
      console.warn('Webhook timestamp outside acceptable range');
      return false;
    }

    // Build the signed payload
    const signedPayload = `${svixId}.${svixTimestamp}.${payload}`;

    // Parse the secret (remove whsec_ prefix if present)
    const secretBytes = secret.startsWith('whsec_') 
      ? base64ToArrayBuffer(secret.slice(6))
      : new TextEncoder().encode(secret);

    // Import key for HMAC
    const key = await crypto.subtle.importKey(
      'raw',
      secretBytes,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    // Sign the payload
    const signatureBytes = await crypto.subtle.sign(
      'HMAC',
      key,
      new TextEncoder().encode(signedPayload)
    );

    // Convert to base64
    const expectedSignature = arrayBufferToBase64(signatureBytes);

    // Parse signatures from header (format: v1,signature v1,signature2)
    const signatures = svixSignature.split(' ').map(sig => {
      const parts = sig.split(',');
      return parts.length > 1 ? parts[1] : parts[0];
    });

    // Check if any signature matches
    return signatures.some(sig => sig === expectedSignature);
  } catch (error) {
    console.error('Webhook signature verification error:', error);
    return false;
  }
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// Send bounce notification email to admin
async function sendBounceNotificationEmail(
  userEmail: string,
  subject: string,
  bounceReason: string,
  env: Env
): Promise<void> {
  if (!env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured - bounce notification not sent');
    return;
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fef2f2;">
      <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #fecaca; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="font-size: 48px;">⚠️</span>
        </div>
        <h2 style="color: #b91c1c; margin: 0 0 16px; text-align: center; font-size: 20px;">Email Bounced</h2>
        <p style="margin: 0 0 20px; color: #374151; text-align: center; font-size: 14px;">
          A customer confirmation email has bounced and could not be delivered.
        </p>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 12px; color: #6b7280; font-size: 13px; border-bottom: 1px solid #f3f4f6;">Customer Email:</td>
            <td style="padding: 12px; font-weight: 600; color: #111827; font-size: 13px; border-bottom: 1px solid #f3f4f6;">${userEmail}</td>
          </tr>
          <tr>
            <td style="padding: 12px; color: #6b7280; font-size: 13px; border-bottom: 1px solid #f3f4f6;">Original Subject:</td>
            <td style="padding: 12px; color: #111827; font-size: 13px; border-bottom: 1px solid #f3f4f6;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 12px; color: #6b7280; font-size: 13px; border-bottom: 1px solid #f3f4f6;">Bounce Reason:</td>
            <td style="padding: 12px; color: #b91c1c; font-weight: 600; font-size: 13px; border-bottom: 1px solid #f3f4f6;">${bounceReason}</td>
          </tr>
          <tr>
            <td style="padding: 12px; color: #6b7280; font-size: 13px;">Timestamp:</td>
            <td style="padding: 12px; color: #111827; font-size: 13px;">${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d;">
          <p style="margin: 0; color: #92400e; font-size: 13px;">
            💡 <strong>Action Required:</strong> Consider contacting this customer via phone if they provided one, or check if they made a typo in their email address.
          </p>
        </div>
      </div>
      <p style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 11px;">
        L&amp;D Digital - Luminous &amp; Deliver • Automated Bounce Notification
      </p>
    </body>
    </html>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `L&D Digital – Luminous & Deliver <${env.FROM_EMAIL || "hello@luminousanddeliver.co.uk"}>`,
        to: [env.TO_EMAIL || "contact@luminousanddeliver.co.uk"],
        subject: `⚠️ BOUNCED: Email to ${userEmail} failed`,
        html: emailHtml,
      }),
    });

    if (response.ok) {
      console.log(`Bounce notification sent for ${userEmail}`);
    } else {
      const errorText = await response.text();
      console.error(`Failed to send bounce notification: ${errorText}`);
    }
  } catch (error) {
    console.error('Error sending bounce notification:', error);
  }
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const payload = await request.text();
    
    // Verify webhook signature if secret is configured
    if (env.RESEND_WEBHOOK_SECRET) {
      const isValid = await verifyWebhookSignature(payload, request.headers, env.RESEND_WEBHOOK_SECRET);
      if (!isValid) {
        console.error('Invalid webhook signature');
        return new Response(
          JSON.stringify({ ok: false, error: 'invalid_signature' }),
          { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    } else {
      console.warn('RESEND_WEBHOOK_SECRET not configured - webhook verification skipped');
    }

    const event: ResendWebhookEvent = JSON.parse(payload);
    
    console.log(`Resend webhook received: ${event.type} for email ${event.data.email_id}`);

    // Handle different event types
    const emailId = event.data.email_id;
    const eventType = event.type;

    // Map Resend event types to our status
    let newStatus: EmailStatusRecord['confirmationStatus'] | null = null;
    let bounceReason: string | undefined;

    switch (eventType) {
      case 'email.delivered':
        newStatus = 'delivered';
        break;
      case 'email.bounced':
        newStatus = 'bounced';
        bounceReason = event.data.bounce?.message || 'Email bounced';
        // Send bounce notification email
        await sendBounceNotificationEmail(
          event.data.to[0] || 'Unknown',
          event.data.subject || 'Unknown subject',
          bounceReason,
          env
        );
        break;
      case 'email.complained':
        newStatus = 'failed';
        bounceReason = 'Recipient marked as spam';
        break;
      // email.sent, email.opened, email.clicked - don't update status
      default:
        console.log(`Ignoring event type: ${eventType}`);
    }

    // Update KV if we have a status change and KV is configured
    if (newStatus && env.EMAIL_STATUS_KV) {
      try {
        // Try to get existing record by email ID
        const existingData = await env.EMAIL_STATUS_KV.get(`email:${emailId}`);
        
        if (existingData) {
          const record: EmailStatusRecord = JSON.parse(existingData);
          
          // Update the record
          record.confirmationStatus = newStatus;
          record.lastUpdated = new Date().toISOString();
          if (bounceReason) {
            record.bounceReason = bounceReason;
          }

          // Save updated record back to KV (by email ID and inquiry ID)
          await env.EMAIL_STATUS_KV.put(`email:${emailId}`, JSON.stringify(record), {
            expirationTtl: 60 * 60 * 24 * 30, // 30 days
          });

          if (record.inquiryId) {
            await env.EMAIL_STATUS_KV.put(`inquiry:${record.inquiryId}`, JSON.stringify(record), {
              expirationTtl: 60 * 60 * 24 * 30,
            });
          }

          console.log(`Updated email status for ${emailId}: ${newStatus}`);
        } else {
          // No existing record - create a minimal one
          const minimalRecord: Partial<EmailStatusRecord> = {
            resendEmailId: emailId,
            userEmail: event.data.to[0] || '',
            confirmationStatus: newStatus,
            bounceReason,
            lastUpdated: new Date().toISOString(),
          };

          await env.EMAIL_STATUS_KV.put(`email:${emailId}`, JSON.stringify(minimalRecord), {
            expirationTtl: 60 * 60 * 24 * 30,
          });

          console.log(`Created minimal email status record for ${emailId}: ${newStatus}`);
        }
      } catch (kvError) {
        console.error('KV storage error:', kvError);
        // Don't fail the webhook - Resend will retry
      }
    } else if (newStatus && !env.EMAIL_STATUS_KV) {
      console.warn('EMAIL_STATUS_KV not configured - status update logged only');
      console.log(`Email ${emailId} status would be: ${newStatus}`, bounceReason ? `Reason: ${bounceReason}` : '');
    }

    // Always respond 200 quickly to acknowledge receipt
    return new Response(
      JSON.stringify({ ok: true, received: eventType }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error) {
    console.error('Resend webhook error:', error);
    // Return 200 anyway to prevent Resend from retrying (we've logged the error)
    return new Response(
      JSON.stringify({ ok: true, error: 'processing_failed' }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};
