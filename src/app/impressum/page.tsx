import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-bg-deep text-silver antialiased">
      <Navbar />
      <main className="pt-24">
        <section className="relative py-28 md:py-36 snap-section">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <SectionHeading
              label="Impressum"
              title="Nikita Aleschkin"
              description="Verantwortlich für den Inhalt und die Webentwicklung von NM-TECH IT."
            />

            <div className="glass rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="space-y-6 text-silver-dim leading-relaxed text-base md:text-lg">
                <p>Nikita Aleschkin</p>
                <p>Heinrich-Böll-Str. 12</p>
                <p>49757 Lastrup, Niedersachsen</p>
                <p>Tel: <a href="tel:+4915234801274" className="text-silver-bright hover:text-white transition-colors">+49 1523 4801274</a></p>
                <p>E-Mail: <a href="mailto:kontakt@nm-tech-it.de" className="text-silver-bright hover:text-white transition-colors">kontakt@nm-tech-it.de</a></p>
                <p>Steuernummer: wird nach Zuteilung durch das Finanzamt ergänzt</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
