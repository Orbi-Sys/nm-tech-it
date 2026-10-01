"use client";

import { useEffect, useRef } from "react";

type RevealOptions = {
  y?: number;
  stagger?: number;
  /** Seitlicher Versatz je Element, z. B. für abwechselnd links/rechts einfliegende Schritte. */
  x?: (index: number) => number;
  selector?: string;
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Blendet Kind-Elemente mit [data-reveal] (oder dem Element selbst) beim Scrollen ein.
 * Ersetzt GSAP ScrollTrigger durch IntersectionObserver und CSS-Transitions,
 * damit keine Animationsbibliothek den Seitenaufbau blockiert.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: RevealOptions) {
  const ref = useRef<T>(null);
  const y = options?.y ?? 60;
  const stagger = options?.stagger ?? 0.12;
  const x = options?.x;
  const selector = options?.selector ?? "[data-reveal]";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const found = el.querySelectorAll<HTMLElement>(selector);
    const targets = found.length > 0 ? Array.from(found) : [el];

    targets.forEach((t, i) => {
      t.style.opacity = "0";
      t.style.transform = `translate3d(${x ? x(i) : 0}px, ${y}px, 0)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const t = entry.target as HTMLElement;
          const i = targets.indexOf(t);
          t.style.transition = `opacity 0.9s ${EASE} ${i * stagger}s, transform 0.9s ${EASE} ${i * stagger}s`;
          t.style.opacity = "1";
          t.style.transform = "none";
          observer.unobserve(t);
        });
      },
      { rootMargin: "0px 0px -15% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [y, stagger, x, selector]);

  return ref;
}
