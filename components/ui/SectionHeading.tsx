type SectionHeadingProps = {
  id?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  id,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
