import type { FlowStep } from "@/types/case-study";

type MethodologyProps = {
  title: string;
  description?: string;
  steps: FlowStep[];
};

export default function Methodology({
  title,
  description,
  steps,
}: MethodologyProps) {
  return (
    <section id="methodology" className="scroll-mt-24 border-t border-zinc-800 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}

      <ol className="mt-8 space-y-3">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-950/60 p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs font-medium text-zinc-300">
              {index + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-zinc-100">{step.label}</p>
              {step.description ? (
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
