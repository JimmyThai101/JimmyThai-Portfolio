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
    "aiIntegration",
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
    aiIntegration: {
      title: "AI Collaboration & Prompts",
      paragraphs: [
        "I built Aquarium Clock with AI pair-programming in Cursor rather than training a custom model. The first prompt was a full product brief: stack constraints, aquarium scene requirements, accessibility rules, and hydration safety. That kept the scaffold close to a shippable ambient clock instead of a generic demo.",
        "Follow-up prompts were smaller and visual — for example tightening the palette to a calmer blue mood and clarifying control options — while I kept ownership of readability, reduced-motion behavior, and playtesting the fullscreen experience.",
        "The useful pattern was the same one I used on later projects: lock non-negotiables early, ask for one change at a time, and reject anything that added heavy libraries, copyrighted assets, or hydration bugs.",
      ],
      prompts: [
        {
          label: "Initial build brief (excerpt)",
          prompt: `Build the first complete version of a relaxing aquarium clock web app.

TECH: Next.js App Router, TypeScript, Tailwind CSS. Do not install unnecessary packages. Use CSS animations and original CSS/SVG visuals — no external animation libraries or copyrighted assets.

Core interface:
- Current local time with seconds + current date
- 12/24-hour toggle saved in localStorage
- Fullscreen button
- Highly readable clock over the animated background
- Responsive for phones, tablets, and desktops
- Clean loading state before the client clock is ready (avoid hydration errors)

Aquarium:
- Original underwater scene with fish, rising bubbles, seaweed, light rays, and particles
- Morning / afternoon / evening / night lighting from local time
- Keep animation relaxing, not busy
- No copyrighted characters, stock images, or external image URLs
- No Math.random() during React rendering — use fixed configuration data
- Centralize fish speed, size, depth, direction, and bubble count in one config file

Accessibility:
- Respect prefers-reduced-motion + manual reduced-motion toggle
- Semantic buttons, focus states, accessible labels
- Separate clock logic, controls, aquarium visuals, and configuration`,
        },
        {
          label: "Iteration: mood, palette, and controls",
          prompt: `Make the color more blue / chill and aesthetically pleasing.
Keep the clock readable.
Maybe add clearer options to change time format and lighting so the ambient mood is easier to control.
Do not break reduced motion, hydration safety, or the existing scene structure.`,
        },
        {
          label: "How I steered the AI (meta prompt pattern)",
          prompt: `When changing Aquarium Clock:
1) Restate non-negotiables (readable clock, no heavy libs, no copyrighted assets, no hydration bugs)
2) Describe only the visual or control change being requested
3) Point to the files/systems to touch (lighting hook, scene layers, controls)
4) Ask for lint/build after larger edits
5) Reject solutions that fight prefers-reduced-motion or make the scene busier than the clock

Treat the assistant as an implementer. I own product taste, accessibility checks, and final review.`,
        },
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
