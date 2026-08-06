import type { CaseStudy } from "@/types/case-study";

export const arcadeLoungeCaseStudy: CaseStudy = {
  slug: "arcade-lounge",
  projectId: "arcade-lounge",
  title: "Arcade Lounge",
  architectureLayout: "grid",
  hero: {
    role: "Personal Project — Designer & Developer",
    timeline: "2026",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Audio API",
      "localStorage",
    ],
    summary:
      "A casino-inspired mini-game arcade with five playable games, persistent local stats, and optional sound — built entirely client-side with no accounts or real-money systems.",
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
        "Arcade Lounge is a personal front-end project that presents five quick mini-games through a single dark, lounge-inspired hub. The visual language borrows from casino aesthetics — charcoal surfaces, red and gold accents, and serif display type — while staying clearly non-gambling: no bets, chips, purchases, accounts, or prizes.",
        "From the hub, players open dedicated screens for Make 21, Rock Paper Scissors, High Card, Dice Duel, and Memory Match. Each game tracks results locally, and a shared stats panel surfaces totals, win/loss records, and Memory Match bests after refresh.",
      ],
    },
    technologyStack: {
      title: "Technology Stack",
      description:
        "The stack stays lightweight because every game runs in the browser with shared UI utilities and no backend.",
      items: [
        {
          name: "Next.js",
          reason:
            "Provides the App Router shell and per-game routes while keeping deployment simple for a client-focused arcade.",
        },
        {
          name: "React",
          reason:
            "Manages game state, round flow, card and dice reveals, and composition of hub and game screens.",
        },
        {
          name: "TypeScript",
          reason:
            "Keeps game IDs, stats shapes, and shared component props explicit as five games grew from one hub.",
        },
        {
          name: "Tailwind CSS",
          reason:
            "Speeds up the lounge palette, responsive card grid, and consistent control styling across every game.",
        },
        {
          name: "Web Audio API",
          reason:
            "Generates click, flip, win, and lose tones with oscillators so sound effects work without shipping audio files.",
        },
        {
          name: "localStorage",
          reason:
            "Persists aggregate stats, Memory Match bests, and mute preference without accounts or a database.",
        },
      ],
    },
    architecture: {
      title: "Architecture",
      description:
        "The app is organized as a hub plus five game routes that share layout, scoring, and audio utilities.",
      steps: [
        {
          label: "Hub page",
          description:
            "Lists the five games as cards and renders the aggregate Your Stats panel.",
        },
        {
          label: "Game routes",
          description:
            "Each mini-game lives under /games/[name] with its own page and game component.",
        },
        {
          label: "GameLayout",
          description:
            "Shared shell for title, subtitle, mute control, and Back to Hub navigation.",
        },
        {
          label: "Shared UI",
          description:
            "Reusable pieces such as ScoreBoard, PlayingCard, ResultBanner, and GameButton.",
        },
        {
          label: "stats helpers",
          description:
            "Load, save, and update win/loss/tie counts and Memory Match bests in localStorage.",
        },
        {
          label: "sounds helpers",
          description:
            "Optional Web Audio tones with a mute preference that persists across visits.",
        },
      ],
    },
    animationApproach: {
      title: "Animation Approach",
      paragraphs: [
        "Motion is kept light and purposeful: hub cards stagger in on load, game results use short reveal transitions, and cards or dice animate when a round resolves. The goal is feedback, not spectacle that slows down quick replays.",
        "Each game owns its reveal timing — for example, Rock Paper Scissors shows both choices before the outcome, while Memory Match flips tiles in place. Shared CSS keyframes handle fade, slide, flip, and shake effects so the lounge feels cohesive.",
        "Sound is treated as an optional layer on top of motion. Tones fire on clicks and outcomes when unmuted, and the mute state is remembered so returning players keep their preference.",
      ],
    },
    accessibility: {
      title: "Accessibility",
      paragraphs: [
        "Core actions use real buttons and links with readable labels, including Mute sounds and Back to Hub, so keyboard and screen-reader users can move through the arcade without guessing icon meaning.",
        "Game results are shown as clear text banners in addition to color and motion, so win, lose, and tie states are not conveyed by animation alone.",
        "The mute control and localStorage preferences are applied on the client after mount, which avoids hydration mismatches while still letting players quiet the experience immediately.",
      ],
    },
    designDecisions: {
      title: "Design Decisions",
      items: [
        {
          decision: "Keep the entire arcade client-side",
          reason:
            "The product is a casual play session site and does not need accounts, multiplayer, or server-authoritative scores.",
          tradeoffs:
            "Stats stay on one device and can be cleared with browser storage.",
          benefits:
            "Zero backend cost, fast deploys, and no login friction before the first game.",
        },
        {
          decision: "Use a hub-and-routes structure instead of one giant page",
          reason:
            "Each game needs focused UI and state without competing with four other boards on screen.",
          tradeoffs:
            "More route files and shared-layout wiring to maintain.",
          benefits:
            "Faster mental model for players and cleaner separation of game logic.",
        },
        {
          decision: "Borrow casino visuals without gambling mechanics",
          reason:
            "The lounge look needed to feel distinctive while staying clearly for-fun only.",
          tradeoffs:
            "Requires careful copy and UI so red/gold accents never imply betting.",
          benefits:
            "A cohesive brand that still communicates harmless mini-games.",
        },
        {
          decision: "Synthesize sound with Web Audio instead of media files",
          reason:
            "Short UI tones do not justify hosting and managing audio assets.",
          tradeoffs:
            "Less rich sound design than sampled effects.",
          benefits:
            "Tiny bundle size, easy mute handling, and no missing-file failures.",
        },
      ],
    },
    challenges: {
      title: "Challenges",
      paragraphs: [
        "The hardest design constraint was aesthetic: make the lounge feel premium and casino-inspired without introducing anything that looks like wagering. Footer copy, score language, and the absence of chips or balances all reinforce that boundary.",
        "Sharing stats across five different game shapes also needed care. Most games record win/loss/tie, while Memory Match tracks moves and time. The stats model keeps a common base with optional best fields instead of forcing every game into the same outcome type.",
        "Keeping five games feeling like one product meant resisting one-off styling. Shared layout, button styles, result banners, and the hub card system carry the lounge identity into every route.",
      ],
    },
    futureImprovements: {
      title: "Future Improvements",
      paragraphs: [
        "Possible next steps include difficulty options, a broader set of lounge themes, and optional daily challenges that still stay local-only.",
        "The stats panel could grow into richer personal history, such as recent streaks or per-game charts, without requiring accounts.",
        "Because games already share layout and helpers, adding another quick mini-game would mostly mean a new route, card entry, and stats key rather than a rethink of the architecture.",
      ],
    },
    gallery: {
      title: "Gallery",
      items: [
        {
          src: "/images/projects/arcade-lounge.png",
          alt: "Arcade Lounge hub showing five game cards and the Your Stats panel",
          caption:
            "Live hub with the five mini-game cards, lounge styling, and persistent stats.",
        },
        {
          src: "/images/projects/arcade-lounge/hub-layout.svg",
          alt: "Arcade Lounge hub layout diagram",
          caption:
            "Hub layout with game cards routing into dedicated play screens.",
        },
        {
          src: "/images/projects/arcade-lounge/game-architecture.svg",
          alt: "Arcade Lounge architecture diagram",
          caption:
            "Hub-and-routes architecture over shared layout, stats, and sound helpers.",
        },
        {
          src: "/images/projects/arcade-lounge/stats-persistence.svg",
          alt: "Arcade Lounge localStorage stats flow",
          caption:
            "Round results flow into localStorage-backed Your Stats.",
        },
        {
          src: "/images/projects/arcade-lounge/sound-system.svg",
          alt: "Arcade Lounge optional sound system overview",
          caption:
            "Optional Web Audio tones with a persisted mute preference.",
        },
      ],
    },
  },
};
