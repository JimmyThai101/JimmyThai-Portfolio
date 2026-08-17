import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/case-study/ScrollReveal";
import StickyProgress from "@/components/case-study/StickyProgress";
import DetailsAccordion from "@/components/case-study/DetailsAccordion";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
};

function SectionShell({
  id,
  tone = "default",
  children,
}: {
  id: string;
  tone?: "default" | "muted" | "accent" | "quote";
  children: ReactNode;
}) {
  const tones = {
    default: "bg-transparent",
    muted: "bg-zinc-950/50 border-y border-zinc-800/80",
    accent: "bg-[radial-gradient(ellipse_at_top,_rgba(96,165,250,0.08),_transparent_55%)] border-y border-zinc-800/80",
    quote: "bg-zinc-900/40 border-y border-zinc-800",
  };

  return (
    <section id={id} className={`scroll-mt-28 ${tones[tone]}`}>
      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">{children}</div>
    </section>
  );
}

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const {
    title,
    hero,
    heroImage,
    metrics,
    problemSolution,
    process,
    quote,
    shots,
    decisions,
    contribution,
    lessons,
    details,
    cta,
    nav,
  } = caseStudy;

  return (
    <article>
      <div className="mx-auto max-w-5xl px-6 pt-12 sm:pt-16">
        <Link
          href="/#projects"
          className="inline-flex items-center rounded-sm text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          &larr; Back to projects
        </Link>

        <StickyProgress items={nav} />

        <header id="hook" className="scroll-mt-28 pb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
            Case Study
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-medium leading-snug text-zinc-100 sm:text-3xl">
            {hero.statement}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            <p>
              <span className="text-zinc-500">Role </span>
              {hero.role}
            </p>
            <p>
              <span className="text-zinc-500">Timeline </span>
              {hero.timeline}
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {hero.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </header>
      </div>

      <ScrollReveal>
        <SectionShell id="shot" tone="muted">
          <figure>
            <div className="story-shot relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 960px"
                priority
              />
            </div>
            <figcaption className="mt-4 text-sm text-zinc-500">
              {heroImage.caption}
            </figcaption>
          </figure>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="impact" tone="accent">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Impact at a glance
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((metric) => (
              <li
                key={metric.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 transition-colors hover:border-zinc-600"
              >
                <p className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs leading-snug text-zinc-400 sm:text-sm">
                  {metric.label}
                </p>
              </li>
            ))}
          </ul>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="problem">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {problemSolution.title}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:border-zinc-600">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-rose-300/80">
                Problem
              </p>
              <h3 className="mt-3 text-lg font-medium text-zinc-50">
                {problemSolution.problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {problemSolution.problem.body}
              </p>
            </article>
            <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:border-zinc-600">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-300/80">
                Solution
              </p>
              <h3 className="mt-3 text-lg font-medium text-zinc-50">
                {problemSolution.solution.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {problemSolution.solution.body}
              </p>
            </article>
          </div>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="process" tone="muted">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {process.title}
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.steps.map((step, index) => (
              <li
                key={step.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 transition-colors hover:border-zinc-600"
              >
                <p className="text-xs font-medium text-zinc-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-medium text-zinc-50">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="quote" tone="quote">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-2xl font-medium leading-snug text-zinc-50 sm:text-3xl">
              “{quote.text}”
            </p>
            {quote.attribution ? (
              <footer className="mt-5 text-sm text-zinc-500">
                {quote.attribution}
              </footer>
            ) : null}
          </blockquote>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="gallery">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            What it looks like in motion
          </h2>
          <div className="mt-8 space-y-10">
            {shots.map((shot, index) => (
              <figure
                key={shot.src}
                className={[
                  "grid items-center gap-5",
                  index % 2 === 1 ? "md:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[1.1fr_0.9fr]",
                ].join(" ")}
              >
                <div
                  className={[
                    "story-shot relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900",
                    index % 2 === 1 ? "md:order-2" : "",
                  ].join(" ")}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                </div>
                <figcaption
                  className={[
                    "text-sm leading-relaxed text-zinc-400 sm:text-base",
                    index % 2 === 1 ? "md:order-1" : "",
                  ].join(" ")}
                >
                  <span className="font-medium text-zinc-200">
                    {shot.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="decisions" tone="muted">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {decisions.title}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {decisions.items.slice(0, 4).map((item) => (
              <li
                key={item.decision}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 transition-colors hover:border-zinc-600"
              >
                <h3 className="text-base font-medium text-zinc-50">
                  {item.decision}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.why}
                </p>
              </li>
            ))}
          </ul>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="built">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {contribution.title}
          </h2>
          <ul className="mt-8 space-y-3">
            {contribution.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm leading-relaxed text-zinc-300 transition-colors hover:border-zinc-600"
              >
                <span aria-hidden="true" className="mt-0.5 text-emerald-400">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionShell>
      </ScrollReveal>

      <ScrollReveal>
        <SectionShell id="lessons" tone="accent">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {lessons.title}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {lessons.items.slice(0, 4).map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-sm leading-relaxed text-zinc-300 transition-colors hover:border-zinc-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>
      </ScrollReveal>

      <DetailsAccordion items={details} />

      <ScrollReveal>
        <SectionShell id="next" tone="muted">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-950/80 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {cta.body}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href={cta.primaryHref}
                variant="primary"
                external={cta.primaryExternal}
              >
                {cta.primaryLabel}
              </Button>
              {cta.secondaryLabel && cta.secondaryHref ? (
                <Button
                  href={cta.secondaryHref}
                  variant="secondary"
                  external={cta.secondaryExternal}
                >
                  {cta.secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </SectionShell>
      </ScrollReveal>
    </article>
  );
}
