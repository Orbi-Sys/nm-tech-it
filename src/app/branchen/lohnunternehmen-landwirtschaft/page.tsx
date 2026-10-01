import { LandingPage, landingMetadata } from "@/components/sections/landing/LandingPage";

export const metadata = landingMetadata("lohnunternehmen");

export default function Page() {
  return <LandingPage pageKey="lohnunternehmen" />;
}
