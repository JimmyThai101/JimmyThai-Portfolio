import type { FlowStep } from "@/types/case-study";

type LogicFlowProps = {
  title: string;
  description?: string;
  steps: FlowStep[];
};

export default function LogicFlow({ title, description, steps }: LogicFlowProps) {
  return (
    <section id="logic-flow" className="scroll-mt-24 border-t border-zinc-800 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}

      <ol className="mt-8 grid gap-3 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Step {index + 1}
            </span>
            <p className="mt-2 text-sm font-medium text-zinc-100">{step.label}</p>
            {step.description ? (
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {step.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
