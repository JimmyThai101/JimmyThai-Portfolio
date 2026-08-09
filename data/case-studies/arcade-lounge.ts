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
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Web Audio API",
      "localStorage",
    ],
    summary:
      "A casino-inspired mini-game arcade with six playable games, Jimmycoin fake currency, Google sign-in, and a global leaderboard — built with AI-assisted iteration and no real-money gambling.",
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
        "Arcade Lounge is a personal project that packages six quick mini-games into one dark, lounge-inspired hub. The visual language borrows from casino aesthetics — charcoal surfaces, red and gold accents, and serif display type — while staying clearly for fun: Jimmycoin is fake currency, and there is no real-money betting or cashing out.",
        "Players can jump into Make 21, Rock Paper Scissors, High Card, Dice Duel, Memory Match, or Slots. Free games award Jimmycoin on wins; Make 21 and Slots spend that balance for higher-stakes rounds. Optional Google sign-in lets players claim a moderated username and appear on a global wins leaderboard.",
      ],
    },
    technologyStack: {
      title: "Technology Stack",
      description:
        "The client stays lightweight for play sessions, while Auth.js and Prisma add optional identity and shared standings.",
      items: [
        {
          name: "Next.js",
          reason:
            "App Router shell for the hub, per-game routes, and API routes used by auth and leaderboard features.",
        },
        {
          name: "React",
          reason:
            "Manages game state, round flow, card and dice reveals, and composition of hub and game screens.",
        },
        {
          name: "TypeScript",
          reason:
            "Keeps game IDs, Jimmycoin helpers, stats shapes, and shared component props explicit as the arcade grew.",
        },
        {
          name: "Tailwind CSS",
          reason:
            "Speeds up the lounge palette, responsive card grid, and consistent control styling across every game.",
        },
        {
          name: "Auth.js + Google OAuth",
          reason:
            "Optional sign-in so players can claim a username without building a custom auth stack.",
        },
        {
          name: "Prisma + PostgreSQL",
          reason:
            "Stores leaderboard records and moderated usernames for signed-in players across devices.",
        },
        {
          name: "Web Audio API",
          reason:
            "Generates click, flip, win, and jackpot tones with oscillators so sound works without audio files.",
        },
        {
          name: "localStorage",
          reason:
            "Persists guest Jimmycoin, session stats, and mute preference when a player is not signed in.",
        },
      ],
    },
    architecture: {
      title: "Architecture",
      description:
        "The app is organized as a hub plus six game routes, with shared play utilities and an optional auth/leaderboard layer.",
      steps: [
        {
          label: "Hub page",
          description:
            "Lists six game cards, Jimmycoin balance, global leaderboard, and local stats.",
        },
        {
          label: "Game routes",
          description:
            "Each mini-game lives under /games/[name] with its own page and game component.",
        },
        {
          label: "GameLayout",
          description:
            "Shared shell for title, subtitle, mute control, Jimmycoin badge, and Back to Hub.",
        },
        {
          label: "Jimmycoin helpers",
          description:
            "Earn on free-game wins; spend/wager in Make 21 and Slots via localStorage.",
        },
        {
          label: "Auth + Prisma",
          description:
            "Google sign-in, moderated usernames, and PostgreSQL-backed global standings.",
        },
        {
          label: "Sounds + shared UI",
          description:
            "Web Audio tones plus reusable ScoreBoard, PlayingCard, ResultBanner, and GameButton pieces.",
        },
      ],
    },
    aiIntegration: {
      title: "AI Collaboration & Prompts",
      paragraphs: [
        "I built Arcade Lounge with AI pair-programming in Cursor rather than training or fine-tuning a custom model. The useful skill was directing the assistant: writing a complete product brief up front, constraining scope, then iterating with smaller follow-up prompts when the lounge needed Jimmycoin, Slots, or sign-in.",
        "The first prompt was intentionally long and opinionated. It locked the stack, listed only the games I wanted, banned real-money gambling systems, and asked for a cohesive hub instead of five disconnected pages. That reduced vague output and kept the first scaffold close to the final product shape.",
        "Later prompts were narrower and treated the AI like a junior implementer: change one system at a time, preserve existing games, and verify behavior. I reviewed every change, played each game, and rewrote prompts when the result drifted toward real casino mechanics or overcomplicated architecture.",
        "In short, I did not “train” a model with datasets. I trained the workflow — clear constraints, staged prompts, and human review — so AI acceleration stayed aligned with the product I wanted to ship.",
      ],
      prompts: [
        {
          label: "Initial build brief (excerpt)",
          prompt: `Build me a complete, polished mini-game arcade website.

Feel like a sleek casino-inspired game lounge visually, but it is NOT a gambling website. No real money, betting, purchasing chips, cash prizes, gambling systems, or accounts. Everything is just for fun using scores/points.

TECH: Next.js, React, TypeScript, Tailwind CSS. Responsive. No backend/database unless absolutely necessary. Use localStorage for high scores/stats if needed.

MAIN HUB: dark black/charcoal background; red, gold, white, and subtle green accents; title "Game Lounge"; subtitle "Pick a game and play."; game cards with icon, name, description, and Play button; small "Your Stats" area. Do NOT make it cluttered.

Include ONLY these games:
1. Make 21 — draw/stay, close to 21 without going over, computer opponent, Play Again
2. Rock Paper Scissors
3. High Card
4. Dice Duel
5. Memory Match

Navigation: dedicated game screens with a clear Back to Hub button. Make every game functional. Add optional muteable sound effects. Keep the whole site feeling like one cohesive product.`,
        },
        {
          label: "Iteration: Jimmycoin economy + Slots",
          prompt: `Add a sixth game, Slots, and a fake arcade currency called Jimmycoin.

Constraints:
- Jimmycoin is fake only — no real money, deposits, withdrawals, or purchases
- Free games (RPS, High Card, Dice Duel, Memory Match) award Jimmycoin on wins
- Make 21 can wager Jimmycoin (hit, stay, double down, split)
- Slots spends Jimmycoin per spin with pair / triple / jackpot payouts
- Show balance on the hub and in game screens
- Keep existing games working and preserve the lounge aesthetic
- Update hub copy so players understand: win free games to earn Jimmycoin, spend them on Slots`,
        },
        {
          label: "Iteration: Google sign-in + global leaderboard",
          prompt: `Add optional Google sign-in and a global wins leaderboard.

Requirements:
- Auth.js (NextAuth) + Google OAuth
- Prisma + PostgreSQL for standings
- Signed-in players pick a moderated username (block slurs and common bypass spellings)
- Leaderboard ranked by wins, with losses/ties/played visible
- Guests can still play; local Jimmycoin/stats remain on device
- If env vars are missing, the site should still play and show a clear “sign-in setup needed” state
- Do not turn this into a real-money or paid ranking system`,
        },
        {
          label: "How I steered the AI (meta prompt pattern)",
          prompt: `When changing the arcade:
1) Restate the non-negotiables (no real money, keep current games working)
2) Describe only the feature being added
3) Point to the files/systems to touch (hub, jimmycoin helpers, game route, stats)
4) Ask for a build/play check afterward
5) Reject solutions that invent gambling mechanics, accounts I did not ask for, or giant refactors

Treat the assistant as an implementer. I own product decisions, playtesting, and final review.`,
        },
      ],
    },
    animationApproach: {
      title: "Animation Approach",
      paragraphs: [
        "Motion stays light and purposeful: hub cards stagger in on load, game results use short reveal transitions, and cards, dice, or reels animate when a round resolves. The goal is feedback, not spectacle that slows down quick replays.",
        "Each game owns its reveal timing — Rock Paper Scissors shows both choices before the outcome, Memory Match flips tiles in place, and Slots spins before settling on a payout. Shared CSS keyframes keep fade, slide, flip, and shake effects consistent across the lounge.",
        "Sound sits on top of motion as an optional layer. Tones fire on clicks and outcomes when unmuted, with a bigger fanfare reserved for the Slots jackpot, and mute preference persists across visits.",
      ],
    },
    accessibility: {
      title: "Accessibility",
      paragraphs: [
        "Core actions use real buttons and links with readable labels, including Mute sounds, Sign in with Google, and Back to Hub, so keyboard and screen-reader users can move through the arcade without guessing icon meaning.",
        "Game results and Jimmycoin rewards are shown as clear text in addition to color and motion, so win, lose, tie, and payout states are not conveyed by animation alone.",
        "Client-only preferences such as mute and guest Jimmycoin are applied after mount to avoid hydration mismatches, while auth-dependent UI fails open into a playable guest mode when setup is incomplete.",
      ],
    },
    designDecisions: {
      title: "Design Decisions",
      items: [
        {
          decision: "Use fake Jimmycoin instead of pure score counters",
          reason:
            "A light economy makes Slots and Make 21 feel connected to the free games without introducing real-money systems.",
          tradeoffs:
            "Players can confuse arcade flavor with gambling if copy is unclear.",
          benefits:
            "Clear loop — win free games, spend Jimmycoin — while footer and UI keep repeating that currency is fake.",
        },
        {
          decision: "Keep guest play working without sign-in",
          reason:
            "The arcade should be fun immediately; leaderboard identity is optional prestige, not a gate.",
          tradeoffs:
            "Guest stats stay device-local and can diverge from signed-in standings.",
          benefits:
            "Lower friction, Chromebook-friendly play, and no forced account creation.",
        },
        {
          decision: "Add Auth.js + Prisma only after the core games shipped",
          reason:
            "Identity and leaderboards are enhancements; the first product needed six solid games and a cohesive hub.",
          tradeoffs:
            "Requires env setup, Google OAuth, and a Postgres database for production standings.",
          benefits:
            "Shared competitive layer without rewriting the client game loop.",
        },
        {
          decision: "Direct AI with staged prompts instead of one endless chat",
          reason:
            "Large features like currency, Slots, and auth are safer when requested separately with explicit constraints.",
          tradeoffs:
            "More prompt writing and review cycles up front.",
          benefits:
            "Fewer broken games, clearer diffs, and output that matches the lounge rules.",
        },
      ],
    },
    challenges: {
      title: "Challenges",
      paragraphs: [
        "The hardest design constraint was aesthetic and product ethics: keep a premium casino-inspired lounge while never implying real gambling. Jimmycoin, payout copy, and the footer all have to reinforce that the currency is fake.",
        "Sharing state across six different game shapes also needed care. Most games record win/loss/tie, Memory Match tracks moves and time, and Slots/Make 21 touch Jimmycoin balances. Helpers keep those concerns separated instead of forcing one mega-state object.",
        "AI-assisted development introduced its own challenge: the model sometimes overbuilt or edged toward real casino patterns. Tight prompts, playtesting, and rejecting out-of-scope suggestions kept the arcade aligned with the original brief.",
      ],
    },
    futureImprovements: {
      title: "Future Improvements",
      paragraphs: [
        "Possible next steps include richer leaderboard seasons, optional daily Jimmycoin challenges, and more lounge themes that still stay local-friendly for guests.",
        "Signed-in profiles could show personal history charts without turning the arcade into a heavy social product.",
        "Because games already share layout and helpers, adding another mini-game is mostly a new route, hub card, stats key, and — if needed — Jimmycoin reward rule.",
      ],
    },
    gallery: {
      title: "Gallery",
      items: [
        {
          src: "/images/projects/arcade-lounge.png",
          alt: "Arcade Lounge hub showing six game cards, Jimmycoin, and the global leaderboard",
          caption:
            "Live hub with six mini-games, Jimmycoin balance, Google sign-in, and global standings.",
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
            "Hub-and-routes architecture over shared layout, Jimmycoin, auth, and sound helpers.",
        },
        {
          src: "/images/projects/arcade-lounge/stats-persistence.svg",
          alt: "Arcade Lounge localStorage stats flow",
          caption:
            "Guest stats and Jimmycoin persist locally; signed-in wins feed the global leaderboard.",
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
