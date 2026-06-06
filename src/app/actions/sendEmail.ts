"use server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const last = rateLimitMap.get(ip);
  if (last && Date.now() - last < RATE_LIMIT_MS) return true;
  rateLimitMap.set(ip, Date.now());
  return false;
}

export type FormState = {
  success: boolean;
  message: string;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendEmail(formData: FormData): Promise<FormState> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      success: false,
      message: "Bitte warten Sie einen Moment, bevor Sie erneut eine Nachricht senden.",
    };
  }

  const name = (formData.get("name") as string).trim();
  const email = (formData.get("email") as string).trim();
  const message = (formData.get("message") as string).trim();
  const phone = ((formData.get("phone") as string) ?? "").trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Bitte füllen Sie alle Felder aus.",
    };
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpTo = process.env.SMTP_TO || "info@nm-tech-it.de";
  const smtpFrom = process.env.SMTP_FROM || "Kontakt@nm-tech-it.de";

  if (!smtpUser || !smtpPass) {
    return {
      success: false,
      message: "Der E-Mail-Versand ist zurzeit nicht konfiguriert.",
    };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safePhone = escapeHtml(phone);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailbox.org",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Benachrichtigung an dich
    await transporter.sendMail({
      from: `"NM-TECH IT Kontaktformular" <${smtpFrom}>`,
      replyTo: email,
      to: smtpTo,
      subject: `Kontaktanfrage von ${name} - NM-TECH IT`,
      text: `Name: ${name}\nE-Mail: ${email}${phone ? `\nTelefon: ${phone}` : ""}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          ${safePhone ? `<p><strong>Telefon:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>` : ""}
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #cccccc;">
            <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    // Bestätigungsmail an den Absender
    await transporter.sendMail({
      from: `"NM-TECH IT" <${smtpFrom}>`,
      to: email,
      subject: `Ihre Anfrage bei NM-TECH IT – Bestätigung`,
      text: `Hallo ${name},\n\nvielen Dank für Ihre Nachricht! Ich habe Ihre Anfrage erhalten und melde mich zeitnah bei Ihnen.\n\nIhre Nachricht:\n${message}\n\nMit freundlichen Grüßen\nNikita Aleschkin\nNM-TECH IT`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Vielen Dank für Ihre Anfrage!</h2>
          <p>Hallo ${safeName},</p>
          <p>ich habe Ihre Nachricht erhalten und melde mich zeitnah bei Ihnen.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #cccccc;">
            <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Ihre Nachricht</p>
            <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="margin-top: 20px;">Mit freundlichen Grüßen<br><strong>Nikita Aleschkin</strong><br>NM-TECH IT</p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah bei Ihnen!",
    };
  } catch (error) {
    console.error("SMTP Error:", error);
    return {
      success: false,
      message: "Beim Senden der E-Mail ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
    };
  }
}