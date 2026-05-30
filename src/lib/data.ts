export const navLinks = [
  { label: "Über mich", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projekte", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Prozess", href: "#process" },
  { label: "Kontakt", href: "#contact" },
] as const;

export const services = [
  {
    title: "Webentwicklung",
    description:
      "Hochperformante, moderne Websites und Web-Apps mit Next.js – schnell, skalierbar und zukunftssicher.",
    icon: "code",
  },
  {
    title: "KI-Integrationen",
    description:
      "Intelligente Chatbots, Assistenten und KI-Workflows, nahtlos in Ihre Geschäftsprozesse integriert.",
    icon: "brain",
  },
  {
    title: "Automationen",
    description:
      "Automatisierte Workflows mit n8n und Custom Scripts – weniger manuelle Arbeit, mehr Effizienz.",
    icon: "workflow",
  },
  {
    title: "API-Anbindungen",
    description:
      "Sichere Verbindungen zwischen Systemen, Drittanbieter-Services und internen Plattformen.",
    icon: "api",
  },
  {
    title: "Dashboards",
    description:
      "Echtzeit-Dashboards und Analytics-Oberflächen für datengetriebene Entscheidungen.",
    icon: "chart",
  },
  {
    title: "Individuelle Softwarelösungen",
    description:
      "Maßgeschneiderte Software exakt auf Ihre Anforderungen – von MVP bis Enterprise.",
    icon: "cube",
  },
] as const;

export const projects = [
  {
    title: "AI-gestütztes HubSpot Sales Dashboard",
    category: "KI / Dashboard",
    description:
      "Echtzeit-Analyse von Leads und Deals via Webhooks mit n8n. KI-gestützte Deal-Bewertung mit Abschlusswahrscheinlichkeit, Risikoerkennung und Handlungsempfehlungen.",
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accent: "KI",
  },
  {
    title: "Automatisierte Spesenabrechnung & Excel-Verarbeitung",
    category: "Automation",
    description:
      "Workflow zur automatischen Verarbeitung von 600–800 CSV-Datensätzen aus Google Drive mit JavaScript-Filterlogik und Übertragung in Microsoft Excel. Zeitersparnis: ca. 4 Stunden pro Durchlauf.",
    gradient: "from-neutral-800 via-zinc-900 to-black",
    accent: "AUTOMATION",
  },
  {
    title: "Automatisierte PDF-Erstellung mit KI-Agenten",
    category: "KI / Automation",
    description:
      "KI-gestützter Workflow zur automatischen Erstellung mehrseitiger Dokumente aus HTML-Daten. Zeitersparnis: ca. 1 Stunde pro Vorgang.",
    gradient: "from-stone-800 via-zinc-900 to-black",
    accent: "KI",
  },
  {
    title: "KI-gestützte Bewerberanalyse & Recruitee-Integration",
    category: "KI",
    description:
      "Automatisierte Analyse von Bewerberunterlagen (PDF, Word, gescannte Dokumente) mit strukturierter Positiv-/Negativbewertung und automatischer Benachrichtigung bei geeigneten Kandidaten.",
    gradient: "from-gray-800 via-zinc-900 to-black",
    accent: "RECRUIT",
  },
] as const;

export const techStack = [
  "Next.js",
  "React",
  "Tailwind",
  "TypeScript",
  "Python",
  "OpenAI",
  "Docker",
  "Supabase",
  "PostgreSQL",
  "n8n",
  "Make",
  "Zapier",
  "LangChain",
  "Power Automate",
  "Microsoft Graph API",
  "HubSpot",
  "Azure (AZ-900)",
  "MongoDB",
  "Nginx",
] as const;

export const whyUs = [
  {
    title: "Moderne Technologien",
    description: "Next.js, React, KI und Cloud-native Architekturen.",
  },
  {
    title: "Schnelle Ladezeiten",
    description: "Optimiert für Core Web Vitals und maximale Performance.",
  },
  {
    title: "Skalierbare Systeme",
    description: "Architektur, die mit Ihrem Unternehmen mitwächst.",
  },
  {
    title: "KI-gestützte Lösungen",
    description: "Intelligente Automatisierung und smarte Workflows.",
  },
  {
    title: "Individuelle Entwicklung",
    description: "Keine Templates – jede Lösung wird maßgeschneidert.",
  },
  {
    title: "Moderne User Experience",
    description: "Premium UI/UX, die Kunden und Nutzer begeistert.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Analyse",
    description: "Ziele, Anforderungen und bestehende Systeme verstehen.",
  },
  {
    step: "02",
    title: "Konzept",
    description: "Architektur, Design und technische Roadmap definieren.",
  },
  {
    step: "03",
    title: "Entwicklung",
    description: "Agile Umsetzung mit regelmäßigem Feedback.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Deployment, Monitoring und kontinuierliche Optimierung.",
  },
] as const;
