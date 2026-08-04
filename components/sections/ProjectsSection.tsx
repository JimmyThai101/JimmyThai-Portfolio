import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { getSortedProjects } from "@/data/projects";

export default function ProjectsSection() {
  const projects = getSortedProjects();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-zinc-800/60"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <SectionHeading
          id="projects-heading"
          title="Featured Projects"
          description="Selected work in full-stack development, research tooling, and automation."
        />

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
