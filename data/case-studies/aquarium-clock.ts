import type { CaseStudy } from "@/types/case-study";

export const aquariumClockCaseStudy: CaseStudy = {
  slug: "aquarium-clock",
  projectId: "aquarium-clock",
  title: "Aquarium Clock",
  architectureLayout: "grid",
  hero: {
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
      "A calm ambient clock rendered over an animated underwater scene, with time-of-day lighting, optional reduced motion, and lightweight client-side controls.",
  },
  sectionOrder: [
    "overview",
    "technologyStack",
    "architecture",
    "animationApproach",
    "accessibility",
    "designDecisions",
    "challenges",
    "futureImprovements",
    "gallery",
  ],
  sections: {
    overview: {
      title: "Project Overview",
      paragraphs: [
        "Aquarium Clock is a personal front-end project built as a readable digital clock wrapped in a themed underwater environment. The goal was to create something visually distinct while keeping the interface simple, responsive, and easy to use as a fullscreen ambient display.",
        "The app combines a central clock panel with animated fish, bubbles, seaweed, light rays, and sand. Users can switch between 12-hour and 24-hour time, cycle lighting modes, enter fullscreen, and reduce motion when preferred.",
      ],
    },
    technologyStack: {
      title: "Technology Stack",
      description:
        "The stack stays intentionally small because the project is UI-focused and runs entirely in the browser.",
      items: [
        {
          name: "Next.js",
          reason:
            "Provides the app shell, routing, and a clean project structure for a lightweight client-rendered experience.",
        },
        {
          name: "React",
          reason:
            "Manages clock state, control interactions, and composition of the aquarium scene components.",
        },
        {
          name: "TypeScript",
          reason:
            "Keeps lighting modes, time formatting, and hook return types explicit as the UI grew.",
        },
        {
          name: "Tailwind CSS",
          reason:
            "Handles layout and responsive spacing for the clock panel and control buttons with minimal custom CSS overhead.",
        },
        {
          name: "CSS Animations",
          reason:
            "Powers fish movement, bubbles, light rays, and scene transitions without adding a heavy animation library.",
        },
      ],
    },
    architecture: {
      title: "Architecture",
      description:
        "The app is organized as a client shell with focused hooks and presentational aquarium components.",
      steps: [
        {
          label: "AquariumClock shell",
          description: "Top-level client component coordinating hooks and layout.",
        },
        {
          label: "useClock",
          description: "Tracks current time, date labels, and 12/24-hour format preference.",
        },
        {
          label: "useLighting",
          description: "Maps clock time to time-of-day lighting or a manual override.",
        },
        {
          label: "Aquarium scene",
          description: "Renders fish, bubbles, seaweed, particles, and light rays.",
        },
        {
          label: "ClockDisplay",
          description: "Shows time, date, and current lighting period.",
        },
        {
          label: "ClockControls",
          description: "Exposes format, lighting, fullscreen, and reduced-motion toggles.",
        },
      ],
    },
    animationApproach: {
      title: "Animation Approach",
      paragraphs: [
        "Motion is handled with CSS-driven scene elements rather than a canvas or game engine. Fish, bubbles, seaweed, and light rays are separate components layered inside the aquarium container, which keeps the animation system easy to inspect and adjust.",
        "Lighting follows the current time when auto mode is enabled, shifting the scene between morning, afternoon, evening, and night palettes. Users can also lock a lighting mode manually when they want a consistent visual mood.",
        "Reduced motion is treated as a first-class setting. When enabled, decorative animation is suppressed while the clock itself remains fully readable and functional.",
      ],
    },
    accessibility: {
      title: "Accessibility",
      paragraphs: [
        "The clock remains the primary focus, with high-contrast text over a dark translucent panel so time and date stay readable across lighting modes.",
        "Reduced motion combines the system prefers-reduced-motion setting with a manual toggle stored in localStorage. That avoids hydration mismatches by applying saved preferences only after client mount.",
        "Controls use button elements with readable labels, and the layout stays usable on smaller screens without hiding core time information behind animation.",
      ],
    },
    designDecisions: {
      title: "Design Decisions",
      items: [
        {
          decision: "Keep all state client-side",
          reason:
            "The app is an ambient display and does not need a backend or persisted user accounts.",
          tradeoffs:
            "Preferences are stored locally rather than synced across devices.",
          benefits:
            "Simple deployment, fast load times, and no server maintenance.",
        },
        {
          decision: "Use CSS animation instead of canvas",
          reason:
            "The visual style is stylized and lightweight rather than physics-driven.",
          tradeoffs:
            "Less flexibility for complex interactions between entities.",
          benefits:
            "Lower complexity, easier styling, and straightforward reduced-motion handling.",
        },
        {
          decision: "Separate lighting from clock formatting",
          reason:
            "Time display and visual theme solve different user needs.",
          tradeoffs:
            "More hooks and control surface area to maintain.",
          benefits:
            "Users can keep auto lighting while switching time format, or vice versa.",
        },
        {
          decision: "Support fullscreen mode",
          reason:
            "The project is intended to work as a desk or bedside display.",
          tradeoffs:
            "Fullscreen behavior depends on browser support and user gesture requirements.",
          benefits:
            "Better immersion without changing the underlying layout.",
        },
      ],
    },
    challenges: {
      title: "Challenges",
      paragraphs: [
        "The main challenge was balancing atmosphere with readability. Strong background motion and light effects could easily compete with the clock, so the center panel uses stable contrast and restrained typography.",
        "Another challenge was hydration safety for client-only preferences such as reduced motion and lighting mode. Those values are read after mount so the server-rendered markup stays consistent.",
        "Tuning animation intensity required iteration. The final approach keeps decorative motion in the background layer while preserving a calm, legible primary interface.",
      ],
    },
    futureImprovements: {
      title: "Future Improvements",
      paragraphs: [
        "Possible next steps include configurable themes, additional aquarium creatures, and optional sound or chime settings for specific times of day.",
        "The project could also expose a settings panel for animation density and color palettes without cluttering the default fullscreen-friendly layout.",
        "Because the architecture is component-based, new scene layers or control modes can be added without restructuring the core clock logic.",
      ],
    },
    gallery: {
      title: "Gallery",
      items: [
        {
          src: "/images/projects/aquarium-clock.png",
          alt: "Aquarium Clock live preview showing time over an underwater scene",
          caption:
            "Live preview of the clock panel, time-of-day lighting, and control buttons.",
        },
        {
          src: "/images/projects/aquarium-clock/scene-layers.svg",
          alt: "Aquarium Clock scene layers placeholder",
          caption:
            "Layered aquarium scene composition with fish, bubbles, seaweed, and light rays.",
        },
        {
          src: "/images/projects/aquarium-clock/lighting-modes.svg",
          alt: "Aquarium Clock lighting modes placeholder",
          caption:
            "Auto and manual lighting modes mapped to morning, afternoon, evening, and night.",
        },
        {
          src: "/images/projects/aquarium-clock/reduced-motion.svg",
          alt: "Aquarium Clock reduced motion placeholder",
          caption:
            "Reduced-motion mode keeping the clock readable while limiting decorative animation.",
        },
      ],
    },
  },
};
