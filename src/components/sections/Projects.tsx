"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function Projects() {
  const gridRef = useGsapReveal<HTMLDivElement>({ y: 80, stagger: 0.15 });

  return (
    <section id="projects" className="relative py-28 md:py-36 snap-section">
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
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} glow-ring cursor-default`}
              >
                <div className="aspect-[16/10] relative p-8 flex flex-col justify-between">
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full border border-white/15 text-[10px] tracking-widest uppercase text-silver-dim bg-black/30 backdrop-blur-sm">
                    {project.accent}
                  </div>

                  <div className="relative mt-auto">
                    <span className="text-xs tracking-widest uppercase text-silver-dim mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-silver-bright mb-3 group-hover:metallic-text transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-silver-dim text-sm max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/[0.03] blur-3xl group-hover:bg-white/[0.06] transition-all duration-700" />

                  {/* Mockup preview */}
                  <div className="absolute top-8 left-8 right-8 h-32 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity duration-500">
                    <div className="flex gap-2 p-3 border-b border-white/5">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                      <div className="h-2 w-1/2 rounded bg-white/5" />
                      <div className="h-2 w-2/3 rounded bg-white/5" />
                    </div>
                  </div>
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
