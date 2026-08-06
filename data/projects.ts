import type { Project } from "@/types/project";

/**
 * Add a new project by appending an object here and placing its image in
 * public/images/projects. Optional githubUrl and liveDemoUrl only render
 * when provided. Set caseStudySlug to link a project card to /projects/[slug].
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
    image: "/images/projects/plannedquest-leads-dashboard.png",
    imageAlt:
      "Lead Research Pipeline dashboard showing scored district leads, program contacts, and review status",
    featured: true,
    caseStudySlug: "plannedquest",
  },
  {
    id: "aquarium-clock",
    title: "Aquarium Clock",
    shortDescription:
      "A calm digital clock set inside an animated underwater scene, with day-night lighting and gentle motion.",
    longDescription:
      "Built as a lightweight ambient web app with swimming fish, bubbles, seaweed, and light rays. Includes 12/24-hour time, auto lighting that follows the time of day, fullscreen mode, and a reduced-motion option.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS Animations",
    ],
    image: "/images/projects/aquarium-clock.png",
    imageAlt:
      "Aquarium Clock showing the current time over an underwater scene with fish, bubbles, and light rays",
    caseStudySlug: "aquarium-clock",
    githubUrl: "https://github.com/JimmyThai101/aquarium-clock",
    liveDemoUrl: "https://aquarium-clock.vercel.app/",
  },
  {
    id: "arcade-lounge",
    title: "Arcade Lounge",
    shortDescription:
      "A casino-inspired mini-game arcade with five playable games, local stats, and optional sound — for fun only, no gambling.",
    longDescription:
      "A Next.js game hub featuring Make 21, Rock Paper Scissors, High Card, Dice Duel, and Memory Match. Shared lounge styling, persistent localStorage stats, muteable Web Audio effects, and dedicated screens for each game.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Audio API",
      "localStorage",
    ],
    image: "/images/projects/arcade-lounge.png",
    imageAlt:
      "Arcade Lounge hub showing five mini-game cards and a Your Stats panel on a dark lounge background",
    caseStudySlug: "arcade-lounge",
    githubUrl: "https://github.com/JimmyThai101/Arcade-lounge",
    liveDemoUrl: "https://arcade-lounge-cyan.vercel.app/",
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
