"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Feature = {
  icon: string;
  heading: string;
  body: string;
};

export function LeistungFeatures({ features }: { features: Feature[] }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-elevated/40 to-bg-deep pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Was ich liefere"
          title="Leistungsumfang"
          description="Jedes Projekt ist anders – das sind die Bausteine, aus denen ich die passende Lösung für Sie zusammenstelle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <motion.article
                  whileHover={{ boxShadow: "0 0 40px rgba(212,166,111,0.12)" }}
                  className="group relative h-full flex flex-col p-8 rounded-2xl glass glow-ring overflow-hidden transition-all duration-500 hover:border-gold/25"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.05] rounded-full blur-2xl group-hover:bg-gold/[0.1] transition-all duration-500" />
                  <div className="mb-5 p-3 w-fit rounded-xl bg-gold/5 border border-gold/15 group-hover:border-gold/30 transition-colors">
                    <ServiceIcon name={feature.icon} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gold-bright mb-3">
                    {feature.heading}
                  </h3>
                  <p className="flex-1 text-silver-dim text-sm leading-relaxed">{feature.body}</p>
                  <span className="absolute bottom-5 right-6 text-[10px] text-gold/20 font-mono">
                    0{i + 1}
                  </span>
                </motion.article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
