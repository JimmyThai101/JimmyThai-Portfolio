import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function ResumeSection() {
  return (
    <section
      className="border-b border-zinc-800/60"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="rounded-xl border border-zinc-800 bg-[linear-gradient(135deg,rgba(24,24,27,0.9),rgba(9,9,11,0.95))] px-6 py-10 sm:px-10 sm:py-12">
          <h2
            id="resume-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
          >
            Resume
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400">
            Download a PDF overview of my experience, projects, and skills.
          </p>
          <div className="mt-8">
            <Button href={profile.resumeUrl} variant="primary" external>
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
