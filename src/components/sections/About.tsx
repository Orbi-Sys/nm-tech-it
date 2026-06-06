"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const badges = [
  "Deutsch – Muttersprache",
  "Englisch – Fließend",
  "Russisch – Grundkenntnisse",
  "Standort: Lastrup, Niedersachsen",
] as const;

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 snap-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Über mich"
          title="Software Engineer & Digitalisierungspartner"
          description="Ich bin Nikita Aleschkin. Ich helfe Unternehmen dabei, mit modernen Weblösungen, KI-Integrationen und intelligenten Automationen effizienter zu arbeiten – zuverlässig, maßgeschneidert und zukunftssicher."
        />

        <div className="grid gap-10 lg:grid-cols-[auto_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] shrink-0">
              <div className="absolute -inset-3 rounded-full bg-gold/10 blur-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gold/25 shadow-[0_0_40px_rgba(212,166,111,0.12)]">
                <Image
                  src="/Nikita_Aleschkin.webp"
                  alt="Nikita Aleschkin – NM-TECH IT"
                  fill
                  sizes="(max-width: 768px) 220px, 280px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass border border-gold/20 rounded-3xl p-8 md:p-10 bg-gold/[0.02] shadow-[0_0_30px_rgba(212,166,111,0.08)]"
            >
              <p className="text-silver-dim leading-relaxed text-base md:text-lg">
                Als Entwickler verbinde ich technische Präzision mit pragmatischen,
                ergebnisorientierten Lösungen. Mein Fokus liegt auf Webanwendungen, KI-getriebenen
                Automationen und API-Integrationen, die Arbeitsabläufe digitalisieren,
                beschleunigen und echten Mehrwert liefern.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="rounded-2xl border border-gold/20 bg-bg-elevated/80 px-5 py-4 text-sm text-gold-bright"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
