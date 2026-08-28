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
    image: "/images/projects/plannedquest/pipeline-run.png",
    imageAlt:
      "Lead Research Pipeline Run tab showing completed crawl stages, contact totals, and live logs",
    featured: true,
    caseStudySlug: "plannedquest",
  },
  {
    id: "aquarium-clock",
    title: "Aquarium Clock",
    shortDescription:
      "A calm fullscreen clock with aquarium, beach, and space scenes, plus looks, lighting, a next-event timer, and optional ambient sound.",
    longDescription:
      "A client-only ambient web app: three scenes, five aquarium looks, day-night lighting, London/New York/Tokyo clocks, and a named timer or alarm. Optional Web Audio bubbles, weather-aware rain, fullscreen, and reduced motion—the time stays primary.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS Animations",
    ],
    image: "/images/projects/aquarium-clock.png",
    imageAlt:
      "Aquarium Clock showing readable time over a scene, with scene, look, lighting, and event controls",
    caseStudySlug: "aquarium-clock",
    githubUrl: "https://github.com/JimmyThai101/aquarium-clock",
    liveDemoUrl: "https://aquarium-clock.vercel.app/",
  },
  {
    id: "arcade-lounge",
    title: "Arcade Lounge",
    shortDescription:
      "A casino-inspired arcade with eight games, Jimmycoin fake currency, Google sign-in, and three leaderboards—wins, Neon Dash time, and Jimmy Flappy score.",
    longDescription:
      "A Next.js hub with Make 21 (hit, stay, double down, split), Rock Paper Scissors, High Card, Dice Duel, Memory Match, Slots, plus canvas runners Neon Dash and Jimmy Flappy. Free table games earn Jimmycoin; Make 21 and Slots spend it. Guests keep local stats; signed-in players climb a wins board plus separate Dash-time and Flappy-score boards.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Web Audio API",
      "localStorage",
    ],
    image: "/images/projects/arcade-lounge.png",
    imageAlt:
      "Arcade Lounge hub showing mini-game cards, Jimmycoin balance, and leaderboards",
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
