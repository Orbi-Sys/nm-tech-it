import dynamic from "next/dynamic";
import { ClientLoadingScreen } from "@/components/layout/ClientLoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GsapProvider } from "@/components/providers/GsapProvider";
import { Hero } from "@/components/sections/Hero";
import { faqCategories } from "@/lib/data";

const About    = dynamic(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => ({ default: m.Services })));
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack })));
const WhyUs    = dynamic(() => import("@/components/sections/WhyUs").then((m) => ({ default: m.WhyUs })));
const FAQ      = dynamic(() => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })));
const Process  = dynamic(() => import("@/components/sections/Process").then((m) => ({ default: m.Process })));
const Contact  = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <GsapProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        <FAQ />
        <Process />
        <Contact />
      </main>
      <Footer />
    </GsapProvider>
  );
}
