import dynamic from "next/dynamic";
import { ClientLoadingScreen } from "@/components/layout/ClientLoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/providers/GsapProvider";
import { Hero } from "@/components/sections/Hero";

const About    = dynamic(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => ({ default: m.Services })));
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack })));
const WhyUs    = dynamic(() => import("@/components/sections/WhyUs").then((m) => ({ default: m.WhyUs })));
const FAQ      = dynamic(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Process  = dynamic(() => import("@/components/sections/Process").then((m) => ({ default: m.Process })));
const Contact  = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));

export default function Home() {
  return (
    <GsapProvider>
      <div
        id="nm-veil"
        className="fixed inset-0 z-[99] bg-bg-deep pointer-events-none"
        style={{ transition: "opacity 0.5s ease" }}
        aria-hidden="true"
      />
      <ClientLoadingScreen />
      <Navbar />
      <main className="snap-container overflow-x-hidden w-full relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <WhyUs />
        <FAQ preview={true} />
        <Process />
        <Contact />
      </main>
      <Footer />
    </GsapProvider>
  );
}
