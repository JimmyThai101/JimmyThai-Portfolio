"use client";

import { useId, useState } from "react";
import type { CaseStudyDetail } from "@/types/case-study";
import ScrollReveal from "@/components/case-study/ScrollReveal";

type DetailsAccordionProps = {
  items: CaseStudyDetail[];
};

export default function DetailsAccordion({ items }: DetailsAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  if (items.length === 0) return null;

  return (
    <ScrollReveal>
      <section
        id="details"
        className="scroll-mt-28 border-t border-zinc-800 bg-zinc-950/40 px-0 py-14 sm:py-16"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Extra detail, if you want it
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Secondary notes and prompt samples stay collapsed so the main story
            stays fast to skim.
          </p>

          <ul className="mt-8 divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800">
            {items.map((item, index) => {
              const id = `${baseId}-${index}`;
              const open = openId === id;
              return (
                <li key={item.title} className="bg-zinc-950/70">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={id}
                    onClick={() => setOpenId(open ? null : id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-900/80"
                  >
                    <span className="text-sm font-medium text-zinc-100 sm:text-base">
                      {item.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-zinc-500 transition-transform duration-200"
                      style={{ transform: open ? "rotate(45deg)" : undefined }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={id}
                    hidden={!open}
                    className="border-t border-zinc-800 px-5 pb-5 pt-3"
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </ScrollReveal>
  );
}
