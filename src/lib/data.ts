export const navLinks = [
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
    title: "AI Chatbot System",
    category: "KI & Automation",
    description:
      "Intelligenter Kundenservice-Bot mit OpenAI-Integration und CRM-Anbindung.",
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accent: "KI",
  },
  {
    title: "Restaurant Automation Platform",
    category: "Automation",
    description:
      "Bestellungen, Reservierungen und Küchen-Workflows vollautomatisiert.",
    gradient: "from-neutral-800 via-zinc-900 to-black",
    accent: "AUTO",
  },
  {
    title: "Business Dashboard",
    category: "Dashboard",
    description:
      "Echtzeit-KPIs, Umsatztracking und Team-Performance in einer Oberfläche.",
    gradient: "from-stone-800 via-zinc-900 to-black",
    accent: "DATA",
  },
  {
    title: "Smart CRM Workflow",
    category: "CRM",
    description:
      "Automatisierte Lead-Pipeline mit KI-gestützter Priorisierung.",
    gradient: "from-gray-800 via-zinc-900 to-black",
    accent: "CRM",
  },
  {
    title: "Modern Company Website",
    category: "Web",
    description:
      "Premium Unternehmenswebsite mit Animationen und Top-Performance.",
    gradient: "from-slate-800 via-zinc-900 to-black",
    accent: "WEB",
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
