"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-neutral-200 rounded-2xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span>{item.q}</span>
            <span
              className={`ml-4 flex-shrink-0 transition-transform duration-200 text-brand-500 ${
                open === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-60" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
