import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-zinc-800/60"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <SectionHeading id="about-heading" title="About" />
        <p className="max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {profile.about}
        </p>
      </div>
    </section>
  );
}
