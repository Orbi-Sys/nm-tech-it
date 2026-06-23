"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FAQItem = {
  readonly question: string;
  readonly answer: string;
};

export function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
              isOpen
                ? "border-white/20 bg-white/[0.05] shadow-[0_0_35px_rgba(255,255,255,0.03)]"
                : "border-white/10 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.03]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              <span className="font-semibold text-sm md:text-base pr-4">{faq.question}</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
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
    </div>
  );
}
