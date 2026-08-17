"use client";

import { useEffect, useState } from "react";
import type { CaseStudyNavItem } from "@/types/case-study";

type StickyProgressProps = {
  items: CaseStudyNavItem[];
};

export default function StickyProgress({ items }: StickyProgressProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0];
        if (top?.target?.id) {
          setActiveId(top.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Case study progress"
      className="sticky top-16 z-30 -mx-6 mb-8 border-y border-zinc-800/80 bg-zinc-950/90 px-6 backdrop-blur-md sm:top-16"
    >
      <ol className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className={[
                  "inline-flex rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "bg-zinc-100 text-zinc-950"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100",
                ].join(" ")}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
