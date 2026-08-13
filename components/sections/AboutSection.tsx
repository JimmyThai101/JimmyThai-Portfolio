import Image from "next/image";
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

        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              {profile.about}
            </p>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {profile.aboutDetails}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xs md:mx-0 md:max-w-none md:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <Image
                src={profile.headshot.src}
                alt={profile.headshot.alt}
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 768px) 320px, 280px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
