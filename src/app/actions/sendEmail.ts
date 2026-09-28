"use server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import {
  CONFIRMATION_HTML,
  CONFIRMATION_SUBJECT,
  CONFIRMATION_TEXT,
} from "@/lib/confirmationEmail";

export type FormState = {
  success: boolean;
  message: string;
};

// Limits für Eingaben – alles darüber wird abgelehnt statt gekürzt.
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_MESSAGE = 5000;
const MIN_MESSAGE = 10;

// Mindestzeit zwischen Laden und Absenden des Formulars (Bots sind schneller).
const MIN_FILL_MS = 3_000;
// Formular-Zeitstempel verfällt nach dieser Zeit.
const MAX_FILL_MS = 24 * 60 * 60 * 1000;

// Rate-Limit pro IP und global. Hinweis: gilt pro Server-Instanz (In-Memory);
// für harten Schutz zusätzlich Turnstile aktivieren (TURNSTILE_SECRET_KEY).
const IP_WINDOW_MS = 60 * 60 * 1000;
const IP_MAX_PER_WINDOW = 3;
const GLOBAL_WINDOW_MS = 60 * 60 * 1000;
const GLOBAL_MAX_PER_WINDOW = 20;

const ipHits = new Map<string, number[]>();
let globalHits: number[] = [];

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  globalHits = globalHits.filter((t) => now - t < GLOBAL_WINDOW_MS);
  if (globalHits.length >= GLOBAL_MAX_PER_WINDOW) return true;

  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < IP_WINDOW_MS);
  if (hits.length >= IP_MAX_PER_WINDOW) {
    ipHits.set(ip, hits);
    return true;
  }

  hits.push(now);
  ipHits.set(ip, hits);
  globalHits.push(now);

  // Map nicht unbegrenzt wachsen lassen.
  if (ipHits.size > 5000) {
    for (const [key, times] of ipHits) {
      if (times.every((t) => now - t >= IP_WINDOW_MS)) ipHits.delete(key);
    }
  }
  return false;
}

// Bestätigungsmails: höchstens eine pro Empfängeradresse in diesem Zeitraum.
const CONFIRM_WINDOW_MS = 24 * 60 * 60 * 1000;
const confirmedRecipients = new Map<string, number>();

function mayConfirm(email: string): boolean {
  const now = Date.now();
  const key = email.toLowerCase();
  const last = confirmedRecipients.get(key);
  if (last && now - last < CONFIRM_WINDOW_MS) return false;
  confirmedRecipients.set(key, now);

  if (confirmedRecipients.size > 5000) {
    for (const [k, t] of confirmedRecipients) {
      if (now - t >= CONFIRM_WINDOW_MS) confirmedRecipients.delete(k);
    }
  }
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

// Einzeilige Felder: Steuerzeichen (inkl. CR/LF) sind nie legitim.
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/;
// Nachricht: Zeilenumbrüche/Tabs erlaubt, andere Steuerzeichen nicht.
const MESSAGE_CONTROL_CHARS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const PHONE_RE = /^[+0-9 ()/.-]*$/;
const URL_RE = /(https?:\/\/|www\.)/i;
const URL_RE_ALL = /(https?:\/\/|www\.)/gi;

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Captcha nicht konfiguriert
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

const GENERIC_SUCCESS: FormState = {
  success: true,
  message: "Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah bei Ihnen!",
};

export async function sendEmail(formData: FormData): Promise<FormState> {
  const headersList = await headers();
  const ip =
    headersList.get("x-real-ip") ??
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown";

  // Honeypot: für Menschen unsichtbares Feld. Bots bekommen eine Scheinbestätigung.
  if (field(formData, "company_website")) {
    return GENERIC_SUCCESS;
  }

  const startedAt = Number(field(formData, "form_started_at"));
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return {
      success: false,
      message: "Bitte laden Sie die Seite neu und versuchen Sie es erneut.",
    };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const message = field(formData, "message");

  if (!name || !email || !message) {
    return { success: false, message: "Bitte füllen Sie alle Pflichtfelder aus." };
  }

  if (
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    phone.length > MAX_PHONE ||
    message.length > MAX_MESSAGE ||
    CONTROL_CHARS.test(name) ||
    CONTROL_CHARS.test(email) ||
    CONTROL_CHARS.test(phone) ||
    MESSAGE_CONTROL_CHARS.test(message) ||
    !EMAIL_RE.test(email) ||
    !PHONE_RE.test(phone)
  ) {
    return { success: false, message: "Bitte überprüfen Sie Ihre Eingaben." };
  }

  if (message.length < MIN_MESSAGE) {
    return { success: false, message: "Bitte beschreiben Sie Ihr Anliegen etwas ausführlicher." };
  }

  // Links im Namen sind typisch für Spam; viele Links in der Nachricht ebenso.
  if (URL_RE.test(name) || (message.match(URL_RE_ALL)?.length ?? 0) > 3) {
    return { success: false, message: "Bitte entfernen Sie Links aus Ihrer Nachricht." };
  }

  if (!(await verifyTurnstile(field(formData, "cf-turnstile-response"), ip))) {
    return {
      success: false,
      message: "Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
    };
  }

  if (isRateLimited(ip)) {
    return {
      success: false,
      message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut oder rufen Sie mich an.",
    };
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpTo = process.env.SMTP_TO;
  const smtpFrom = process.env.SMTP_FROM;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpTo || !smtpFrom) {
    return {
      success: false,
      message: "Der E-Mail-Versand ist zurzeit nicht verfügbar. Bitte kontaktieren Sie mich telefonisch.",
    };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safePhone = escapeHtml(phone);

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort !== 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Anfrage an die fest hinterlegte Adresse (SMTP_TO).
    await transporter.sendMail({
      from: { name: "NM-TECH IT Kontaktformular", address: smtpFrom },
      replyTo: { name, address: email },
      to: smtpTo,
      subject: "Neue Kontaktanfrage – NM-TECH IT",
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

    // Bestätigung an den Absender – nur wenn das Captcha aktiv ist (die Anfrage
    // hat es oben bereits bestanden), mit festem Text und max. 1x pro Adresse/Tag.
    if (process.env.TURNSTILE_SECRET_KEY && mayConfirm(email)) {
      try {
        await transporter.sendMail({
          from: { name: "NM-TECH IT", address: smtpFrom },
          replyTo: smtpTo,
          to: email,
          subject: CONFIRMATION_SUBJECT,
          text: CONFIRMATION_TEXT,
          html: CONFIRMATION_HTML,
        });
      } catch (error) {
        // Die Anfrage selbst ist angekommen – ein Fehler hier soll den Nutzer nicht verunsichern.
        console.error("SMTP Error (Bestätigung):", error);
      }
    }

    return GENERIC_SUCCESS;
  } catch (error) {
    console.error("SMTP Error:", error);
    return {
      success: false,
      message: "Beim Senden der E-Mail ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
    };
  }
}
