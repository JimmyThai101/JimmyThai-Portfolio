import type { Project } from "@/types/project";

/**
 * Add a new project by appending an object here and placing its image in
 * public/images/projects. Optional githubUrl and liveDemoUrl only render
 * when provided.
 */
export const projects: Project[] = [
  {
    id: "plannedquest-lead-research",
    title: "PlannedQuest Lead Research Pipeline",
    shortDescription:
      "A full-stack research platform that crawls organization websites, identifies relevant decision-makers, validates findings, and exports structured lead data.",
    longDescription:
      "The system combines deterministic web collection with selective AI analysis. It includes a Next.js dashboard, a Node and Express research engine, Server-Sent Events for live progress, Playwright-based browsing, source tracking, human review, and CSV exports prepared for PostgreSQL.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Playwright",
      "Server-Sent Events",
      "OpenAI API",
      "CSV",
      "PostgreSQL",
    ],
    image: "/images/projects/plannedquest-lead-research.svg",
    imageAlt: "PlannedQuest Lead Research Pipeline project preview",
    featured: true,
    // githubUrl: "https://github.com/yourusername/repo",
    // liveDemoUrl: "https://your-demo-url.com",
  },
];

/** Featured projects first, then the rest in file order */
export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => {
    const aFeatured = a.featured ? 1 : 0;
    const bFeatured = b.featured ? 1 : 0;
    return bFeatured - aFeatured;
  });
}
