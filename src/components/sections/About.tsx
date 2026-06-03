"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const badges = [
  "Azure AZ-900 zertifiziert",
  "Deutsch – Muttersprache",
  "Englisch – Fließend",
  "Russisch – Fließend",
  "Standort: Lastrup, Niedersachsen",
] as const;

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 snap-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Über mich"
          title="Software Engineer & Digitalisierungspartner"
          description="Ich bin Nikita Aleschkin, Software Engineer & Digitalisierungspartner aus Lastrup, Niedersachsen. Ich helfe Unternehmen dabei, mit modernen Weblösungen, KI-Integrationen und intelligenten Automationen effizienter zu arbeiten – zuverlässig, maßgeschneidert und zukunftssicher."
        />

        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass border border-gold/20 rounded-3xl p-10 bg-gold/[0.02] shadow-[0_0_30px_rgba(212,166,111,0.08)]"
          >
            <p className="text-silver-dim leading-relaxed text-base md:text-lg">
              Als Software Engineer und Digitalisierungspartner verbinde ich technische Exzellenz mit pragmatischen,
              ergebnisorientierten Lösungen. Ich entwickle Webseiten, KI-getriebene
              Automationen und API-Integrationen, die Prozesse digitalisieren,
              Prozesse beschleunigen und echten Mehrwert liefern.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-3xl border border-gold/20 bg-bg-elevated/80 px-6 py-5 text-sm text-gold-bright"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
