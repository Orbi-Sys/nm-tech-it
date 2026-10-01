import { LandingPage, landingMetadata } from "@/components/sections/landing/LandingPage";

export const metadata = landingMetadata("region");

export default function Page() {
  return <LandingPage pageKey="region" />;
}
