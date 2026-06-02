"use server";

import nodemailer from "nodemailer";

export type FormState = {
  success: boolean;
  message: string;
};

export async function sendEmail(formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Bitte füllen Sie alle Felder aus.",
    };
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpTo = process.env.SMTP_TO || "kontakt@nm-tech-it.de";

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error("SMTP Configuration is missing in environment variables.");
    return {
      success: false,
      message: "Der E-Mail-Versand ist zurzeit nicht konfiguriert. Bitte erstellen Sie eine .env.local Datei mit den SMTP-Zugangsdaten.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: smtpPort === "465", // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: smtpTo,
      subject: `Kontaktanfrage von ${name} - NM-TECH IT`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #cccccc;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah bei Ihnen!",
    };
  } catch (error) {
    console.error("Error sending email via Nodemailer:", error);
    return {
      success: false,
      message: "Beim Senden der E-Mail ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.",
    };
  }
}
