export const navLinks = [
  { label: "Über mich", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projekte", href: "/#projects" },
  { label: "FAQ", href: "/faq" },
  { label: "Tech Stack", href: "/#tech" },
  { label: "Prozess", href: "/#process" },
  { label: "Kontakt", href: "/#contact" },
] as const;

export const services = [
  {
    title: "Webentwicklung",
    description:
      "Hochperformante, moderne Websites und Web-Apps mit Next.js – schnell, skalierbar und zukunftssicher.",
    icon: "code",
    href: "/leistungen/webentwicklung",
  },
  {
    title: "KI-Integration",
    description:
      "Intelligente Chatbots, Assistenten und KI-Workflows, nahtlos in Ihre Geschäftsprozesse integriert.",
    icon: "brain",
    href: "/leistungen/ki-integrationen",
  },
  {
    title: "Prozess-Automatisierung",
    description:
      "Automatisierte Workflows mit n8n und Custom Scripts – weniger manuelle Arbeit, mehr Effizienz.",
    icon: "workflow",
    href: "/leistungen/ki-automatisierung",
  },
  {
    title: "API-Anbindungen",
    description:
      "Sichere Verbindungen zwischen Systemen, Drittanbieter-Services und internen Plattformen.",
    icon: "api",
    href: "/leistungen/api-anbindungen",
  },
  {
    title: "Dashboards",
    description:
      "Echtzeit-Dashboards und Analytics-Oberflächen für datengetriebene Entscheidungen.",
    icon: "chart",
    href: "/leistungen/dashboards",
  },
  {
    title: "Individuelle Softwarelösungen",
    description:
      "Maßgeschneiderte Software exakt auf Ihre Anforderungen – von MVP bis Enterprise.",
    icon: "cube",
    href: "/leistungen/individuelle-softwareloesungen",
  },
] as const;

export type LeistungSlug =
  | "webentwicklung"
  | "ki-integrationen"
  | "ki-automatisierung"
  | "api-anbindungen"
  | "dashboards"
  | "individuelle-softwareloesungen";

export type LeistungData = {
  slug: LeistungSlug;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  body: string;
  features: { icon: string; heading: string; body: string }[];
  useCases: string[];
  closingLink?: { text: string; linkLabel: string; href: string };
  ctaHeading?: string;
  ctaBody?: string;
  relatedSlugs: LeistungSlug[];
};

export const leistungenData: Record<LeistungSlug, LeistungData> = {
  webentwicklung: {
    slug: "webentwicklung",
    title: "Webentwicklung & moderne Websites",
    tagline: "Individuelle Websites, Web-Apps und Relaunches mit Next.js – schnell, mobiloptimiert und suchmaschinenfreundlich.",
    metaTitle: "Webentwicklung & Webdesign Lastrup | Moderne Websites | NM-TECH IT",
    metaDescription:
      "Individuelle Websites, Web-Apps und Relaunches mit Next.js – schnell, mobiloptimiert und suchmaschinenfreundlich. Für Unternehmen, Vereine und Selbstständige in Lastrup, Cloppenburg und dem Emsland.",
    keywords: [
      "Webentwicklung Lastrup",
      "Webdesign Cloppenburg",
      "Website erstellen lassen Emsland",
      "Next.js Website Niedersachsen",
      "Relaunch Website Lastrup",
      "Web-App Entwicklung",
      "Landingpage erstellen lassen",
      "mobilfreundliche Website",
      "DSGVO-konforme Website",
      "NM-TECH IT",
    ],
    intro:
      "Ihre Website ist oft der erste Eindruck, den potenzielle Kunden von Ihnen bekommen. Ich entwickle moderne, schnelle Websites, die auf jedem Gerät gut aussehen, bei Google gefunden werden und zu Ihnen passen – kein Baukasten von der Stange, sondern individuell gestaltet. Ob neue Website, Relaunch einer veralteten Seite oder eine interaktive Web-App: Ich begleite Sie von der ersten Idee bis zum fertigen Launch.",
    body: `Ich entwickle mit Next.js und React – derselben Technik, die auch große, professionelle Plattformen nutzen. Das bedeutet für Sie: schnelle Ladezeiten, hohe Sicherheit und eine Seite, die auch in einigen Jahren noch zeitgemäß ist. Jede Website wird nach dem "Mobile First"-Prinzip gebaut, funktioniert also auf dem Smartphone genauso gut wie am Desktop. Durch sauberen Aufbau und schnelle Ladezeiten legen wir gleichzeitig die ideale Basis für Ihr Google-Ranking.

DSGVO-Konformität ist kein nachträglicher Gedanke, sondern Teil der Entwicklung: lokale Einbindung von Schriftarten, cookie-freie oder datenschutzfreundliche Analyse, Hosting bei europäischen Anbietern und sichere Datenübertragung. So ist Ihre Seite von Beginn an auf der sicheren Seite.

Auf Wunsch übernehme ich auch das Cloud-Hosting und die laufende Wartung Ihrer Seite – Sicherheits-Updates, kleine Anpassungen und Verfügbarkeit inklusive. Nach dem Launch lasse ich Sie nicht allein.`,
    features: [
      {
        icon: "code",
        heading: "Unternehmens-Websites",
        body: "Professionelle Auftritte, die Ihr Unternehmen seriös präsentieren und neue Kunden anziehen.",
      },
      {
        icon: "cube",
        heading: "Vereins- & Privat-Websites",
        body: "Übersichtliche, gepflegte Seiten für Vereine, Selbstständige und private Projekte.",
      },
      {
        icon: "chart",
        heading: "Landingpages & One-Pager",
        body: "Fokussierte Einzelseiten, die ein Angebot oder eine Aktion klar auf den Punkt bringen.",
      },
      {
        icon: "workflow",
        heading: "Relaunch bestehender Seiten",
        body: "Veraltete Websites modernisieren – schneller, mobilfreundlich und auf aktuellem technischen Stand.",
      },
      {
        icon: "api",
        heading: "Web-Apps & Kundenportale",
        body: "Interaktive Anwendungen, die mehr können als eine klassische Website – zum Beispiel Login-Bereiche, Dashboards oder individuelle Tools.",
      },
    ],
    useCases: [
      "Unternehmens-Websites: Professionelle Auftritte, die Ihr Unternehmen seriös präsentieren und neue Kunden anziehen.",
      "Vereins- & Privat-Websites: Übersichtliche, gepflegte Seiten für Vereine, Selbstständige und private Projekte.",
      "Landingpages & One-Pager: Fokussierte Einzelseiten, die ein Angebot oder eine Aktion klar auf den Punkt bringen.",
      "Relaunch bestehender Seiten: Veraltete Websites modernisieren – schneller, mobilfreundlich und auf aktuellem technischen Stand.",
      "Web-Apps & Kundenportale: Interaktive Anwendungen, die mehr können als eine klassische Website – zum Beispiel Login-Bereiche, Dashboards oder individuelle Tools.",
    ],
    ctaHeading: "Sehen Sie Ihre neue Website, bevor Sie sich entscheiden.",
    ctaBody:
      "Auf Wunsch erstelle ich Ihnen vorab einen kostenlosen, unverbindlichen Designentwurf – nur wenn er Ihnen gefällt, setzen wir das Projekt um. Den genauen Festpreis besprechen wir nach einem kostenlosen Erstgespräch, abhängig vom Umfang Ihrer Seite. So wissen Sie von Anfang an, woran Sie sind, ohne versteckte Kosten.",
    relatedSlugs: ["ki-automatisierung", "dashboards"],
  },

  "ki-automatisierung": {
    slug: "ki-automatisierung",
    title: "Prozess- & Workflow-Automatisierung",
    tagline: "Wiederkehrende Aufgaben automatisieren mit n8n, Make, Zapier & Co.",
    metaTitle: "KI-Automatisierung & Workflow-Automatisierung Lastrup | NM-TECH IT",
    metaDescription:
      "Wiederkehrende Aufgaben automatisieren mit n8n, Make, Zapier & Co. Prozessautomatisierung für Unternehmen in Lastrup, Cloppenburg und dem Emsland. Stunden sparen, Fehler vermeiden.",
    keywords: [
      "Workflow-Automatisierung Lastrup",
      "Prozessautomatisierung Cloppenburg",
      "n8n Entwickler Niedersachsen",
      "Automatisierung Emsland",
      "Make Zapier Automatisierung",
      "Power Automate Entwickler",
      "Workflow-Automatisierung Mittelstand",
      "Automatisierung kleines Unternehmen",
      "Prozessoptimierung Lastrup",
      "NM-TECH IT",
    ],
    intro:
      "Jeder Betrieb hat Aufgaben, die sich jeden Tag wiederholen: Daten von einem Programm ins nächste übertragen, E-Mails sortieren, Dokumente erstellen, Listen pflegen. Diese Arbeit kostet Zeit, ist fehleranfällig und hält niemanden im Unternehmen wirklich voran. Ich automatisiere genau solche Abläufe – sodass sie zuverlässig im Hintergrund laufen, ohne dass jemand sie manuell anstoßen muss.",
    body: `Der wichtigste Effekt ist gewonnene Zeit. Wiederkehrende Abläufe, die heute mehrere Stunden im Monat kosten, laufen automatisiert in Sekunden. Der zweite große Vorteil: weniger Fehler. Wo Menschen Zahlen abtippen oder Daten kopieren, passieren Flüchtigkeitsfehler. Eine Automatisierung macht denselben Schritt jedes Mal exakt gleich. Dazu kommen geringere Kosten, spürbar entlastete Mitarbeiter und schnellere Reaktionszeiten gegenüber Ihren Kunden.

Ich bin auf kein einzelnes Werkzeug festgelegt. Ob n8n (selbst gehostet oder in der Cloud), Make, Zapier, Microsoft Power Automate oder eigene Scripts – ich wähle das, was am besten zu Ihren bestehenden Systemen und Anforderungen passt. Bei datensensiblen Abläufen bietet sich oft ein selbst gehostetes n8n an, weil Ihre Daten dann vollständig unter Ihrer Kontrolle bleiben und keine laufenden Nutzungslimits entstehen. Für einfachere Verbindungen zwischen gängigen Tools sind Make oder Zapier oft schneller eingerichtet.

Jeder Workflow erhält ein Error-Handling. Tritt ein Problem auf, werden Sie automatisch benachrichtigt – per E-Mail oder über Ihren bevorzugten Kanal. Fehlerhafte Durchläufe werden pausiert statt einfach „verschluckt", sodass keine Daten verloren gehen und der Vorgang nach der Behebung sauber weiterläuft.`,
    features: [
      {
        icon: "chart",
        heading: "Was Automatisierung Ihnen bringt",
        body: "Der wichtigste Effekt ist gewonnene Zeit. Dazu kommen geringere Kosten, spürbar entlastete Mitarbeiter und schnellere Reaktionszeiten gegenüber Ihren Kunden.",
      },
      {
        icon: "workflow",
        heading: "Was sich automatisieren lässt",
        body: "Von einfachen Verbindungen bis zu komplexen, mehrstufigen Prozessen – nahezu jede wiederkehrende, manuelle Tätigkeit lässt sich automatisieren.",
      },
      {
        icon: "brain",
        heading: "Welche Tools ich einsetze",
        body: "Ob n8n (selbst gehostet oder in der Cloud), Make, Zapier, Microsoft Power Automate oder eigene Scripts – ich wähle das, was am besten zu Ihren bestehenden Systemen und Anforderungen passt.",
      },
      {
        icon: "code",
        heading: "Was passiert bei einem Fehler",
        body: "Tritt ein Problem auf, werden Sie automatisch benachrichtigt – per E-Mail oder über Ihren bevorzugten Kanal. Fehlerhafte Durchläufe werden pausiert, sodass keine Daten verloren gehen.",
      },
    ],
    useCases: [
      "Anfragen & Formulare: Eingehende Anfragen automatisch erfassen, strukturieren und an die richtige Stelle weiterleiten – ohne dass jemand sie manuell sortiert.",
      "Leads automatisch erfassen: Leads aus Facebook, einem Kontaktformular oder anderen Quellen automatisch in Ihr Tool der Wahl übertragen – zum Beispiel in Trello, Ihr CRM oder eine Tabelle, ohne manuelles Abtippen.",
      "Dokumente erstellen: Aus eingegebenen Daten automatisch fertige PDF-Dokumente generieren, etwa ausgefüllte Formulare oder wiederkehrende Schreiben.",
      "Erinnerungen & Fristen: Automatische Benachrichtigungen an Termine und Fristen, damit nichts mehr durchrutscht.",
      "Daten & Listen pflegen: Große Datenmengen automatisch in strukturierte Tabellen übertragen – inklusive Formatierungen, monatlicher Anpassungen und wiederkehrender Aktualisierungen. Solche Abläufe ersetzen schnell mehrere Stunden manueller Arbeit pro Monat.",
      "Systeme verbinden: Daten automatisch zwischen verschiedenen Programmen austauschen, statt sie von Hand zu übertragen.",
    ],
    closingLink: {
      text: "Das sind nur einige Beispiele – grundsätzlich lässt sich nahezu jede wiederkehrende, manuelle Tätigkeit automatisieren. Besonders wirkungsvoll wird Automatisierung in Kombination mit KI – etwa wenn erfasste Leads nicht nur eingetragen, sondern direkt automatisch bewertet werden. Mehr dazu auf der Seite ",
      linkLabel: "KI-Integrationen",
      href: "/leistungen/ki-integrationen",
    },
    ctaHeading: "Welcher Ablauf frisst bei Ihnen die meiste Zeit?",
    ctaBody:
      "Meine Überzeugung: Fast jede wiederkehrende, manuelle Tätigkeit lässt sich automatisieren – die entscheidende Frage ist nicht ob sich das lohnt, sondern ob Ihre vorhandenen Programme die nötigen Schnittstellen mitbringen. Genau das finde ich für Sie heraus. Erzählen Sie mir in einem kostenlosen Erstgespräch, welche Aufgabe Sie am häufigsten von Hand erledigen, und ich prüfe, wie sie sich technisch umsetzen lässt.",
    relatedSlugs: ["webentwicklung", "dashboards"],
  },

  dashboards: {
    slug: "dashboards",
    title: "Dashboards & Datenvisualisierung",
    tagline: "Individuelle Dashboards, die Ihre wichtigsten Kennzahlen übersichtlich darstellen – aus CRM, ERP, Excel oder per API.",
    metaTitle: "Dashboards & Datenvisualisierung Lastrup | KPIs im Blick | NM-TECH IT",
    metaDescription:
      "Individuelle Dashboards, die Ihre wichtigsten Kennzahlen übersichtlich darstellen – aus CRM, ERP, Excel oder per API. Für Unternehmen in Lastrup, Cloppenburg und dem Emsland.",
    keywords: [
      "Dashboard Entwicklung Lastrup",
      "Datenvisualisierung Cloppenburg",
      "KPI Dashboard Emsland",
      "Echtzeit Dashboard Niedersachsen",
      "Dashboard CRM ERP",
      "Business Intelligence Lastrup",
      "Daten visualisieren lassen",
      "individuelles Dashboard",
      "Kennzahlen Dashboard",
      "NM-TECH IT",
    ],
    intro:
      "Die meisten Unternehmen sitzen auf einem Berg von Daten – in ihrem CRM, in Excel-Tabellen, im Buchhaltungsprogramm. Nur sind diese Zahlen oft über viele Systeme verstreut und schwer zu überblicken. Ein Dashboard bringt sie an einem Ort zusammen und zeigt Ihnen auf einen Blick, was wirklich wichtig ist – verständlich aufbereitet, statt in unübersichtlichen Tabellen vergraben.",
    body: `Ein Dashboard ist nur so gut wie seine Datenquelle. Ich binde Ihr Dashboard an die Systeme an, die Sie bereits nutzen – zum Beispiel CRM-Systeme wie HubSpot oder Salesforce, ERP-Software, Excel-Tabellen oder beliebige andere Programme mit einer Schnittstelle. Falls eine Quelle keine moderne Schnittstelle hat, finden wir einen anderen Weg, etwa über automatisierte Datei-Importe. Genauso ist auch ein eigenständiges Dashboard möglich, in das Daten manuell oder automatisiert einfließen.

Ein gutes Dashboard zeigt nicht möglichst viele Zahlen, sondern die richtigen. Ich gestalte Ihre Oberfläche so, dass Sie das Wesentliche sofort erkennen – klar, aufgeräumt und auf Ihre Entscheidungen zugeschnitten. Auf Wunsch lässt sich das Dashboard auch mit einer [Automatisierung](/leistungen/ki-automatisierung) kombinieren, sodass die Daten ganz von selbst aktuell bleiben.`,
    features: [
      {
        icon: "chart",
        heading: "Verkaufs- & Vertriebszahlen",
        body: "Leads, Deals und Umsätze auf einen Blick – inklusive Entwicklung über die Zeit.",
      },
      {
        icon: "workflow",
        heading: "Projekt- & Auftragsübersichten",
        body: "Welche Aufträge laufen, was ist offen, was ist abgeschlossen.",
      },
      {
        icon: "api",
        heading: "Betriebskennzahlen (KPIs)",
        body: "Die Zahlen, die für Ihr Unternehmen wirklich zählen – individuell zusammengestellt.",
      },
      {
        icon: "cube",
        heading: "Daten aus CRM & ERP",
        body: "Informationen aus Ihren bestehenden Systemen übersichtlich visualisiert, statt sie einzeln herauszusuchen.",
      },
      {
        icon: "brain",
        heading: "Echtzeit-Monitoring",
        body: "Live-Daten, die sich automatisch aktualisieren – ideal, wenn Sie immer den aktuellen Stand brauchen.",
      },
    ],
    useCases: [
      "Verkaufs- & Vertriebszahlen: Leads, Deals und Umsätze auf einen Blick – inklusive Entwicklung über die Zeit.",
      "Projekt- & Auftragsübersichten: Welche Aufträge laufen, was ist offen, was ist abgeschlossen.",
      "Betriebskennzahlen (KPIs): Die Zahlen, die für Ihr Unternehmen wirklich zählen – individuell zusammengestellt.",
      "Daten aus CRM & ERP: Informationen aus Ihren bestehenden Systemen übersichtlich visualisiert, statt sie einzeln herauszusuchen.",
      "Echtzeit-Monitoring: Live-Daten, die sich automatisch aktualisieren – ideal, wenn Sie immer den aktuellen Stand brauchen.",
    ],
    ctaHeading: "Welche Zahlen möchten Sie endlich auf einen Blick sehen?",
    ctaBody:
      "In einem kostenlosen Erstgespräch schauen wir, welche Kennzahlen für Sie wichtig sind und aus welchen Quellen sie kommen. Daraus entsteht ein Dashboard, das genau das zeigt, was Sie für Ihre Entscheidungen brauchen.",
    relatedSlugs: ["webentwicklung", "ki-automatisierung"],
  },

  "ki-integrationen": {
    slug: "ki-integrationen",
    title: "KI-Integration für Ihr Unternehmen",
    tagline: "KI sinnvoll im Unternehmen einsetzen: Chatbots, Dokumentenanalyse, automatische Bewertung von Anfragen.",
    metaTitle: "KI-Integration für Unternehmen Lastrup | Chatbots & KI-Lösungen | NM-TECH IT",
    metaDescription:
      "KI sinnvoll im Unternehmen einsetzen: Chatbots, Dokumentenanalyse, automatische Bewertung von Anfragen. DSGVO-konform mit EU-Modellen. Für Unternehmen in Lastrup, Cloppenburg und dem Emsland.",
    keywords: [
      "KI-Integration Lastrup",
      "KI-Chatbot Cloppenburg",
      "Dokumentenanalyse KI",
      "KI DSGVO-konform Emsland",
      "Mistral EU-KI-Modell",
      "KI-Lösung Mittelstand Niedersachsen",
      "Chatbot Unternehmen Lastrup",
      "KI-Assistent entwickeln lassen",
      "KI-Bewertung Anfragen",
      "NM-TECH IT",
    ],
    intro:
      "Künstliche Intelligenz ist mehr als ein Schlagwort – richtig eingesetzt übernimmt sie Aufgaben, die bisher viel Zeit und Konzentration gekostet haben: Texte verstehen, Dokumente auswerten, Anfragen einordnen, Inhalte erstellen. Ich integriere KI gezielt dort in Ihre Abläufe, wo sie echten Mehrwert bringt – nicht als Spielerei, sondern als praktisches Werkzeug, das Ihren Alltag spürbar erleichtert.",
    body: `Eine [Automatisierung](/leistungen/ki-automatisierung) bewegt Daten von A nach B – sie folgt festen Regeln. KI geht einen Schritt weiter: Sie versteht Inhalte, trifft Einschätzungen und kann mit Situationen umgehen, die nicht vorhersehbar sind. Am stärksten wirken beide zusammen – eine [Automatisierung](/leistungen/ki-automatisierung) erfasst zum Beispiel eingehende Leads, und die KI bewertet sie direkt im Anschluss.

Welches KI-Modell zum Einsatz kommt, hängt vom Inhalt Ihrer Daten ab. Bei unkritischen Aufgaben nutze ich leistungsstarke Modelle wie die von OpenAI oder Anthropic. Sobald datenschutzrelevante Informationen im Spiel sind, setze ich auf EU-Lösungen wie Mistral oder auf Modelle, die vollständig in Ihrer eigenen Infrastruktur laufen – so bleiben sensible Daten dort, wo sie hingehören. Welcher Weg für Sie der richtige ist, klären wir gemeinsam, bevor etwas umgesetzt wird.

KI ist bei mir immer ein unterstützendes Werkzeug, kein Ersatz für menschliche Entscheidungen. Die KI liefert Einschätzungen, Zusammenfassungen und Vorschläge – die endgültige Entscheidung treffen immer Sie und Ihr Team. Gerade bei Bewertungen von Menschen, etwa im Bewerbungsprozess, ist das nicht nur sinnvoll, sondern auch rechtlich geboten.`,
    features: [
      {
        icon: "brain",
        heading: "Der Unterschied zur Automatisierung",
        body: "KI geht einen Schritt weiter: Sie versteht Inhalte, trifft Einschätzungen und kann mit Situationen umgehen, die nicht vorhersehbar sind.",
      },
      {
        icon: "workflow",
        heading: "Was KI für Sie übernehmen kann",
        body: "Sie übernimmt Aufgaben, die bisher viel Zeit und Konzentration gekostet haben: Texte verstehen, Dokumente auswerten, Anfragen einordnen, Inhalte erstellen.",
      },
      {
        icon: "cube",
        heading: "Datenschutz & Modellwahl",
        body: "Welches KI-Modell zum Einsatz kommt, hängt vom Inhalt Ihrer Daten ab. EU-Lösungen und On-Premise-Modelle sind immer eine Option.",
      },
      {
        icon: "chart",
        heading: "Die Kontrolle bleibt bei Ihnen",
        body: "KI ist bei mir immer ein unterstützendes Werkzeug, kein Ersatz für menschliche Entscheidungen. Die endgültige Entscheidung treffen immer Sie und Ihr Team.",
      },
    ],
    useCases: [
      "Chatbots & Assistenten: Intelligente Assistenten auf Ihrer Website, die Besucherfragen rund um die Uhr beantworten – im Gegensatz zu starren FAQ-Bots verstehen sie den Kontext, nicht nur Stichwörter.",
      "Dokumente & Texte auswerten: Lange Dokumente, Verträge oder E-Mails automatisch zusammenfassen und die wichtigsten Punkte herausziehen.",
      "Anfragen & Leads bewerten: Eingehende Anfragen automatisch einordnen lassen – mit einer kurzen Einschätzung, worum es geht und wie relevant sie ist, als Entscheidungshilfe für Ihr Team.",
      "Texte & Entwürfe generieren: Erste Entwürfe für wiederkehrende Texte erstellen lassen – als Grundlage, die Sie nur noch prüfen und freigeben.",
      "Daten aus unstrukturierten Quellen extrahieren: Informationen aus PDFs, E-Mails oder gescannten Dokumenten automatisch auslesen und strukturiert weiterverarbeiten.",
    ],
    ctaHeading: "Wo könnte KI Ihnen den Rücken freihalten?",
    ctaBody:
      "Ob Chatbot, Dokumentenauswertung oder die Bewertung eingehender Anfragen – in einem kostenlosen Erstgespräch schauen wir, wo KI in Ihrem Unternehmen echten Mehrwert bringt und welche Lösung datenschutztechnisch zu Ihnen passt. Besonders wirkungsvoll wird KI übrigens in Kombination mit einer [Automatisierung](/leistungen/ki-automatisierung).",
    relatedSlugs: ["ki-automatisierung", "individuelle-softwareloesungen"],
  },

  "api-anbindungen": {
    slug: "api-anbindungen",
    title: "API-Anbindungen & Schnittstellen",
    tagline: "Programme automatisch verbinden – per REST, GraphQL, Webhooks oder über Umwege bei alter Software.",
    metaTitle: "API-Anbindungen & Schnittstellen Lastrup | Systeme verbinden | NM-TECH IT",
    metaDescription:
      "Programme automatisch verbinden – per REST, GraphQL, Webhooks oder über Umwege bei alter Software. Schnittstellen-Entwicklung für Unternehmen in Lastrup, Cloppenburg und dem Emsland.",
    keywords: [
      "API-Anbindung Lastrup",
      "Schnittstellen Entwicklung Cloppenburg",
      "Systemintegration Emsland",
      "REST API Niedersachsen",
      "Webhook Integration",
      "GraphQL API",
      "Legacy Software anbinden",
      "CRM ERP verbinden",
      "Datenaustausch automatisieren",
      "NM-TECH IT",
    ],
    intro:
      "In den meisten Unternehmen arbeiten mehrere Programme nebeneinander her, ohne miteinander zu reden: das Shopsystem, die Buchhaltung, das CRM, die Lagerverwaltung. Die Folge sind doppelte Eingaben und Daten, die von Hand übertragen werden müssen. Eine API-Anbindung verbindet diese Systeme miteinander, sodass Daten automatisch und in Echtzeit zwischen ihnen fließen – ohne manuelles Zutun.",
    body: `Gerade ältere Branchensoftware bietet oft keine moderne API – viele Dienstleister winken dann ab. Ich nicht. In solchen Fällen finde ich alternative Wege: automatisierte Datei-Exporte und -Importe (zum Beispiel per CSV über SFTP), direkten Datenbankzugriff oder maßgeschneiderte Skripte, die Daten auslesen und übertragen. So lässt sich auch ein System anbinden, das eigentlich gar nicht dafür gedacht war.

API-Anbindungen sind oft die Grundlage für weitere Schritte. Erst wenn Ihre Systeme miteinander verbunden sind, lassen sich Abläufe sinnvoll [automatisieren](/leistungen/ki-automatisierung) oder Daten in einem [Dashboard](/leistungen/dashboards) zusammenführen. Eine saubere Schnittstelle ist damit eine Investition, die sich gleich mehrfach auszahlt.

Bei jeder Anbindung achte ich auf sichere Authentifizierung und eine zuverlässige Fehlerbehandlung. Tritt ein Problem auf, wird es erkannt und gemeldet, statt unbemerkt Daten zu verlieren – damit Sie sich auf den automatischen Datenfluss verlassen können.`,
    features: [
      {
        icon: "api",
        heading: "Programme miteinander koppeln",
        body: "Zum Beispiel Ihren Onlineshop mit der Buchhaltung, sodass Bestellungen automatisch als Rechnungen ankommen.",
      },
      {
        icon: "code",
        heading: "Daten aus Fremdsystemen abrufen",
        body: "Informationen aus anderen Diensten per REST- oder GraphQL-API automatisch holen und weiterverarbeiten.",
      },
      {
        icon: "cube",
        heading: "Eigene Schnittstellen entwickeln",
        body: "Wenn Sie eine maßgeschneiderte API für Ihre eigene Software oder Ihre Partner brauchen, entwickle ich sie.",
      },
      {
        icon: "workflow",
        heading: "Webhooks & Echtzeit-Übertragung",
        body: "Daten werden in dem Moment übertragen, in dem etwas passiert – kein ständiges Abfragen, sondern sofortige Reaktion.",
      },
      {
        icon: "brain",
        heading: "Alte Software anbinden",
        body: "Auch Branchensoftware ohne moderne Schnittstelle lässt sich integrieren.",
      },
    ],
    useCases: [
      "Programme miteinander koppeln: Zum Beispiel Ihren Onlineshop mit der Buchhaltung, sodass Bestellungen automatisch als Rechnungen ankommen.",
      "Daten aus Fremdsystemen abrufen: Informationen aus anderen Diensten per REST- oder GraphQL-API automatisch holen und weiterverarbeiten.",
      "Eigene Schnittstellen entwickeln: Wenn Sie eine maßgeschneiderte API für Ihre eigene Software oder Ihre Partner brauchen, entwickle ich sie.",
      "Webhooks & Echtzeit-Übertragung: Daten werden in dem Moment übertragen, in dem etwas passiert – kein ständiges Abfragen, sondern sofortige Reaktion.",
      "Alte Software anbinden: Auch Branchensoftware ohne moderne Schnittstelle lässt sich integrieren.",
    ],
    ctaHeading: "Welche Programme sollen bei Ihnen endlich zusammenarbeiten?",
    ctaBody:
      "Erzählen Sie mir in einem kostenlosen Erstgespräch, welche Systeme Sie nutzen und wo Daten aktuell von Hand übertragen werden. Ich prüfe, wie sich diese verbinden lassen – auch dann, wenn eine Software keine moderne Schnittstelle mitbringt.",
    relatedSlugs: ["ki-automatisierung", "individuelle-softwareloesungen"],
  },

  "individuelle-softwareloesungen": {
    slug: "individuelle-softwareloesungen",
    title: "Individuelle Softwarelösungen",
    tagline: "Maßgeschneiderte Software für Unternehmen: interne Tools, Kundenportale, branchenspezifische Lösungen und MVPs.",
    metaTitle: "Individuelle Softwareentwicklung Lastrup | Maßgeschneiderte Lösungen | NM-TECH IT",
    metaDescription:
      "Maßgeschneiderte Software für Unternehmen: interne Tools, Kundenportale, branchenspezifische Lösungen und MVPs. Individuell entwickelt für Lastrup, Cloppenburg und das Emsland.",
    keywords: [
      "Individuelle Software Lastrup",
      "Softwareentwicklung Cloppenburg",
      "Maßgeschneiderte Software Emsland",
      "Kundenportal entwickeln Niedersachsen",
      "internes Tool entwickeln lassen",
      "MVP Entwicklung",
      "Branchensoftware individuell",
      "Web-App entwickeln lassen",
      "individuelle Softwarelösung",
      "NM-TECH IT",
    ],
    intro:
      "Nicht jedes Problem lässt sich mit fertiger Software von der Stange lösen. Manchmal arbeitet ein Betrieb mit Excel-Tabellen und Zetteln, weil es für genau seinen Ablauf einfach kein passendes Programm gibt. Genau dann entwickle ich eine Lösung, die exakt zu Ihren Anforderungen passt – nicht umgekehrt, dass Sie Ihre Arbeitsweise an eine Software anpassen müssen.",
    body: `Individuelle Software entsteht Schritt für Schritt. Wir starten mit einer klaren Analyse Ihrer Anforderungen, definieren gemeinsam den Funktionsumfang und setzen ihn in überschaubaren Etappen um. Sie sehen den Fortschritt früh und können jederzeit nachjustieren – so entsteht am Ende genau das, was Sie wirklich brauchen, und keine teure Lösung an Ihrem Bedarf vorbei.

Individuelle Software steht selten für sich allein. Häufig fließen andere Leistungen mit ein – eine moderne Weboberfläche, automatisierte Abläufe im Hintergrund, KI-Funktionen oder die Anbindung an bestehende Systeme. Je nach Projekt kombinieren wir das, was Sie brauchen. Mehr zu den einzelnen Bausteinen finden Sie auf den Seiten [Webentwicklung](/leistungen/webentwicklung), [Prozess-Automatisierung](/leistungen/ki-automatisierung), [KI-Integration](/leistungen/ki-integrationen), [Dashboards](/leistungen/dashboards) und [API-Anbindungen](/leistungen/api-anbindungen).`,
    features: [
      {
        icon: "cube",
        heading: "Interne Tools",
        body: "Software für Verwaltung, Planung oder andere firmeninterne Abläufe – genau auf die Art zugeschnitten, wie Sie arbeiten.",
      },
      {
        icon: "code",
        heading: "Kundenportale & Login-Bereiche",
        body: "Geschützte Bereiche, in denen Ihre Kunden Dokumente einsehen, Daten abrufen oder mit Ihnen interagieren können.",
      },
      {
        icon: "api",
        heading: "Branchenspezifische Lösungen",
        body: "Software, die auf die Besonderheiten Ihres Gewerbes zugeschnitten ist – dort, wo Standardprogramme an ihre Grenzen stoßen.",
      },
      {
        icon: "workflow",
        heading: "MVPs & Prototypen",
        body: "Wenn Sie eine Geschäftsidee haben, entwickle ich eine erste funktionierende Version, mit der Sie schnell starten und testen können.",
      },
      {
        icon: "brain",
        heading: "Lösungen, die es nicht zu kaufen gibt",
        body: "Wenn Sie bisher keine Software gefunden haben, die Ihr Problem löst, ist das oft genau der richtige Moment für eine individuelle Entwicklung.",
      },
    ],
    useCases: [
      "Interne Tools: Software für Verwaltung, Planung oder andere firmeninterne Abläufe – genau auf die Art zugeschnitten, wie Sie arbeiten.",
      "Kundenportale & Login-Bereiche: Geschützte Bereiche, in denen Ihre Kunden Dokumente einsehen, Daten abrufen oder mit Ihnen interagieren können.",
      "Branchenspezifische Lösungen: Software, die auf die Besonderheiten Ihres Gewerbes zugeschnitten ist – dort, wo Standardprogramme an ihre Grenzen stoßen.",
      "MVPs & Prototypen: Wenn Sie eine Geschäftsidee haben, entwickle ich eine erste funktionierende Version, mit der Sie schnell starten und testen können.",
      "Lösungen, die es nicht zu kaufen gibt: Wenn Sie bisher keine Software gefunden haben, die Ihr Problem löst, ist das oft genau der richtige Moment für eine individuelle Entwicklung.",
    ],
    ctaHeading: "Sie haben eine Idee, aber keine passende Software dafür?",
    ctaBody:
      "Erzählen Sie mir in einem kostenlosen Erstgespräch, woran Ihr aktueller Ablauf hakt oder welche Idee Sie umsetzen möchten. Gemeinsam finden wir heraus, ob eine individuelle Lösung der richtige Weg ist – ehrlich, auch wenn manchmal eine einfachere Variante schon ausreicht.",
    relatedSlugs: ["webentwicklung", "api-anbindungen"],
  },
};

export const projects = [
  {
    title: "Dashboard mit KI-Auswertung",
    category: "KI / Dashboard",
    description:
      "Ein Dashboard, das Leads und Verkaufszahlen aus einem CRM in Echtzeit zusammenführt und per KI bewertet – inklusive Einschätzung zur Abschlusswahrscheinlichkeit und Hinweisen, welche Vorgänge Aufmerksamkeit brauchen.",
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accentColor: "border-indigo-500/30 text-indigo-300 bg-indigo-950/50",
    accent: "KI",
  },
  {
    title: "Automatisierte Datenverarbeitung",
    category: "Automation",
    description:
      "Ein Workflow, der große Mengen an Datensätzen automatisch einliest, filtert und in eine strukturierte Tabelle überträgt. Solche Abläufe ersetzen schnell mehrere Stunden manueller Arbeit pro Durchlauf.",
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accentColor: "border-emerald-500/30 text-emerald-300 bg-emerald-950/50",
    accent: "AUTOMATION",
  },
  {
    title: "Automatische Dokumentenerstellung",
    category: "KI / Automation",
    description:
      "Ein Workflow, der aus vorhandenen Daten automatisch fertige, mehrseitige PDF-Dokumente erzeugt – ohne manuelles Zusammenkopieren, jederzeit in gleichbleibender Qualität.",
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accentColor: "border-violet-500/30 text-violet-300 bg-violet-950/50",
    accent: "KI",
  },
  {
    title: "KI-gestützte Vorauswertung von Unterlagen",
    category: "KI",
    description:
      "Eine Lösung, die eingehende Dokumente wie Bewerbungen automatisch erfasst, aufbereitet und strukturiert zusammenfasst – als Entscheidungsgrundlage, während die endgültige Bewertung beim Menschen bleibt.",
    gradient: "from-zinc-800 via-zinc-900 to-black",
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
