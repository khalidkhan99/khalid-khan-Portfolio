"use client";

import { useState } from "react";
import { faqs } from "@/app/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
              isOpen ? "border-accent/60" : "border-border"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-medium text-heading">{faq.q}</span>
              <span
                aria-hidden="true"
                className={`inline-flex size-6 shrink-0 items-center justify-center rounded-md border font-mono text-sm text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-45 border-accent/60" : "border-border"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-body">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
