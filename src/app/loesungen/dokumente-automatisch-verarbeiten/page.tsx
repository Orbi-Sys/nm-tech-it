import { LandingPage, landingMetadata } from "@/components/sections/landing/LandingPage";

export const metadata = landingMetadata("dokumente");

export default function Page() {
  return <LandingPage pageKey="dokumente" />;
}
