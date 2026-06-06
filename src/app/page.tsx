import { ClientLoadingScreen } from "@/components/layout/ClientLoadingScreen";
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
import { faqCategories } from "@/lib/data";

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
