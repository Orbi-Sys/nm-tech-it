"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/hooks/useReveal";

const stepOffset = (i: number) =>
  typeof window !== "undefined" && window.innerWidth >= 768 ? (i % 2 === 0 ? -40 : 40) : 0;

export function Process() {
  const sectionRef = useReveal<HTMLElement>({
    selector: "[data-step]",
    stagger: 0,
    y: 25,
    x: stepOffset,
  });
  const lineRef = useRef<HTMLDivElement>(null);

  // Verbindungslinie wächst mit dem Scrollfortschritt durch den Abschnitt.
  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Wie bei ScrollTrigger: Start bei "top 60%", Ende bei "bottom 40%".
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.6 - rect.top) / (rect.height + vh * 0.2);
      line.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [sectionRef]);

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
