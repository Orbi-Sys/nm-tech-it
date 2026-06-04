import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – NM-TECH IT",
  description:
    "Datenschutzerklärung von NM-TECH IT. Informationen zur Verarbeitung personenbezogener Daten auf dieser Website mit Kontaktformular.",
  alternates: {
    canonical: "https://nm-tech-it.de/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-bg-deep text-silver antialiased">
      <Navbar />
      <main className="pt-24">
        <section className="relative py-28 md:py-36 snap-section">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <SectionHeading
              label="Datenschutz"
              title="Datenschutzerklärung"
              description="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website mit Kontaktformular."
            />

            <div className="glass rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] space-y-6 text-silver-dim leading-relaxed text-base md:text-lg">
              <p>
                Verantwortlicher:
                <br />
                Nikita Aleschkin
                <br />
                Heinrich-Böll-Str. 12
                <br />
                49688 Lastrup, Niedersachsen
                <br />
                E-Mail: <a href="mailto:kontakt@nm-tech-it.de" className="text-silver-bright hover:text-white">kontakt@nm-tech-it.de</a>
              </p>
              <p>
                Diese Website verarbeitet personenbezogene Daten, wenn Sie das Kontaktformular nutzen oder mit mir in Verbindung treten. Dabei werden nur die notwendigen Daten erhoben, um Ihre Anfrage beantworten zu können.
              </p>
              <p>
                Zu den verarbeiteten Daten gehören Name, E-Mail-Adresse und Ihre Nachricht. Die Daten werden nur zur Bearbeitung Ihrer Anfrage gespeichert und nicht an Dritte weitergegeben, es sei denn, dies ist zur Vertragserfüllung erforderlich.
              </p>
              <p>
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Daten zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich sind. Im Übrigen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zum Schutz berechtigter Interessen, insbesondere zur Abwehr von Missbrauch.
              </p>
              <p>
                Ihre Daten werden gelöscht, sobald sie für die Bearbeitung der Anfrage nicht mehr erforderlich sind. Sollten gesetzliche Aufbewahrungsfristen entgegenstehen, werden die Daten bis zum Ablauf dieser Fristen aufbewahrt.
              </p>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerruf Ihrer Einwilligung und Widerspruch gegen die Verarbeitung. Zur Ausübung dieser Rechte kontaktieren Sie mich bitte per E-Mail.
              </p>
              <p>
                Für Fragen zum Datenschutz können Sie sich jederzeit an mich wenden. Diese Datenschutzerklärung gilt ausschließlich für diese Website und nicht für verlinkte fremde Angebote.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

