export const navLinks = [
  { label: "Über mich", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projekte", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Vorteile", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Prozess", href: "#process" },
  { label: "Kontakt", href: "#contact" },
] as const;

export const services = [
  {
    title: "Webentwicklung",
    slug: "webentwicklung",
    description:
      "Hochperformante, moderne Websites und Web-Apps mit Next.js – schnell, skalierbar und zukunftssicher.",
    icon: "code",
  },
  {
    title: "KI-Integrationen",
    slug: "ki-integrationen",
    description:
      "Intelligente Chatbots, Assistenten und KI-Workflows, nahtlos in Ihre Geschäftsprozesse integriert.",
    icon: "brain",
  },
  {
    title: "Automationen",
    slug: "ki-automatisierung",
    description:
      "Automatisierte Workflows mit n8n und Custom Scripts – weniger manuelle Arbeit, mehr Effizienz.",
    icon: "workflow",
  },
  {
    title: "API-Anbindungen",
    slug: "api-anbindungen",
    description:
      "Sichere Verbindungen zwischen Systemen, Drittanbieter-Services und internen Plattformen.",
    icon: "api",
  },
  {
    title: "Dashboards",
    slug: "dashboards",
    description:
      "Echtzeit-Dashboards und Analytics-Oberflächen für datengetriebene Entscheidungen.",
    icon: "chart",
  },
  {
    title: "Individuelle Softwarelösungen",
    slug: "individuelle-softwareloesungen",
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
    gradient: "from-indigo-950 via-zinc-900 to-black",
    accentColor: "border-indigo-500/30 text-indigo-300 bg-indigo-950/50",
    accent: "KI",
  },
  {
    title: "Automatisierte Spesenabrechnung & Excel-Verarbeitung",
    category: "Automation",
    description:
      "Workflow zur automatischen Verarbeitung von 600–800 CSV-Datensätzen aus Google Drive mit JavaScript-Filterlogik und Übertragung in Microsoft Excel. Zeitersparnis: ca. 4 Stunden pro Durchlauf.",
    gradient: "from-emerald-950 via-zinc-900 to-black",
    accentColor: "border-emerald-500/30 text-emerald-300 bg-emerald-950/50",
    accent: "AUTOMATION",
  },
  {
    title: "Automatisierte PDF-Erstellung mit KI-Agenten",
    category: "KI / Automation",
    description:
      "KI-gestützter Workflow zur automatischen Erstellung mehrseitiger Dokumente aus HTML-Daten. Zeitersparnis: ca. 1 Stunde pro Vorgang.",
    gradient: "from-violet-950 via-zinc-900 to-black",
    accentColor: "border-violet-500/30 text-violet-300 bg-violet-950/50",
    accent: "KI",
  },
  {
    title: "KI-gestützte Bewerberanalyse & Recruitee-Integration",
    category: "KI",
    description:
      "Automatisierte Analyse von Bewerberunterlagen (PDF, Word, gescannte Dokumente) mit strukturierter Positiv-/Negativbewertung und automatischer Benachrichtigung bei geeigneten Kandidaten.",
    gradient: "from-amber-950 via-zinc-900 to-black",
    accentColor: "border-amber-500/30 text-amber-300 bg-amber-950/50",
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

export const faqCategories = [
  {
    category: "Allgemein & Einstieg",
    faqs: [
      {
        question: "Für wen sind Ihre Leistungen geeignet?",
        answer:
          "Meine Leistungen richten sich an kleine und mittelständische Unternehmen, Selbstständige und Start-ups, die ihre Prozesse digitalisieren oder modernisieren möchten. Egal ob Handwerk, Dienstleistung oder E-Commerce – wenn es repetitive Aufgaben, manuelle Prozesse oder eine veraltete digitale Präsenz gibt, kann ich helfen.",
      },
      {
        question: "Wie läuft das Erstgespräch ab?",
        answer:
          "Das Erstgespräch ist kostenlos und unverbindlich. In ca. 30 Minuten besprechen wir Ihr Vorhaben, Ihre Ziele und mögliche Lösungsansätze. Sie erhalten danach ein konkretes Angebot – ohne versteckte Kosten.",
      },
      {
        question: "Was kostet ein Projekt?",
        answer:
          "Die Kosten hängen stark vom Umfang ab. Bei klar definierten Projekten (z. B. eine neue Website) arbeite ich mit Festpreisen. Für laufende Aufgaben oder komplexere Entwicklungen biete ich einen Stundensatz an. Nach dem kostenlosen Erstgespräch erhalten Sie ein transparentes Angebot.",
      },
      {
        question: "Wie lange dauert die Umsetzung eines Projekts typischerweise?",
        answer:
          "Das hängt stark vom Umfang ab. Kleinere Webseiten oder einfache Workflow-Automationen sind oft in 2 bis 4 Wochen startklar. Komplexe Web-Apps oder tiefgreifende KI-Integrationen dauern meist 2 bis 3 Monate. Wir vereinbaren im Konzeptgespräch immer feste Meilensteine.",
      },
      {
        question: "Wie bleiben wir während der Entwicklung in Kontakt?",
        answer:
          "Transparenz ist mir wichtig. Wir arbeiten in wöchentlichen oder zweiwöchentlichen Sprints. Sie erhalten Zugriff auf eine Testumgebung, um den Fortschritt live zu sehen. Die Kommunikation erfolgt unkompliziert per E-Mail, Slack/Teams oder Video-Call.",
      },
      {
        question: "Muss ich technisches Vorwissen mitbringen?",
        answer:
          "Nein – das ist nicht nötig. Ich erkläre alles verständlich und begleite Sie durch den gesamten Prozess. Sie müssen nur wissen, was Sie erreichen möchten. Den Rest übernehme ich.",
      },
      {
        question: "Arbeiten Sie auch mit kleinen Unternehmen oder Einzelpersonen zusammen?",
        answer:
          "Ja, absolut. Gerade kleine Unternehmen profitieren enorm von Automationen und modernen Weblösungen, weil sie damit wertvolle Zeit sparen und mit größeren Wettbewerbern mithalten können.",
      },
    ],
  },
  {
    category: "Künstliche Intelligenz",
    faqs: [
      {
        question: "Was ist Künstliche Intelligenz (KI) und wie funktioniert sie?",
        answer:
          "Künstliche Intelligenz bezeichnet Computerprogramme, die Aufgaben erledigen, die bisher menschliches Denken erforderten – wie Texte verstehen, Bilder erkennen oder Entscheidungen treffen. Moderne KI-Systeme wie ChatGPT oder Claude wurden auf riesigen Datenmengen trainiert und können dadurch Muster erkennen, Antworten generieren oder Prozesse unterstützen.",
      },
      {
        question: "Wie kann ich KI in meinem Unternehmen einsetzen?",
        answer:
          "KI lässt sich in vielen Bereichen einsetzen: automatische Beantwortung von Kundenanfragen, Analyse von Dokumenten und Bewerbungen, Erstellung von Berichten oder Zusammenfassungen, intelligente Chatbots auf der Website, oder smarte Entscheidungsunterstützung im Vertrieb. Ich analysiere gemeinsam mit Ihnen, wo KI bei Ihnen den größten Mehrwert bringt.",
      },
      {
        question: "Was ist der Unterschied zwischen KI und einem normalen Programm?",
        answer:
          "Ein klassisches Programm folgt festen Regeln: Wenn A, dann B. KI hingegen lernt aus Daten und kann auch mit unbekannten Situationen umgehen. Ein KI-Chatbot kann z. B. eine Kundenfrage beantworten, die so nie zuvor gestellt wurde – weil er den Kontext versteht, nicht nur Schlagwörter sucht.",
      },
      {
        question: "Welche laufenden Kosten entstehen bei der Nutzung von KI-Modellen?",
        answer:
          "Bei der Nutzung kommerzieller Schnittstellen (wie OpenAI oder Anthropic) fallen nutzungsabhängige Gebühren an. Für die meisten KMU-Anwendungen liegen diese bei unter 10 bis 50 € im Monat. Alternativ können wir lizenzkostenfreie Open-Source-Modelle einsetzen, die auf Ihren eigenen Servern laufen. Ich berate Sie stets zur wirtschaftlichsten Option.",
      },
      {
        question: "Ist KI sicher? Werden meine Daten weitergegeben?",
        answer:
          "Das hängt von der eingesetzten Lösung ab. Ich setze auf datenschutzkonforme KI-Integrationen und bespreche mit Ihnen im Voraus, welche Daten verarbeitet werden und wie. Auf Wunsch können Lösungen eingesetzt werden, die vollständig in Ihrer eigenen Infrastruktur laufen.",
      },
      {
        question: "Kann KI meine Mitarbeiter ersetzen?",
        answer:
          "KI ist ein Werkzeug – kein Ersatz für Menschen. Sie übernimmt repetitive, zeitintensive Aufgaben, damit Ihre Mitarbeiter sich auf das Wesentliche konzentrieren können. Das Ziel ist Entlastung und Effizienz, nicht Personalabbau.",
      },
      {
        question: "Was ist ein KI-Agent?",
        answer:
          "Ein KI-Agent ist ein System, das nicht nur Fragen beantwortet, sondern selbstständig Aufgaben ausführt: Daten abrufen, Entscheidungen treffen, andere Programme steuern und Ergebnisse liefern. Zum Beispiel ein Agent, der eingehende Bewerbungen analysiert, bewertet und automatisch eine strukturierte Zusammenfassung in Ihr HR-System einträgt.",
      },
    ],
  },
  {
    category: "Automationen & Workflows",
    faqs: [
      {
        question: "Was ist eine Workflow-Automation?",
        answer:
          "Eine Workflow-Automation verbindet verschiedene Programme und Prozesse so, dass Aufgaben automatisch ablaufen – ohne manuelle Eingriffe. Zum Beispiel: Ein neuer Lead aus Ihrem Kontaktformular wird automatisch in Ihr CRM eingetragen, eine Bestätigungsmail verschickt und eine Aufgabe für den Vertrieb erstellt. Alles in Sekunden, ohne dass jemand etwas tun muss.",
      },
      {
        question: "Welche Prozesse lassen sich automatisieren?",
        answer:
          "Nahezu alle wiederkehrenden digitalen Aufgaben: Rechnungsverarbeitung, E-Mail-Benachrichtigungen, Datentransfer zwischen Systemen, Berichterstellung, Terminbuchungen, Social-Media-Posts, Bewerberscreening, Bestandsüberwachung und vieles mehr. Wenn Sie eine Aufgabe regelmäßig manuell erledigen, ist sie ein Kandidat für eine Automation.",
      },
      {
        question: "Kann auch ältere Branchensoftware ohne moderne Schnittstelle (API) angebunden werden?",
        answer:
          "Ja, fast immer. Wenn keine direkte API vorhanden ist, nutzen wir alternative Wege wie automatisierte Datei-Exporte/Importe (z. B. CSV/XML via SFTP), direkte Datenbankzugriffe oder maßgeschneiderte Skripte, die Daten auslesen und übertragen.",
      },
      {
        question: "Was ist n8n und warum verwenden Sie es?",
        answer:
          "n8n ist eine Open-Source-Automationsplattform, vergleichbar mit Zapier oder Make – aber mit deutlich mehr Flexibilität und der Möglichkeit, sie auf eigenen Servern zu betreiben. Das bedeutet: volle Kontrolle über Ihre Daten, keine monatlichen Nutzungslimits und die Möglichkeit, komplexe individuelle Logik zu implementieren.",
      },
      {
        question: "Was ist der Unterschied zwischen n8n, Zapier und Make?",
        answer:
          "Zapier und Make sind einsteigerfreundlich und gut für einfache Verbindungen zwischen gängigen Tools. n8n bietet mehr technische Tiefe, kann selbst gehostet werden und eignet sich besser für komplexe oder datensensible Workflows. Ich wähle je nach Anforderung das beste Werkzeug – manchmal auch eine Kombination.",
      },
      {
        question: "Wie viel Zeit kann ich durch Automationen sparen?",
        answer:
          "Das ist sehr individuell. In der Praxis sehen viele Kunden Einsparungen von mehreren Stunden pro Woche – bei manchen Prozessen sogar mehrere Stunden pro einzelnem Durchlauf. Ein Beispiel aus meiner Praxis: Eine automatisierte Spesenabrechnung sparte ca. 4 Stunden pro Durchlauf gegenüber der manuellen Bearbeitung.",
      },
      {
        question: "Was sind API-Anbindungen und wozu brauche ich sie?",
        answer:
          "Eine API ist eine Schnittstelle, über die zwei Programme miteinander kommunizieren. API-Anbindungen ermöglichen es, Ihre bestehenden Systeme – z. B. Ihr CRM, Buchhaltungsprogramm oder Shopsystem – miteinander zu verbinden und Daten automatisch auszutauschen, ohne manuelle Übertragung.",
      },
      {
        question: "Was passiert, wenn eine Automation im laufenden Betrieb fehlschlägt?",
        answer:
          "Sicherheit geht vor. Alle Workflows (z. B. in n8n) erhalten ein automatisiertes Error-Handling. Tritt ein Fehler auf, wird sofort eine Benachrichtigung (z. B. per E-Mail oder Slack) mit Details gesendet. Daten gehen dabei nicht verloren, da fehlerhafte Durchläufe pausiert und nach der Behebung manuell oder automatisch neu gestartet werden können.",
      },
    ],
  },
  {
    category: "Webentwicklung",
    faqs: [
      {
        question: "Was ist der Unterschied zwischen einer normalen Website und einer Web-App?",
        answer:
          "Eine Website präsentiert Informationen (Über uns, Leistungen, Kontakt). Eine Web-App ist interaktiv und führt Aktionen aus – z. B. ein Kundenportal, ein Dashboard mit Echtzeit-Daten oder ein internes Verwaltungstool. Ich entwickle beides – je nach dem, was Ihr Unternehmen braucht.",
      },
      {
        question: "Warum Next.js und nicht WordPress?",
        answer:
          "WordPress ist gut für einfache Informationsseiten mit häufigen Content-Änderungen. Next.js liefert deutlich bessere Performance, Sicherheit und Flexibilität – besonders wenn KI-Funktionen, Dashboards oder individuelle Logik integriert werden sollen. Für Unternehmen, die eine zukunftssichere Lösung wollen, ist Next.js die bessere Wahl.",
      },
      {
        question: "Sind die entwickelten Webseiten für Google optimiert (SEO) und mobilfreundlich?",
        answer:
          "Ja, ausnahmslos. Jede Seite wird nach dem 'Mobile First'-Prinzip gestaltet, um auf Smartphones perfekt zu funktionieren. Durch den Einsatz von Next.js erreichen wir überragende Ladezeiten, was zusammen mit sauberer Metadaten-Struktur und semantischem HTML die ideale Basis für Ihr Google-Ranking bildet.",
      },
      {
        question: "Sind die erstellten Webseiten und Systeme DSGVO-konform?",
        answer:
          "Datenschutz hat oberste Priorität. Ich achte bei der Entwicklung auf Cookie-freie Analysetools, lokale Einbindung von Schriftarten, DSGVO-konforme Hosting-Partner in Europa sowie sichere Datenübertragung (SSL/TLS). Bei KI- und Automationslösungen besprechen wir die Datenflüsse im Voraus detailliert.",
      },
      {
        question: "Kümmern Sie sich auch um Hosting und Wartung?",
        answer:
          "Ja, auf Wunsch übernehme ich auch das Deployment, das Hosting-Setup und laufende Wartung. Nach dem Launch lasse ich Sie nicht allein.",
      },
    ],
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

export const serviceDetails = [
  {
    slug: "webentwicklung",
    metaTitle: "Webentwicklung mit Next.js – Moderne Webseiten | NM-TECH IT",
    metaDescription:
      "Professionelle Webentwicklung mit Next.js und React. Hochperformante, SEO-optimierte und DSGVO-konforme Webseiten für Ihr Unternehmen aus Lastrup. Jetzt kostenlos beraten lassen.",
    longParagraphs: [
      "Ihre Website ist oft der erste Kontaktpunkt zwischen Ihrem Unternehmen und potenziellen Kunden. Eine professionell entwickelte Webpräsenz schafft Vertrauen, überzeugt auf den ersten Blick und wird von Google zuverlässig gefunden. Ich entwickle moderne Websites und Web-Apps mit Next.js – dem leistungsstärksten React-Framework für professionelle Webentwicklung.",
      "Next.js ermöglicht Server-Side Rendering, statische Seitengenerierung und optimale Core Web Vitals – alles Faktoren, die Google direkt bei der Bewertung Ihrer Seite berücksichtigt. Das Ergebnis: Ihre Website lädt schnell, rankt besser und bietet Ihren Besuchern ein erstklassiges Nutzungserlebnis auf jedem Gerät.",
      "Der gesamte Entwicklungsprozess – von der ersten Konzeptidee über das Design bis zum Launch – läuft transparent und strukturiert ab. Sie erhalten regelmäßige Updates, Zugang zur Testumgebung und einen direkten Ansprechpartner. Nach dem Launch begleite ich Sie auf Wunsch langfristig mit Wartung und Weiterentwicklung.",
    ],
    highlights: [
      "Blitzschnelle Ladezeiten durch Next.js SSR & SSG",
      "SEO-optimierte Struktur & Metadaten von Anfang an",
      "Mobile-First: Perfekt auf Smartphone, Tablet & Desktop",
      "DSGVO-konformes Hosting & Implementierung",
      "TypeScript für robuste, wartungsfreundliche Codequalität",
      "Moderne Animationen & Premium User Experience",
      "Tailwind CSS für konsistentes, schnelles Styling",
      "Deployment auf Vercel, Netlify oder eigenem Server",
    ],
    faqCategoryKey: "Webentwicklung",
  },
  {
    slug: "ki-integrationen",
    metaTitle: "KI-Integrationen für Unternehmen – ChatGPT & Claude APIs | NM-TECH IT",
    metaDescription:
      "Intelligente KI-Systeme in Ihr Unternehmen integrieren: Chatbots, KI-Agenten, Dokumentenanalyse und mehr. Mit OpenAI GPT-4 und Anthropic Claude. Jetzt kostenlos beraten lassen.",
    longParagraphs: [
      "Künstliche Intelligenz ist kein Zukunftsthema mehr – sie ist heute für Unternehmen jeder Größe zugänglich und bietet enormes Effizienzpotenzial. Ich helfe Ihnen dabei, KI-Technologien konkret und sinnvoll in Ihre Geschäftsprozesse zu integrieren: von der einfachen Chatbot-Lösung bis hin zu komplexen KI-Agenten, die eigenständig Aufgaben übernehmen.",
      "Dabei arbeite ich mit den leistungsstärksten verfügbaren Sprachmodellen: OpenAI GPT-4o, Anthropic Claude und Open-Source-Alternativen wie Mistral oder LLaMA für datensensible Anwendungen. Durch RAG-Systeme (Retrieval-Augmented Generation) kann die KI mit Ihren eigenen Dokumenten, Produktdaten oder internen Wissensquellen arbeiten – ohne dass Ihre Daten in externe Modelle fließen müssen.",
      "Der Unterschied zu Standard-Lösungen: Eine maßgeschneiderte KI-Integration spricht die Sprache Ihrer Kunden, kennt Ihre Produkte und passt sich an Ihre bestehenden Systeme an. Das Ergebnis ist keine generische KI – sondern ein verlässlicher digitaler Mitarbeiter, der rund um die Uhr verfügbar ist.",
    ],
    highlights: [
      "Chatbots & KI-Assistenten für Website und internen Einsatz",
      "Dokumentenanalyse: PDFs, Word-Dateien, gescannte Dokumente",
      "RAG-Systeme mit eigenen Unternehmensdaten & Wissensdatenbanken",
      "Integration von OpenAI GPT-4o und Anthropic Claude",
      "KI-Agenten, die eigenständig Aufgaben ausführen",
      "Datenschutzkonforme Implementierung nach DSGVO",
      "On-Premise-Optionen mit Open-Source-Modellen",
      "Anbindung an CRM, Helpdesk und bestehende Systeme",
    ],
    faqCategoryKey: "Künstliche Intelligenz",
  },
  {
    slug: "ki-automatisierung",
    metaTitle: "Workflow-Automation & KI-Automatisierung mit n8n | NM-TECH IT",
    metaDescription:
      "Automatisieren Sie repetitive Geschäftsprozesse mit n8n und KI-Agenten. Verbinden Sie CRM, E-Mail, Buchhaltung und mehr – Zeiteinsparung von bis zu 4 Stunden pro Durchlauf.",
    longParagraphs: [
      "Repetitive manuelle Aufgaben binden wertvolle Zeit und sind fehleranfällig. Ob E-Mails manuell verarbeiten, Daten zwischen Systemen übertragen oder Berichte erstellen – all das lässt sich automatisieren. Ich entwickle Workflows mit n8n, Make und Python-Skripten, die Ihre Prozesse zuverlässig und ohne Ihr Zutun erledigen.",
      "n8n ist dabei mein bevorzugtes Automatisierungswerkzeug: Es ist leistungsstärker als Zapier oder Make, kann selbst gehostet werden und bietet volle Kontrolle über Ihre Daten und Prozesse. Ein Workflow kann hunderte von Schritten umfassen, externe APIs ansprechen, KI-gestützte Entscheidungslogik beinhalten und bei Fehlern automatisch Alarm schlagen.",
      "Ein konkretes Beispiel aus meiner Praxis: Eine automatisierte Spesenabrechnung verarbeitet 600–800 CSV-Datensätze aus Google Drive, filtert und transformiert die Daten und überträgt sie direkt in Microsoft Excel – vollautomatisch. Zeitersparnis: ca. 4 Stunden pro Durchlauf. Das ist keine Theorie, sondern gelebte Praxis bei meinen Kunden.",
    ],
    highlights: [
      "n8n Workflow-Automation – flexibel und self-hosted",
      "Verbindung von CRM, E-Mail, Buchhaltung & mehr",
      "KI-gestützte Entscheidungslogik innerhalb von Workflows",
      "CSV-, Excel- und Datenverarbeitung automatisiert",
      "Error-Handling & automatische Fehlerbenachrichtigung",
      "Mehr Flexibilität als Zapier oder Make",
      "Python-Skripte für individuelle Anforderungen",
      "Anbindung an Google Drive, SharePoint, HubSpot & mehr",
    ],
    faqCategoryKey: "Automationen & Workflows",
  },
  {
    slug: "api-anbindungen",
    metaTitle: "API-Anbindungen & Systemintegration – Maßgeschneidert | NM-TECH IT",
    metaDescription:
      "Verbinden Sie Ihre Software-Systeme mit professionellen API-Anbindungen. CRM, ERP, Shopsysteme, Microsoft 365 und mehr – sicher, schnell und zuverlässig integriert.",
    longParagraphs: [
      "Moderne Unternehmen nutzen eine Vielzahl von Software-Lösungen: ein CRM für Kundendaten, ein ERP für die Buchhaltung, ein Shopsystem für den Vertrieb und vielleicht noch dutzende weitere Tools. Das Problem: Diese Systeme sprechen oft nicht miteinander. Manuelle Übertragungen, doppelte Datenpflege und Informationsverluste sind die Folge.",
      "API-Anbindungen lösen dieses Problem elegant: Sie verbinden Ihre bestehenden Systeme so, dass Daten automatisch und in Echtzeit zwischen ihnen fließen. Ob REST-API, GraphQL, Webhooks oder ältere SOAP-Schnittstellen – ich entwickle die Brücke zwischen Ihren Systemen, passgenau auf Ihre Anforderungen.",
      "Auch wenn ein System keine offizielle API bietet, gibt es Wege: dateibasierte Integration über CSV/XML, direkte Datenbankzugriffe oder spezialisierte Adapter. Kein System ist zu alt, keine Anforderung zu speziell. Ich analysiere Ihre Systemlandschaft und empfehle den optimalen Integrationsweg.",
    ],
    highlights: [
      "REST-API und GraphQL-Integration",
      "Webhook-basierte Echtzeit-Synchronisation",
      "HubSpot, Salesforce, Microsoft 365, SAP-Anbindungen",
      "Google Workspace & SharePoint Integration",
      "Sicherer Datenaustausch mit OAuth 2.0 & API-Keys",
      "Legacy-Systeme ohne API via Datei-Import/Export",
      "Custom API-Entwicklung für eigene Services",
      "Monitoring & Fehlerbehandlung für alle Integrationen",
    ],
    faqCategoryKey: "Automationen & Workflows",
  },
  {
    slug: "dashboards",
    metaTitle: "Individuelle Business-Dashboards & Echtzeit-Analytics | NM-TECH IT",
    metaDescription:
      "Maßgeschneiderte Dashboards für Echtzeit-Analysen: Vertrieb, HR, Finanzen und mehr auf einen Blick. KI-gestützte Auswertungen für datengetriebene Entscheidungen.",
    longParagraphs: [
      "Daten sind das Fundament guter Entscheidungen – aber nur, wenn sie zugänglich, verständlich und aktuell sind. Standard-Tools wie Excel oder generische BI-Software stoßen schnell an ihre Grenzen, wenn individuelle KPIs, spezifische Datenquellen oder besondere Anforderungen ins Spiel kommen.",
      "Ich entwickle maßgeschneiderte Dashboards, die genau die Kennzahlen anzeigen, die für Ihr Unternehmen relevant sind: Umsatz, Leads, Automatisierungsfortschritt, Lagerbestände, Mitarbeiterauslastung – alles in Echtzeit und in einer übersichtlichen Oberfläche. Die Daten werden direkt aus Ihren bestehenden Systemen gezogen.",
      "Ein Beispiel aus der Praxis: Ein KI-gestütztes HubSpot Sales Dashboard analysiert Leads und Deals in Echtzeit via Webhooks, bewertet Abschlusswahrscheinlichkeiten und gibt gezielte Handlungsempfehlungen. Das Ergebnis: Der Vertrieb fokussiert sich auf die richtigen Deals zur richtigen Zeit.",
    ],
    highlights: [
      "Echtzeit-Datenvisualisierung aus mehreren Quellen",
      "KI-gestützte Analyse & Prognosen",
      "Integration mit CRM, ERP, Google Analytics & Co.",
      "Rollenbasierte Zugriffsrechte & Multi-User-Support",
      "Mobile-optimierte Benutzeroberfläche",
      "Export-Funktionen für Berichte und Präsentationen",
      "Supabase & PostgreSQL für skalierbare Datenhaltung",
      "Automatisierte Benachrichtigungen bei Schwellenwerten",
    ],
    faqCategoryKey: "Allgemein & Einstieg",
  },
  {
    slug: "individuelle-softwareloesungen",
    metaTitle: "Individuelle Softwareentwicklung – Von MVP bis Enterprise | NM-TECH IT",
    metaDescription:
      "Maßgeschneiderte Software für Ihr Unternehmen: Kundenportale, SaaS-Plattformen, Web-Apps und mehr. Agile Entwicklung mit transparenten Meilensteinen – für KMU und Start-ups.",
    longParagraphs: [
      "Manchmal passt keine Standardlösung – sei es, weil Ihre Anforderungen zu spezifisch sind, bestehende Tools zu teuer werden oder ein vollkommen neues Produkt entstehen soll. Für genau diese Fälle entwickle ich individuelle Softwarelösungen: von der ersten Idee über den Prototyp bis hin zur fertigen, produktionsreifen Anwendung.",
      "Der Entwicklungsprozess läuft agil und transparent ab: In kurzen Sprints entsteht schrittweise ein lauffähiges System. Sie sehen nach jeder Iteration den Fortschritt, geben Feedback und behalten die volle Kontrolle über Richtung und Umfang. Überraschungen bei Kosten und Zeit soll es nicht geben – klare Meilensteine sind Standard.",
      "Ob Sie ein SaaS-Produkt aufbauen, ein internes Verwaltungstool benötigen, ein Kundenportal mit Login-Bereich planen oder eine komplexe Web-App mit KI-Anbindung realisieren möchten: Ich bringe die technische Expertise mit und begleite Sie von der Idee bis zum erfolgreichen Launch.",
    ],
    highlights: [
      "Von der Idee bis zum Launch – ein Ansprechpartner",
      "Agile Entwicklung in 2-Wochen-Sprints",
      "SaaS-Plattformen & Multi-Tenant-Architekturen",
      "Kundenportale mit Login & Berechtigungssystem",
      "MVP-Entwicklung für schnellen Markteinstieg",
      "Nahtlose Integration in bestehende IT-Infrastruktur",
      "TypeScript & Clean Code für langfristige Wartbarkeit",
      "KI- und Automatisierungsmodule auf Wunsch integriert",
    ],
    faqCategoryKey: "Allgemein & Einstieg",
  },
] as const;
