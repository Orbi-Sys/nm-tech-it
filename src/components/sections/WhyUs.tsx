"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function WhyUs() {
  const gridRef = useGsapReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <section id="why" className="relative py-28 md:py-36 snap-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Vorteile"
          title="Warum NM-TECH IT"
          description="Premium Qualität, moderne Technologien und individuelle Betreuung – von Anfang bis Launch."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyUs.map((item, i) => (
            <div key={item.title} data-reveal>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-8 rounded-2xl border border-gold/10 bg-bg-card/50 hover:border-gold/25 hover:bg-bg-card transition-all duration-400"
              >
                <span className="inline-block mb-4 font-mono text-xs text-gold/30 group-hover:text-gold/50 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-gold-bright mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-silver-dim leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
