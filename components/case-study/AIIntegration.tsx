import type { AIIntegrationSection } from "@/types/case-study";

type AIIntegrationProps = AIIntegrationSection;

export default function AIIntegration({
  title,
  paragraphs,
  prompts,
}: AIIntegrationProps) {
  return (
    <section id="ai-integration" className="scroll-mt-24 border-t border-zinc-800 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 max-w-3xl space-y-4">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="text-base leading-relaxed text-zinc-400"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {prompts && prompts.length > 0 ? (
        <div className="mt-8 max-w-3xl space-y-4">
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">
            Example prompts
          </h3>
          <ul className="space-y-4">
            {prompts.map((item) => (
              <li
                key={item.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-5"
              >
                <p className="text-sm font-medium text-zinc-200">{item.label}</p>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed text-zinc-400">
                  {item.prompt}
                </pre>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
