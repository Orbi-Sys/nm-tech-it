import type { LeistungSlug } from "@/lib/data";

export type LandingPageData = {
  path: string;
  navLabel: string;
  label: string;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  icon: string;
  intro: string;
  features: { icon: string; heading: string; body: string }[];
  body: string;
  useCases: string[];
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  ctaBody: string;
  relatedSlugs: LeistungSlug[];
};

export const landingPages = {
  region: {
    path: "/softwareentwicklung-oldenburger-muensterland",
    navLabel: "Oldenburger Münsterland & Emsland",
    label: "Region",
    title: "Softwareentwicklung & KI-Automatisierung im Oldenburger Münsterland",
    tagline:
      "Individuelle Software, KI-Lösungen und automatisierte Abläufe für Unternehmen zwischen Cloppenburg, Vechta, dem Emsland und Oldenburg – mit persönlichem Ansprechpartner aus Lastrup.",
    metaTitle:
      "Softwareentwicklung & KI-Automatisierung Oldenburger Münsterland & Emsland | NM-TECH IT",
    metaDescription:
      "Individuelle Software, KI-Integration und Prozessautomatisierung für Unternehmen in Cloppenburg, Vechta, Löningen, Friesoythe, Meppen, Lingen und Oldenburg. Persönlich vor Ort aus Lastrup, kostenloses Erstgespräch.",
    keywords: [
      "Softwareentwicklung Oldenburger Münsterland",
      "Softwareentwickler Cloppenburg",
      "KI-Automatisierung Vechta",
      "Prozessautomatisierung Emsland",
      "Individuelle Software Meppen",
      "KI Beratung Oldenburg",
      "IT-Dienstleister Löningen",
      "Digitalisierung Mittelstand Niedersachsen",
    ],
    icon: "cube",
    intro:
      "Viele Betriebe in der Region wachsen seit Jahren – die Verwaltung wächst mit. Angebote, Aufträge, Rechnungen und Listen laufen oft noch über Excel, E-Mail und Abtippen. Ich entwickle Software und Automatisierungen, die genau diese Arbeit übernehmen, und sitze dabei nicht in einer fernen Großstadt, sondern in Lastrup, mitten im Landkreis Cloppenburg.",
    features: [
      {
        icon: "cube",
        heading: "Individuelle Software",
        body: "Interne Tools, Kundenportale und Web-Apps, die zu Ihren Abläufen passen – statt Ihre Abläufe an Standardsoftware anzupassen.",
      },
      {
        icon: "brain",
        heading: "KI im Arbeitsalltag",
        body: "E-Mails vorsortieren, Dokumente auslesen, Wissen durchsuchbar machen – DSGVO-konform und mit Modellen aus der EU, wo es darauf ankommt.",
      },
      {
        icon: "workflow",
        heading: "Automatisierte Abläufe",
        body: "Wiederkehrende Aufgaben laufen im Hintergrund, mit n8n, Make, Power Automate oder eigenen Scripts.",
      },
      {
        icon: "api",
        heading: "Alte Software anbinden",
        body: "Auch Branchensoftware ohne moderne Schnittstelle lässt sich meist über Exporte, Datenbanken oder Skripte einbinden.",
      },
    ],
    body: `Das Oldenburger Münsterland ist von mittelständischen Betrieben geprägt: Agrar- und Lebensmittelwirtschaft rund um Cloppenburg, Vechta und Lohne, Kunststoff- und Maschinenbau in Damme und Dinklage, Handwerk und Logistik in Löningen, Friesoythe, Garrel und Essen (Oldb). Was diese Betriebe verbindet: viel Verwaltung, wenig Zeit und selten eine eigene Softwareabteilung. Genau hier setze ich an.

Der Weg ist immer gleich unkompliziert. Im kostenlosen Erstgespräch schauen wir uns an, wo bei Ihnen die meiste Zeit verloren geht. Danach bekommen Sie einen klaren Vorschlag mit Festpreis. Oft ist der erste Schritt klein: eine [Automatisierung](/leistungen/ki-automatisierung), die ein paar Stunden pro Woche spart, oder eine [Schnittstelle](/leistungen/api-anbindungen) zwischen zwei Programmen, die bisher nicht miteinander reden.

Für Unternehmen im Landkreis Cloppenburg und im Landkreis Vechta komme ich gern persönlich vorbei. Auch das Emsland mit Meppen, Haselünne und Lingen sowie Oldenburg, Quakenbrück und Osnabrück sind gut erreichbar. Alles Weitere läuft bequem per Video-Call, sodass ich Unternehmen in ganz Deutschland genauso betreuen kann.`,
    useCases: [
      "Angebote und Auftragsbestätigungen automatisch aus Vorlagen erstellen",
      "Eingangsrechnungen und Lieferscheine per KI auslesen und weiterleiten",
      "Kundenportal mit Login für Aufträge, Dokumente und Status",
      "Dashboard mit Kennzahlen aus ERP, CRM und Excel",
      "Branchensoftware mit Buchhaltung oder Onlineshop verbinden",
    ],
    faqs: [
      {
        question: "Kommen Sie für ein Erstgespräch auch zu uns in den Betrieb?",
        answer:
          "Ja. Im Landkreis Cloppenburg, im Landkreis Vechta und im angrenzenden Emsland komme ich gern persönlich vorbei. Für weiter entfernte Unternehmen ist ein Video-Call meist genauso effektiv.",
      },
      {
        question: "Arbeiten Sie nur mit Unternehmen aus der Region?",
        answer:
          "Nein. Der Schwerpunkt liegt auf dem Oldenburger Münsterland und dem Emsland, weil ich hier vor Ort sein kann. Projekte in ganz Deutschland setze ich remote genauso um.",
      },
      {
        question: "Wie groß muss ein Unternehmen sein, damit sich Automatisierung lohnt?",
        answer:
          "Es kommt nicht auf die Größe an, sondern darauf, wie oft sich eine Aufgabe wiederholt. Schon ein Ablauf, der jede Woche eine Stunde kostet, kann sich in wenigen Monaten bezahlt machen.",
      },
    ],
    ctaHeading: "Kurzer Weg, persönlicher Ansprechpartner.",
    ctaBody:
      "Erzählen Sie mir im kostenlosen Erstgespräch, wo in Ihrem Betrieb die meiste Zeit verloren geht. Vor Ort in der Region oder per Video-Call – Sie entscheiden.",
    relatedSlugs: ["individuelle-softwareloesungen", "ki-automatisierung", "ki-integrationen"],
  },

  lohnunternehmen: {
    path: "/branchen/lohnunternehmen-landwirtschaft",
    navLabel: "Lohnunternehmen & Landwirtschaft",
    label: "Branche",
    title: "Digitalisierung für Lohnunternehmen & Agrarbetriebe",
    tagline:
      "Aufträge, Maschinenstunden und Abrechnung ohne Zettelwirtschaft – mit Automatisierungen und KI, die zu Ihrem Betrieb passen.",
    metaTitle: "Software & Automatisierung für Lohnunternehmen und Landwirtschaft | NM-TECH IT",
    metaDescription:
      "Weniger Büroarbeit für Lohnunternehmen und Agrarbetriebe: Aufträge per KI erfassen, Maschinenstunden automatisch abrechnen, Agrarsoftware anbinden. Aus Lastrup für das Oldenburger Münsterland und Emsland.",
    keywords: [
      "Software Lohnunternehmen",
      "Digitalisierung Lohnunternehmen",
      "Automatisierung Landwirtschaft",
      "Auftragserfassung Lohnunternehmen",
      "Maschinenstunden abrechnen Software",
      "KI Landwirtschaft Büro",
      "Agrarsoftware Schnittstelle",
      "Lohnunternehmen Cloppenburg Vechta",
    ],
    icon: "workflow",
    intro:
      "In der Saison zählt jede Stunde auf dem Feld, doch das Büro läuft trotzdem weiter: Aufträge kommen per Telefon, WhatsApp und Zuruf, Maschinenstunden stehen auf Zetteln, die Abrechnung wartet bis zum Winter. Ich helfe Lohnunternehmen und landwirtschaftlichen Betrieben, diese Büroarbeit zu automatisieren – ohne dass jemand eine neue Software lernen muss, die nicht zum Betrieb passt.",
    features: [
      {
        icon: "brain",
        heading: "Aufträge automatisch erfassen",
        body: "Anfragen per E-Mail oder Messenger werden von einer KI in strukturierte Aufträge mit Kunde, Fläche und Leistung übersetzt – Sie prüfen nur noch.",
      },
      {
        icon: "chart",
        heading: "Stunden & Einsätze im Blick",
        body: "Maschinen- und Fahrerstunden werden digital erfasst und laufen direkt in eine Übersicht, statt am Saisonende von Zetteln abgetippt zu werden.",
      },
      {
        icon: "workflow",
        heading: "Schneller abrechnen",
        body: "Aus erfassten Einsätzen entstehen automatisch Rechnungsentwürfe. Das verkürzt die Zeit bis zum Geldeingang deutlich.",
      },
      {
        icon: "api",
        heading: "Vorhandene Programme verbinden",
        body: "Agrar- und Buchhaltungssoftware, Excel-Listen und Kalender werden verknüpft, damit Daten nur einmal eingegeben werden.",
      },
    ],
    body: `Lohnunternehmen haben ein besonderes Problem: Die meiste Arbeit fällt in wenigen Wochen an, und genau dann ist keine Zeit fürs Büro. Was in der Saison liegen bleibt, kostet im Winter Tage an Nacharbeit – und im schlimmsten Fall vergessene Positionen auf der Rechnung. Eine gute Digitalisierung setzt deshalb nicht bei einer großen neuen Software an, sondern bei den Stellen, an denen heute Informationen verloren gehen.

Typisch ist ein Ablauf in drei Schritten. Zuerst werden Aufträge an einer Stelle gesammelt, egal ob sie per Telefon, E-Mail oder Messenger kommen. Dann werden die Einsätze auf dem Hof oder direkt auf dem Feld per Smartphone erfasst. Zum Schluss entsteht daraus automatisch der Rechnungsentwurf. Mit [Automatisierungen](/leistungen/ki-automatisierung) und [KI](/leistungen/ki-integrationen) lässt sich jeder dieser Schritte einzeln einführen, sodass der Betrieb nie auf einen Schlag umstellen muss.

Viele Betriebe nutzen bereits Agrar- oder Buchhaltungssoftware. Die bleibt, wo sie gut funktioniert. Ich baue die [Verbindungen](/leistungen/api-anbindungen) drumherum, damit Daten nicht mehrfach eingetippt werden. Ob Lohnunternehmen, Ackerbau- oder Tierhaltungsbetrieb, Biogasanlage oder Agrarhandel: Wir starten mit dem Ablauf, der Sie heute am meisten Zeit kostet.`,
    useCases: [
      "WhatsApp- und E-Mail-Aufträge automatisch in eine Auftragsliste übertragen",
      "Maschinen- und Fahrerstunden per Smartphone erfassen",
      "Rechnungsentwürfe aus erfassten Einsätzen erzeugen",
      "Saison-Dashboard mit Auslastung, Flächen und offenen Posten",
      "Dokumente wie Lieferscheine und Wiegescheine per KI auslesen",
    ],
    faqs: [
      {
        question: "Müssen meine Fahrer dafür eine komplizierte App lernen?",
        answer:
          "Nein. Die Erfassung wird so einfach wie möglich gehalten, oft reicht ein kurzes Formular auf dem Smartphone oder sogar eine Nachricht, die automatisch ausgewertet wird.",
      },
      {
        question: "Kann meine bestehende Agrarsoftware weiter genutzt werden?",
        answer:
          "In den meisten Fällen ja. Ich verbinde die vorhandenen Programme miteinander, statt sie zu ersetzen. Auch ohne offizielle Schnittstelle gibt es oft Wege über Exporte oder Datenbanken.",
      },
      {
        question: "Wann ist der beste Zeitpunkt für die Umstellung?",
        answer:
          "Außerhalb der Saison. Im Herbst und Winter lässt sich ein neuer Ablauf in Ruhe einführen und testen, damit er zur nächsten Saison zuverlässig läuft.",
      },
    ],
    ctaHeading: "Die nächste Saison mit weniger Büroarbeit.",
    ctaBody:
      "Im kostenlosen Erstgespräch schauen wir gemeinsam, wo in Ihrem Betrieb Zeit und Geld verloren gehen, und welcher erste Schritt sich am schnellsten lohnt. Gern auch direkt bei Ihnen auf dem Hof.",
    relatedSlugs: ["ki-automatisierung", "api-anbindungen", "dashboards"],
  },

  dokumente: {
    path: "/loesungen/dokumente-automatisch-verarbeiten",
    navLabel: "Rechnungen & Dokumente automatisieren",
    label: "Lösung",
    title: "Rechnungen & Dokumente mit KI automatisch verarbeiten",
    tagline:
      "Eingangsrechnungen, Lieferscheine und Auftragsbestätigungen werden automatisch ausgelesen, geprüft und weitergeleitet – statt abgetippt.",
    metaTitle: "Rechnungen & Dokumente mit KI automatisch verarbeiten | NM-TECH IT",
    metaDescription:
      "Eingangsrechnungen, Lieferscheine und Formulare automatisch per KI auslesen, prüfen und an Buchhaltung oder ERP übergeben. DSGVO-konform, individuell eingerichtet, für den Mittelstand.",
    keywords: [
      "Rechnungen automatisch verarbeiten",
      "Eingangsrechnungen KI",
      "Dokumentenverarbeitung automatisieren",
      "Belege automatisch auslesen",
      "Lieferscheine digitalisieren",
      "KI Dokumentenanalyse DSGVO",
      "Rechnungseingang automatisieren Mittelstand",
    ],
    icon: "brain",
    intro:
      "In fast jedem Unternehmen kommen jeden Tag Dokumente an: Rechnungen per E-Mail, Lieferscheine auf Papier, Auftragsbestätigungen als PDF. Jemand öffnet sie, liest die wichtigen Angaben heraus und tippt sie in ein anderes Programm. Genau diesen Schritt übernimmt eine KI – zuverlässig, nachvollziehbar und mit einer Prüfung durch den Menschen, wo es darauf ankommt.",
    features: [
      {
        icon: "brain",
        heading: "Automatisch auslesen",
        body: "Lieferant, Rechnungsnummer, Beträge, Positionen und Fälligkeiten werden aus PDFs, Scans und Fotos erkannt – auch bei wechselnden Layouts.",
      },
      {
        icon: "code",
        heading: "Automatisch prüfen",
        body: "Beträge werden gegen Bestellungen oder Lieferscheine abgeglichen. Abweichungen landen gezielt bei der richtigen Person.",
      },
      {
        icon: "api",
        heading: "Direkt weitergeben",
        body: "Die Daten gehen an Buchhaltung, DATEV-Export, ERP oder eine Tabelle – dorthin, wo Sie sie heute auch brauchen.",
      },
      {
        icon: "workflow",
        heading: "Sauber ablegen",
        body: "Jedes Dokument wird einheitlich benannt und im richtigen Ordner archiviert, damit es später schnell wiedergefunden wird.",
      },
    ],
    body: `Früher brauchte man für so etwas starre Vorlagen für jeden einzelnen Lieferanten. Moderne KI-Modelle verstehen Dokumente dagegen ähnlich wie ein Mensch: Sie erkennen eine Rechnungsnummer auch dann, wenn sie an einer ungewohnten Stelle steht. Dadurch funktioniert die Verarbeitung auch bei vielen verschiedenen Absendern, ohne dass für jeden eine eigene Regel gebaut werden muss.

Wichtig ist mir, dass die Kontrolle beim Menschen bleibt. Ist sich die KI bei einem Wert unsicher oder passt ein Betrag nicht zur Bestellung, wird das Dokument zur Prüfung markiert statt einfach durchgewunken. Alle anderen laufen automatisch durch. So sparen Sie Zeit, ohne die Sorgfalt aufzugeben. Umgesetzt wird das als [Automatisierung](/leistungen/ki-automatisierung) mit Werkzeugen wie n8n oder als Teil einer [individuellen Softwarelösung](/leistungen/individuelle-softwareloesungen).

Beim Datenschutz setze ich auf KI-Modelle mit Verarbeitung in der EU oder auf selbst betriebene Modelle, wenn die Dokumente besonders sensibel sind. Welche Variante passt, besprechen wir anhand Ihrer Dokumente und Anforderungen. Das gleiche Prinzip funktioniert übrigens nicht nur für Rechnungen, sondern auch für Bewerbungen, Formulare, Verträge oder Prüfberichte.`,
    useCases: [
      "Eingangsrechnungen aus dem E-Mail-Postfach automatisch erfassen",
      "Lieferscheine mit Bestellungen abgleichen",
      "Auftragsbestätigungen prüfen und Abweichungen melden",
      "Belege für den Steuerberater vorsortieren",
      "Bewerbungen und Formulare strukturiert zusammenfassen",
    ],
    faqs: [
      {
        question: "Wie zuverlässig liest eine KI Rechnungen aus?",
        answer:
          "Bei gut lesbaren Dokumenten sehr zuverlässig. Entscheidend ist, dass unsichere Werte erkannt und zur Prüfung vorgelegt werden. So landen Fehler nicht unbemerkt in der Buchhaltung.",
      },
      {
        question: "Ist das DSGVO-konform?",
        answer:
          "Ja, wenn es richtig aufgesetzt ist. Ich nutze KI-Modelle mit Verarbeitung in der EU oder selbst betriebene Modelle und schließe die nötigen Verträge zur Auftragsverarbeitung ab.",
      },
      {
        question: "Funktioniert das auch mit Papierdokumenten?",
        answer:
          "Ja. Papier wird gescannt oder mit dem Smartphone fotografiert, danach läuft die Verarbeitung genauso wie bei PDFs aus dem E-Mail-Postfach.",
      },
    ],
    ctaHeading: "Nie wieder Rechnungen abtippen.",
    ctaBody:
      "Schicken Sie mir im Erstgespräch ein paar typische Dokumente aus Ihrem Alltag. Ich zeige Ihnen, welche Angaben sich automatisch auslesen lassen und was das für Ihren Aufwand bedeutet.",
    relatedSlugs: ["ki-integrationen", "ki-automatisierung", "api-anbindungen"],
  },
} satisfies Record<string, LandingPageData>;

export type LandingPageKey = keyof typeof landingPages;
