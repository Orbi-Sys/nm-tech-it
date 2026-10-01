"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("@/lib/motionFeatures").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
