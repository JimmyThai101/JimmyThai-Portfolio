import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <SectionHeading
          id="contact-heading"
          title="Contact"
          description="The best way to reach me is by email. I am also on GitHub and LinkedIn."
        />

        <ul className="space-y-4 text-base">
          <li>
            <span className="block text-sm text-zinc-500">Email</span>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block text-zinc-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <span className="block text-sm text-zinc-500">GitHub</span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-zinc-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
            >
              {profile.githubUrl}
            </a>
          </li>
          <li>
            <span className="block text-sm text-zinc-500">LinkedIn</span>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-zinc-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
            >
              {profile.linkedinUrl}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
