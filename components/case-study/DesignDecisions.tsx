import type { DesignDecision } from "@/types/case-study";

type DesignDecisionsProps = {
  title: string;
  items: DesignDecision[];
};

export default function DesignDecisions({ title, items }: DesignDecisionsProps) {
  return (
    <section
      id="design-decisions"
      className="scroll-mt-24 border-t border-zinc-800 pt-12"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>

      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li
            key={item.decision}
            className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6"
          >
            <h3 className="text-base font-semibold text-zinc-100">
              {item.decision}
            </h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Reason
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {item.reason}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Tradeoffs
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {item.tradeoffs}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Benefits
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {item.benefits}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}
