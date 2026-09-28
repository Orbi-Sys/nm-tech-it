// Eingangsbestätigung an den Absender des Kontaktformulars.
// Bewusst ohne jegliche Nutzereingabe (kein Name, keine Nachricht): so können
// Bots über das Formular keine eigenen Inhalte an fremde Adressen verschicken.

const SITE_URL = "https://nm-tech-it.de";
const LOGO_URL = `${SITE_URL}/email-logo.png`;
const CALENDLY_URL = "https://calendly.com/nm-tech-it";
const PHONE_DISPLAY = "+49 1523 4801274";
const PHONE_LINK = "tel:+4915234801274";
const WHATSAPP_URL = "https://wa.me/4915234801274";

const GOLD = "#B8894F";
const GOLD_LIGHT = "#D4A66F";
const DARK = "#0c0c0c";
const TEXT = "#2b2b2b";

export const CONFIRMATION_SUBJECT = "Ihre Anfrage bei NM-TECH IT – Eingangsbestätigung";

export const CONFIRMATION_TEXT = `Guten Tag,

vielen Dank für Ihre Anfrage über nm-tech-it.de. Ihre Nachricht ist bei mir eingegangen und wird persönlich bearbeitet. Ich melde mich zeitnah bei Ihnen.

Sie möchten nicht warten? Buchen Sie direkt ein kostenloses Erstgespräch (30 Minuten, online):
${CALENDLY_URL}

Telefon: ${PHONE_DISPLAY}
WhatsApp: ${WHATSAPP_URL}

Mit freundlichen Grüßen
Nikita Aleschkin
NM-TECH IT
Heinrich-Böll-Str. 12, 49688 Lastrup
${SITE_URL}

Sie haben keine Anfrage gestellt? Dann hat jemand Ihre Adresse im Kontaktformular eingetragen. Sie können diese E-Mail einfach ignorieren.`;

export const CONFIRMATION_HTML = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>${CONFIRMATION_SUBJECT}</title>
</head>
<body style="margin:0; padding:0; background-color:#f2f2f0; -webkit-text-size-adjust:100%;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0;">Ihre Nachricht ist bei mir eingegangen – ich melde mich zeitnah bei Ihnen.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f2f2f0;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e6e2da;">
        <tr>
          <td align="center" style="padding:36px 40px 24px 40px;">
            <a href="${SITE_URL}" style="text-decoration:none;">
              <img src="${LOGO_URL}" width="200" alt="NM-TECH IT" style="display:block; width:200px; max-width:100%; height:auto; border:0;">
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px;">
            <div style="height:2px; line-height:2px; font-size:0; background-color:${GOLD_LIGHT};">&nbsp;</div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px 8px 40px; font-family:Helvetica, Arial, sans-serif; color:${TEXT};">
            <h1 style="margin:0 0 20px 0; font-size:22px; line-height:30px; font-weight:700; color:${DARK};">Vielen Dank für Ihre Anfrage</h1>
            <p style="margin:0 0 16px 0; font-size:15px; line-height:24px;">Guten Tag,</p>
            <p style="margin:0 0 16px 0; font-size:15px; line-height:24px;">vielen Dank für Ihr Interesse an NM-TECH IT. Ihre Nachricht ist bei mir eingegangen und wird persönlich bearbeitet. Ich melde mich <strong>zeitnah</strong> bei Ihnen.</p>
            <p style="margin:0 0 24px 0; font-size:15px; line-height:24px;">Sie möchten nicht warten? Dann buchen Sie direkt ein kostenloses Erstgespräch – 30 Minuten, unverbindlich und online.</p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:0 40px 32px 40px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" bgcolor="${DARK}" style="border-radius:8px;">
                  <a href="${CALENDLY_URL}" style="display:inline-block; padding:14px 32px; font-family:Helvetica, Arial, sans-serif; font-size:14px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:${GOLD_LIGHT}; text-decoration:none; border-radius:8px;">Erstgespräch buchen</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px 40px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#faf8f4; border:1px solid #efe8dc; border-radius:8px;">
              <tr>
                <td style="padding:18px 20px; font-family:Helvetica, Arial, sans-serif; font-size:14px; line-height:22px; color:${TEXT};">
                  <span style="display:block; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:${GOLD}; margin-bottom:6px;">Direkter Kontakt</span>
                  Telefon: <a href="${PHONE_LINK}" style="color:${TEXT}; text-decoration:none;">${PHONE_DISPLAY}</a><br>
                  WhatsApp: <a href="${WHATSAPP_URL}" style="color:${TEXT}; text-decoration:underline;">Nachricht senden</a><br>
                  Web: <a href="${SITE_URL}" style="color:${TEXT}; text-decoration:underline;">nm-tech-it.de</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 36px 40px; font-family:Helvetica, Arial, sans-serif; font-size:15px; line-height:24px; color:${TEXT};">
            Mit freundlichen Grüßen<br>
            <strong style="color:${DARK};">Nikita Aleschkin</strong><br>
            <span style="color:${GOLD};">NM-TECH IT</span>
          </td>
        </tr>
        <tr>
          <td style="background-color:${DARK}; padding:24px 40px; font-family:Helvetica, Arial, sans-serif; font-size:12px; line-height:19px; color:#9a9a9a;">
            <strong style="color:${GOLD_LIGHT}; letter-spacing:1px;">NM-TECH IT</strong> · Nikita Aleschkin<br>
            Heinrich-Böll-Str. 12 · 49688 Lastrup<br>
            <a href="${SITE_URL}/impressum" style="color:#c8c8c8; text-decoration:underline;">Impressum</a> ·
            <a href="${SITE_URL}/datenschutz" style="color:#c8c8c8; text-decoration:underline;">Datenschutz</a>
            <p style="margin:14px 0 0 0; color:#7a7a7a;">Sie haben keine Anfrage gestellt? Dann hat jemand Ihre Adresse im Kontaktformular eingetragen. Sie können diese E-Mail einfach ignorieren.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
