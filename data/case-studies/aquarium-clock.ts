import type { CaseStudy } from "@/types/case-study";

export const aquariumClockCaseStudy: CaseStudy = {
  slug: "aquarium-clock",
  projectId: "aquarium-clock",
  title: "Aquarium Clock",
  hero: {
    statement: "A readable clock first—an underwater mood second.",
    role: "Personal Project — Designer & Developer",
    timeline: "2026",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS Animations",
    ],
    summary:
      "An ambient fullscreen clock with day-night lighting, gentle scene motion, and a reduced-motion path that never hides the time.",
  },
  heroImage: {
    src: "/images/projects/aquarium-clock.png",
    alt: "Aquarium Clock in night mood showing 12-hour time over a dark underwater scene",
    caption:
      "Night mood locked manually—deep blue scene, high-contrast clock, controls still one tap away.",
  },
  metrics: [
    { value: "0", label: "Backend services required" },
    { value: "4", label: "Lighting moods: morning to night" },
    { value: "12/24", label: "Time formats with local save" },
    { value: "A11y", label: "Reduced-motion never hides the time" },
  ],
  problemSolution: {
    title: "Most fancy clocks bury the time",
    problem: {
      title: "Atmosphere fights readability",
      body: "Animated backgrounds often steal focus. Fullscreen clocks become toys instead of tools.",
    },
    solution: {
      title: "Stable time, soft environment",
      body: "A calm center panel carries the time. Scene layers animate behind it and can quiet down instantly.",
    },
  },
  process: {
    title: "Layered scene, tiny client architecture",
    steps: [
      {
        label: "Clock shell",
        description: "Client component coordinates layout, hooks, and controls.",
      },
      {
        label: "useClock",
        description: "Tracks time, date labels, and 12/24 preference.",
      },
      {
        label: "useLighting",
        description: "Maps local time to morning through night, or a manual lock.",
      },
      {
        label: "Aquarium layers",
        description: "Fish, bubbles, seaweed, and rays stay presentational.",
      },
      {
        label: "Controls",
        description: "Format, lighting, fullscreen, and reduced motion.",
      },
      {
        label: "Hydration-safe prefs",
        description: "localStorage values apply after mount to avoid mismatches.",
      },
    ],
  },
  quote: {
    text: "If the time isn’t readable, the aquarium failed.",
    attribution: "Design north star",
  },
  shots: [
    {
      src: "/images/projects/aquarium-clock/night-mood.png",
      alt: "Aquarium Clock night mood with 12-hour PM time and Less motion control",
      caption:
        "Mood control in action: Night lighting shifts the whole aquarium without touching the clock type.",
    },
    {
      src: "/images/projects/aquarium-clock/reduced-motion-24h.png",
      alt: "Aquarium Clock in 24-hour format with afternoon lighting and quieter motion",
      caption:
        "24-hour format plus a calmer motion path—time stays primary when the scene needs to quiet down.",
    },
    {
      src: "/images/projects/aquarium-clock/scene-layers.png",
      alt: "Diagram of Aquarium Clock scene layers from background to clock panel",
      caption:
        "Fish, bubbles, seaweed, and rays stay in separate layers so mood and motion can change independently.",
    },
  ],
  decisions: {
    title: "Choices that kept it light",
    items: [
      {
        decision: "CSS instead of canvas",
        why: "Stylized motion didn’t need a game engine—and reduced motion stayed simple.",
      },
      {
        decision: "Client-only state",
        why: "An ambient desk display shouldn’t require accounts or a backend.",
      },
      {
        decision: "Split lighting from format",
        why: "People change time format and visual mood for different reasons.",
      },
    ],
  },
  contribution: {
    title: "What I personally built",
    items: [
      "Full Next.js UI, aquarium scene components, and control surface",
      "Time-of-day lighting system with manual override",
      "Fullscreen mode and hydration-safe preference storage",
      "Reduced-motion support and responsive ambient layout",
    ],
  },
  lessons: {
    title: "What I learned building it",
    items: [
      "Atmosphere is easy; restraint is the hard part.",
      "Hydration bugs show up the moment prefs touch the server render.",
      "Accessibility settings belong in the first prompt, not the polish pass.",
    ],
  },
  details: [
    {
      title: "AI collaboration note",
      body: "Built with Cursor pair-programming from a detailed product brief. I directed stack limits, accessibility requirements, and visual iterations—no custom model training.",
    },
    {
      title: "Sample build constraints I gave the AI",
      body: "No unnecessary packages. Original CSS/SVG only. No Math.random during render. Fixed config for fish and bubbles. Respect prefers-reduced-motion. Avoid hydration errors for time and localStorage.",
    },
  ],
  cta: {
    title: "Try the ambient clock live",
    body: "Open the deployed app, or inspect the source if you want the scene structure.",
    primaryLabel: "Live demo",
    primaryHref: "https://aquarium-clock.vercel.app/",
    primaryExternal: true,
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/JimmyThai101/aquarium-clock",
    secondaryExternal: true,
  },
  nav: [
    { id: "hook", label: "Hook" },
    { id: "impact", label: "Impact" },
    { id: "problem", label: "Problem" },
    { id: "process", label: "Build" },
    { id: "gallery", label: "Visuals" },
    { id: "built", label: "My work" },
    { id: "next", label: "Next" },
  ],
};
