type CaseStudyTextBlockProps = {
  id?: string;
  title: string;
  paragraphs: string[];
};

export default function CaseStudyTextBlock({
  id,
  title,
  paragraphs,
}: CaseStudyTextBlockProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-800 pt-12">
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
    </section>
  );
}
