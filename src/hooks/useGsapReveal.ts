"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { y?: number; stagger?: number; start?: string }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll("[data-reveal]");
    const targets = children.length > 0 ? children : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: options?.y ?? 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: options?.stagger ?? 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options?.start ?? "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options?.y, options?.stagger, options?.start]);

  return ref;
}
