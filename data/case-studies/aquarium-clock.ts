import type { CaseStudy } from "@/types/case-study";

export const aquariumClockCaseStudy: CaseStudy = {
  slug: "aquarium-clock",
  projectId: "aquarium-clock",
  title: "Aquarium Clock",
  hero: {
    statement: "A readable clock first—aquarium, beach, or space second.",
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
      "An ambient fullscreen clock with three scenes, five aquarium looks, day-night lighting, a next-event timer, optional sound, and a reduced-motion path that never hides the time.",
  },
  heroImage: {
    src: "/images/projects/aquarium-clock.png",
    alt: "Aquarium Clock in night mood showing 12-hour time over a dark underwater scene",
    caption:
      "Night mood locked on the default aquarium scene—high-contrast clock, with scene, look, event, and sound still one tap away.",
  },
  metrics: [
    { value: "3", label: "Scenes: aquarium, beach, and space" },
    { value: "5", label: "Aquarium looks, classic to coral reef" },
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
      body: "A calm center panel carries the time, world clocks, and the next event. Scenes animate behind it and can quiet down instantly.",
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
        description: "Tracks local time, date labels, 12/24 preference, and world clocks.",
      },
      {
        label: "useLighting",
        description: "Maps local time to morning through night, or a manual lock.",
      },
      {
        label: "Scenes and looks",
        description: "Aquarium, beach, or space; five aquarium palettes stay presentational.",
      },
      {
        label: "Controls",
        description: "Scene, look, format, lighting, event, sound, fullscreen, and reduced motion.",
      },
      {
        label: "Hydration-safe prefs",
        description: "localStorage for format, lighting, scene, look, sound, and the next event.",
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
        "Mood control in action: Night lighting shifts the aquarium without touching scene, look, or clock type.",
    },
    {
      src: "/images/projects/aquarium-clock/reduced-motion-24h.png",
      alt: "Aquarium Clock in 24-hour format with afternoon lighting and quieter motion",
      caption:
        "24-hour format plus a calmer motion path—time, world clocks, and the next event stay primary when the scene quiets down.",
    },
    {
      src: "/images/projects/aquarium-clock/scene-layers.png",
      alt: "Diagram of Aquarium Clock scene layers from background to clock panel",
      caption:
        "The default aquarium still layers fish, jellyfish, turtle, crab, bubbles, and rays so mood, look, and motion can change independently.",
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
        decision: "Split lighting, scene, look, and format",
        why: "People change format, lighting, scene, and look for different reasons—so each control is independent.",
      },
    ],
  },
  contribution: {
    title: "What I personally built",
    items: [
      "Full Next.js UI, three scene backdrops, aquarium life, and control surface",
      "Time-of-day lighting with manual override, plus five aquarium looks",
      "Named event/timer, optional Web Audio ambience, and hydration-safe prefs",
      "Weather-aware rain, idle-hiding controls, fullscreen, and reduced motion",
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
      body: "Built with Cursor pair-programming from a detailed product brief, then narrower passes for scenes, looks, events, and sound. I directed stack limits, accessibility, and visual iterations—no custom model training.",
    },
    {
      title: "Sample build constraints I gave the AI",
      body: "No unnecessary packages. Original CSS/SVG only. No Math.random during render. Fixed config for fish, jellyfish, and bubbles. Respect prefers-reduced-motion. Avoid hydration errors for time and localStorage. Sound stays off until the user opts in.",
    },
  ],
  cta: {
    title: "Try the ambient clock live",
    body: "Open the deployed app to cycle scenes and looks, or inspect the source if you want the scene structure.",
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
