import { faqCategories, leistungenData, projects, LeistungSlug } from "@/lib/data";

export const dynamic = "force-static";

const baseUrl = "https://nm-tech-it.de";

// Markdown-Links [Text](/pfad) aus den Antworten entfernen, damit KI-Crawler reinen Text bekommen.
const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function GET() {
  const leistungen = (Object.keys(leistungenData) as LeistungSlug[])
    .map((slug) => {
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

> NM-TECH IT ist das IT-Unternehmen von Nikita Aleschkin, Software Engineer und Digitalisierungspartner aus Lastrup (Landkreis Cloppenburg, Niedersachsen). Angeboten werden moderne Websites und Web-Apps mit Next.js, KI-Integrationen (Chatbots, Dokumentenanalyse, DSGVO-konform), Prozess- und Workflow-Automatisierung mit n8n, Make, Zapier und Power Automate, API-Anbindungen, Dashboards und individuelle Software für kleine und mittlere Unternehmen, Selbstständige und Vereine in Lastrup, Cloppenburg, Vechta, Oldenburg, dem Emsland und ganz Deutschland (auch remote).

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
