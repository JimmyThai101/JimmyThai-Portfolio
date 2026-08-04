import type { FlowStep } from "@/types/case-study";

type ArchitectureDiagramProps = {
  title: string;
  description?: string;
  steps: FlowStep[];
};

function FlowArrow() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        className="text-zinc-600"
      >
        <path
          d="M10 0v18m0 0-4-4m4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ArchitectureDiagram({
  title,
  description,
  steps,
}: ArchitectureDiagramProps) {
  return (
    <section id="architecture" className="scroll-mt-24 border-t border-zinc-800 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}

      <div className="mt-8 max-w-2xl">
        {steps.map((step, index) => (
          <div key={step.label}>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-5 py-4">
              <p className="text-sm font-medium text-zinc-100">{step.label}</p>
              {step.description ? (
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              ) : null}
            </div>
            {index < steps.length - 1 ? <FlowArrow /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
