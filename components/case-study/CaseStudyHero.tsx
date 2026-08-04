import Link from "next/link";
import type { CaseStudyHero } from "@/types/case-study";

type CaseStudyHeroProps = {
  title: string;
  hero: CaseStudyHero;
};

export default function CaseStudyHero({ title, hero }: CaseStudyHeroProps) {
  return (
    <header className="pb-12">
      <Link
        href="/#projects"
        className="inline-flex items-center text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
      >
        &larr; Back to projects
      </Link>

      <p className="mt-8 text-sm font-medium uppercase tracking-wider text-zinc-500">
        Case Study
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h1>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Role
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-zinc-200">
            {hero.role}
          </dd>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
          <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Timeline
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-zinc-200">
            {hero.timeline}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Technologies
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {hero.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
        {hero.summary}
      </p>
    </header>
  );
}
