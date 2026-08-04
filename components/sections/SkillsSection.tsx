import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function SkillsSection() {
  const skillGroups = Object.entries(profile.skills);

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-zinc-800/60"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <SectionHeading
          id="skills-heading"
          title="Skills"
          description="Languages, frameworks, and tools I use regularly."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-zinc-200">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2" aria-label={category}>
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:border-zinc-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
