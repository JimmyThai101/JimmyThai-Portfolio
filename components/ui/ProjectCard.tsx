import Image from "next/image";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 transition-colors duration-200 hover:border-zinc-600">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-900">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          // SVGs are not optimized by next/image; keep them sharp as-is
          unoptimized={project.image.endsWith(".svg")}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>

      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
            {project.title}
          </h3>
          {project.featured ? (
            <span className="rounded-md border border-zinc-700 px-2 py-0.5 text-xs font-medium text-zinc-300">
              Featured
            </span>
          ) : null}
        </div>

        <p className="text-base leading-relaxed text-zinc-400">
          {project.shortDescription}
        </p>

        <p className="text-sm leading-relaxed text-zinc-500">
          {project.longDescription}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.githubUrl || project.liveDemoUrl) && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                GitHub
              </a>
            ) : null}
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
