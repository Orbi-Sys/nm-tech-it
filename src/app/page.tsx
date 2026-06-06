import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/providers/GsapProvider";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
// This is the main page of the website, which composes all the sections together.
export default function Home() {
  return (
    <GsapProvider>
      <LoadingScreen />
      <Navbar />
      <main className="snap-container overflow-x-hidden w-full relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <WhyUs />
        <FAQ />
        <Process />
        <Contact />
      </main>
      <Footer />
    </GsapProvider>
  );
}
