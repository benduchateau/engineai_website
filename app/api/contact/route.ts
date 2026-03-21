import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  rateLimit.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  rateLimit.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, company, email, phone, message } = await request.json();

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeCompany = escapeHtml(String(company));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone || "Not provided"));
    const safeMessage = escapeHtml(String(message || "No message provided."));

    await resend.emails.send({
      from: "Engine AI Website <hello@send.engineai.co.nz>",
      to: ["sales@engineai.co.nz"],
      replyTo: email,
      subject: `New enquiry from ${safeName} at ${safeCompany}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Best-effort auto-confirmation to the visitor
    try {
      await resend.emails.send({
        from: "Engine AI <hello@send.engineai.co.nz>",
        to: [email],
        subject: "Thanks for reaching out to Engine AI",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #333;">
            <h2 style="color: #1a1a1a; font-weight: 500;">Thanks for getting in touch, ${safeName}.</h2>
            <p>We've received your message and will be in touch within 24 hours.</p>
            <p>In the meantime, if you have anything to add, just reply to this email.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="color: #888; font-size: 13px;">
              Engine AI — AI Orchestration for NZ Business<br />
              <a href="https://engineai.co.nz" style="color: #C4A35A;">engineai.co.nz</a>
            </p>
          </div>
        `,
      });
    } catch (replyError) {
      console.error("Auto-reply failed (non-blocking):", replyError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
