"use client";
import dynamic from "next/dynamic";

const LoadingScreen = dynamic(
  () => import("@/components/layout/LoadingScreen").then((m) => ({ default: m.LoadingScreen })),
  { ssr: false }
);

export function ClientLoadingScreen() {
  return <LoadingScreen />;
}
