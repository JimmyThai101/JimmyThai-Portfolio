import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-zinc-800/60"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <SectionHeading
          id="experience-heading"
          title="Experience"
          description="Roles where I have built and shipped software."
        />

        <ul className="space-y-8">
          {profile.experience.map((role) => (
            <li
              key={`${role.organization}-${role.title}`}
              className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6 transition-colors duration-200 hover:border-zinc-700 sm:p-8"
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                {role.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-400">
                {role.organization}
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                {role.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
