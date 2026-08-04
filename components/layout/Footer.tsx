import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
