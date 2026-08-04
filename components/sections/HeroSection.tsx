import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-800/60"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.04),_transparent_40%)]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col px-6 pb-24 pt-20 sm:pb-28 sm:pt-28">
        <p className="mb-4 text-sm font-medium tracking-wide text-zinc-400">
          {profile.name}
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.1]"
        >
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {profile.heroDescription}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#projects" variant="primary">
            View My Projects
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" external>
            View Resume
          </Button>
          <Button href={profile.githubUrl} variant="ghost" external>
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
