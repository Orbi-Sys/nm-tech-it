"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Services() {
  const gridRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="services" className="relative py-28 md:py-36 snap-section">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-elevated/50 to-bg-deep pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="Digitale Exzellenz"
          description="Maßgeschneiderte Lösungen für moderne Unternehmen – von der Website bis zur KI-Automation."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <div key={service.title} data-reveal>
              <TiltCard>
                <motion.article
                  whileHover={{ boxShadow: "0 0 40px rgba(212,166,111,0.12)" }}
                  className="group relative h-full p-8 rounded-2xl glass glow-ring overflow-hidden transition-all duration-500 hover:border-gold/25"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.05] rounded-full blur-2xl group-hover:bg-gold/[0.1] transition-all duration-500" />
                  <div className="mb-6 p-3 w-fit rounded-xl bg-gold/5 border border-gold/15 group-hover:border-gold/30 transition-colors">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gold-bright mb-3">
                    {service.title}
                  </h3>
                  <p className="text-silver-dim text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="absolute bottom-6 right-6 text-[10px] text-gold/20 font-mono">
                    0{i + 1}
                  </span>
                </motion.article>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
