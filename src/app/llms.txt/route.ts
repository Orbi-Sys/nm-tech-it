import { faqCategories, leistungenData, projects, services } from "@/lib/data";

export const dynamic = "force-static";

const baseUrl = "https://nm-tech-it.de";

// Markdown-Links [Text](/pfad) aus den Antworten entfernen, damit KI-Crawler reinen Text bekommen.
const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function GET() {
  const leistungen = services
    .map(({ slug }) => {
      const l = leistungenData[slug];
      return `- [${l.title}](${baseUrl}/leistungen/${slug}): ${l.metaDescription}`;
    })
    .join("\n");

  const referenzen = projects
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");

  const faq = faqCategories
    .map(
      (cat) =>
        `### ${cat.category}\n\n` +
        cat.faqs.map((f) => `**${f.question}**\n${plain(f.answer)}`).join("\n\n")
    )
    .join("\n\n");

  const body = `# NM-TECH IT

> NM-TECH IT ist das IT-Unternehmen von Nikita Aleschkin, Software Engineer und Digitalisierungspartner aus Lastrup (Landkreis Cloppenburg, Niedersachsen). Schwerpunkte sind individuelle Softwareentwicklung (interne Tools, Kundenportale, MVPs), KI-Integrationen (Chatbots, KI-Agenten, Dokumentenanalyse, DSGVO-konform) und Prozess- und Workflow-Automatisierung mit n8n, Make, Zapier, Power Automate und der KI-Plattform 42°OS, ergänzt durch API-Anbindungen, Dashboards und Web-Apps mit Next.js. Zielgruppe sind kleine und mittlere Unternehmen in Lastrup, Cloppenburg, Vechta, Oldenburg, dem Emsland und ganz Deutschland (auch remote).

## Kontakt

- Website: ${baseUrl}
- E-Mail: kontakt@nm-tech-it.de
- Telefon und WhatsApp: +49 1523 4801274
- Adresse: Heinrich-Böll-Straße 12, 49688 Lastrup, Deutschland
- Kostenloses Erstgespräch: ${baseUrl}/#contact

## Leistungen

${leistungen}

## Referenzprojekte

${referenzen}

## Häufige Fragen

${faq}

## Weitere Seiten

- [FAQ](${baseUrl}/faq)
- [Impressum](${baseUrl}/impressum)
- [Datenschutz](${baseUrl}/datenschutz)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
