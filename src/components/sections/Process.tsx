"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap, registerGsap } from "@/lib/gsap";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { 
            opacity: 0, 
            x: isMobile ? 0 : (i % 2 === 0 ? -40 : 40),
            y: isMobile ? 25 : 0
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative py-28 md:py-36 snap-section overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-elevated/40 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          label="Prozess"
          title="Von der Idee zum Launch"
          description="Ein strukturierter, transparenter Ablauf für maximale Qualität."
        />

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                data-step
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 flex md:justify-end md:pr-12">
                  <div
                    className={`${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}
                  >
                    <span className="text-4xl font-display font-bold text-white/10">
                      {step.step}
                    </span>
                    <h3 className="font-display text-2xl font-semibold metallic-text mt-2">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-[18px] md:top-[12px] w-4 h-4 rounded-full border-2 border-gold/50 bg-bg-deep z-10" />

                <div className="md:w-1/2 pl-16 md:pl-12">
                  <p className="text-silver-dim leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
