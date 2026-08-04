import type { TechnologyItem } from "@/types/case-study";

type TechnologyStackProps = {
  title: string;
  description?: string;
  items: TechnologyItem[];
};

export default function TechnologyStack({
  title,
  description,
  items,
}: TechnologyStackProps) {
  return (
    <section
      id="technology-stack"
      className="scroll-mt-24 border-t border-zinc-800 pt-12"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}

      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5"
          >
            <h3 className="text-sm font-semibold text-zinc-100">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {item.reason}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
