import type { CaseStudy } from "@/types/case-study";

export const arcadeLoungeCaseStudy: CaseStudy = {
  slug: "arcade-lounge",
  projectId: "arcade-lounge",
  title: "Arcade Lounge",
  hero: {
    statement: "Six games, one lounge—and zero real-money gambling.",
    role: "Personal Project — Designer & Developer",
    timeline: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Web Audio",
    ],
    summary:
      "A casino-inspired hub with six mini-games, fake Jimmycoin, optional Google sign-in, and a global wins leaderboard.",
  },
  heroImage: {
    src: "/images/projects/arcade-lounge.png",
    alt: "Arcade Lounge hub with six games and leaderboard",
    caption: "Hub cards, Jimmycoin balance, Google sign-in, and global standings on one dark lounge surface.",
  },
  metrics: [
    { value: "6", label: "Playable mini-games" },
    { value: "$0", label: "Real money in the loop" },
    { value: "1", label: "Shared lounge design system" },
    { value: "Guest+", label: "Play first, sign in optional" },
  ],
  problemSolution: {
    title: "Arcade demos usually feel like five random pages",
    problem: {
      title: "Disconnected mini-games",
      body: "Most browser arcades ship mismatched UIs, no shared economy, and no reason to come back.",
    },
    solution: {
      title: "One cohesive lounge product",
      body: "Shared layout, stats, sound, Jimmycoin rewards, and an optional leaderboard wrapped around six quick games.",
    },
  },
  process: {
    title: "Hub first, then the economy and identity layers",
    steps: [
      {
        label: "Game hub",
        description: "Six cards route into dedicated play screens.",
      },
      {
        label: "Shared shell",
        description: "GameLayout, mute, scoreboard, and back-to-hub everywhere.",
      },
      {
        label: "Jimmycoin",
        description: "Win free games to earn; spend in Make 21 and Slots.",
      },
      {
        label: "Local stats",
        description: "Guests keep session history in localStorage.",
      },
      {
        label: "Google sign-in",
        description: "Auth.js + moderated usernames when env is configured.",
      },
      {
        label: "Leaderboard",
        description: "Prisma/Postgres ranks signed-in wins globally.",
      },
    ],
  },
  quote: {
    text: "Casino vibes. Fake currency. No cash-out.",
    attribution: "Product boundary for Arcade Lounge",
  },
  shots: [
    {
      src: "/images/projects/arcade-lounge/hub-layout.svg",
      alt: "Hub layout with six games",
      caption: "Six-game hub plus leaderboard keeps discovery and competition in one scroll.",
    },
    {
      src: "/images/projects/arcade-lounge/game-architecture.svg",
      alt: "Architecture diagram",
      caption: "Guest play stays local; signed-in wins sync through Auth.js and Prisma.",
    },
    {
      src: "/images/projects/arcade-lounge/stats-persistence.svg",
      alt: "Stats persistence diagram",
      caption: "Free-game wins feed Jimmycoin; wager games spend it without real money.",
    },
  ],
  decisions: {
    title: "Decisions that kept the lounge honest",
    items: [
      {
        decision: "Fake Jimmycoin only",
        why: "Economy connects the games without deposits, withdrawals, or purchases.",
      },
      {
        decision: "Guest play always works",
        why: "Leaderboard prestige is optional. The first round should be instant.",
      },
      {
        decision: "Ship games before auth",
        why: "Identity came after the six-game loop felt cohesive.",
      },
    ],
  },
  contribution: {
    title: "What I personally built",
    items: [
      "Hub, shared UI kit, and all six game screens",
      "Jimmycoin earn/spend loop across free games, Make 21, and Slots",
      "Muteable Web Audio feedback and local stats",
      "Google sign-in, username moderation, and global leaderboard",
    ],
  },
  lessons: {
    title: "What I learned shipping it",
    items: [
      "Aesthetic constraints need copy reinforcement, not just color.",
      "Staged AI prompts beat one endless chat for multi-feature apps.",
      "Optional auth only works if guest mode still feels complete.",
    ],
  },
  details: [
    {
      title: "AI collaboration note",
      body: "Directed Cursor with a long initial brief, then narrower prompts for Jimmycoin/Slots and Auth/leaderboard. I reviewed every change and rejected real-money drift.",
    },
    {
      title: "Prompt pattern I reused",
      body: "Restate non-negotiables → describe one feature → point to files/systems → ask for a play check → reject gambling mechanics or giant refactors.",
    },
    {
      title: "Games included",
      body: "Make 21, Rock Paper Scissors, High Card, Dice Duel, Memory Match, and Slots.",
    },
  ],
  cta: {
    title: "Play the lounge",
    body: "Jump into the live arcade, or browse the repo if you want the game architecture.",
    primaryLabel: "Live demo",
    primaryHref: "https://arcade-lounge-cyan.vercel.app/",
    primaryExternal: true,
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/JimmyThai101/Arcade-lounge",
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
