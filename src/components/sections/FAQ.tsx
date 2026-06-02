"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqCategories } from "@/lib/data";

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setOpenIndex(0); // Open the first question of the new category by default
  };

  return (
    <section id="faq" className="relative py-28 md:py-36 snap-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Häufig gestellte Fragen"
          description="Antworten zu Leistungen, KI, Automationen und Webentwicklung. Einfach erweiterbar und strukturiert aufgebaut."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Mobile Category Tabs (Horizontal Scroll) */}
          <div className="flex lg:hidden overflow-x-auto pb-3 mb-4 gap-3 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {faqCategories.map((category, idx) => {
              const isActive = activeCategory === idx;
              return (
                <button
                  key={category.category}
                  onClick={() => handleCategoryChange(idx)}
                  className="relative flex-none snap-start px-5 py-3 rounded-xl cursor-pointer focus:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTabMobile"
                      className="absolute inset-0 border border-white/10 bg-white/[0.05] rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "text-white" : "text-silver-dim hover:text-silver"
                    }`}
                  >
                    {category.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop Category Tabs Sidebar (Left) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 p-2 rounded-3xl border border-white/5 bg-white/[0.01]">
            {faqCategories.map((category, idx) => {
              const isActive = activeCategory === idx;
              return (
                <button
                  key={category.category}
                  onClick={() => handleCategoryChange(idx)}
                  className="relative flex items-center justify-between w-full px-6 py-4 text-left transition-all duration-300 rounded-2xl group cursor-pointer focus:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 border border-white/15 bg-white/[0.05] rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.02)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute left-0 top-3.5 bottom-3.5 w-1 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span
                    className={`relative z-10 font-display text-sm md:text-base font-semibold tracking-wide transition-colors duration-300 ${
                      isActive ? "text-white" : "text-silver-dim group-hover:text-silver"
                    }`}
                  >
                    {category.category}
                  </span>

                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? "text-white translate-x-1"
                        : "text-silver-dim/40 group-hover:text-silver translate-x-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion List (Right) */}
          <div className="lg:col-span-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-4"
              >
                {faqCategories[activeCategory].faqs.map((faq, faqIndex) => {
                  const isOpen = openIndex === faqIndex;
                  return (
                    <div
                      key={faqIndex}
                      className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                        isOpen
                          ? "border-white/20 bg-white/[0.05] shadow-[0_0_35px_rgba(255,255,255,0.03)]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.03]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : faqIndex)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white transition-colors duration-200 cursor-pointer focus:outline-none"
                      >
                        <span className="font-semibold text-sm md:text-base pr-4">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors flex-shrink-0 ${
                            isOpen
                              ? "border-white/25 bg-white/10 text-white"
                              : "border-white/10 bg-white/5 text-silver-dim"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </motion.div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm md:text-base leading-relaxed text-silver-dim border-t border-white/5 pt-4 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 md:mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
              Haben Sie noch Fragen?
            </h3>
            <p className="text-silver-dim text-sm md:text-base leading-relaxed">
              Sollte Ihre Frage hier nicht beantwortet worden sein oder Sie möchten Ihr Projekt
              direkt besprechen, zögern Sie nicht, mich zu kontaktieren. Ich melde mich
              schnellstmöglich bei Ihnen.
            </p>
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] cursor-pointer"
              >
                <span>Kontakt aufnehmen</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
