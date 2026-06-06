"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Projects() {
  const gridRef = useGsapReveal<HTMLDivElement>({ y: 80, stagger: 0.15 });

  return (
    <section id="projects" className="relative py-28 md:py-36 snap-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Ausgewählte Projekte"
          description="Premium digitale Lösungen – von KI-Systemen bis zu vollautomatisierten Business-Plattformen."
        />

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={project.title} data-reveal>
              <motion.article
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br ${project.gradient} glow-ring cursor-default`}
              >
                <div className="aspect-auto min-h-[240px] sm:aspect-[16/10] relative p-6 sm:p-8 flex flex-col justify-between">
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full border border-gold/30 text-[10px] tracking-widest uppercase text-gold-dim bg-black/30 backdrop-blur-sm z-30">
                    {project.accent}
                  </div>

                  {/* Content Container */}
                  <div className="relative mt-auto z-10">
                    <span className="text-xs tracking-widest uppercase text-gold-dim mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-gold-bright group-hover:metallic-text transition-all duration-500 mb-3">
                      {project.title}
                    </h3>
                    
                    {/* Description - Shown on hover on desktop, always visible on mobile */}
                    <p className="text-silver-dim text-sm leading-relaxed lg:max-h-0 lg:group-hover:max-h-32 lg:opacity-0 lg:group-hover:opacity-100 max-h-32 opacity-100 transition-all duration-300 overflow-hidden">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gold/[0.05] blur-3xl group-hover:bg-gold/[0.1] transition-all duration-700" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
