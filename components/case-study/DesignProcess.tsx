import type { FlowStep } from "@/types/case-study";

type DesignProcessProps = {
  title: string;
  description?: string;
  steps: FlowStep[];
};

export default function DesignProcess({
  title,
  description,
  steps,
}: DesignProcessProps) {
  return (
    <section
      id="design-process"
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

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <p className="text-sm font-medium text-zinc-100">{step.label}</p>
              {step.description ? (
                <p className="mt-1 max-w-[12rem] text-xs leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              ) : null}
            </div>
            {index < steps.length - 1 ? (
              <span className="text-zinc-600" aria-hidden="true">
                &rarr;
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
