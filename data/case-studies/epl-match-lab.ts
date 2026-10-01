import type { CaseStudy } from "@/types/case-study";

export const eplMatchLabCaseStudy: CaseStudy = {
  slug: "epl-match-lab",
  projectId: "epl-match-lab",
  title: "EPL Match Lab",
  hero: {
    statement: "Premier League match analysis, in plain English—not a prediction engine.",
    role: "Personal Project — Designer & Developer",
    timeline: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FPL API",
      "Wikidata",
      "TheSportsDB",
    ],
    summary:
      "A beginner-friendly lab: pick any two Premier League clubs, read a side-by-side snapshot, then optionally open the table, fixtures, squads, wage notes, and a glossary.",
  },
  heroImage: {
    src: "/images/projects/epl-match-lab.svg",
    alt: "EPL Match Lab snapshot comparing Arsenal and Manchester City with goals, xG, and form",
    caption:
      "Default snapshot: any two clubs, counting stats, coaches when listed, and a reading that refuses to predict the score.",
  },
  metrics: [
    { value: "20", label: "Premier League clubs you can pair" },
    { value: "6", label: "Lab sections, snapshot first" },
    { value: "3", label: "Public feeds: FPL, Wikidata, TheSportsDB" },
    { value: "0", label: "Invented wages or match forecasts" },
  ],
  problemSolution: {
    title: "Soccer stats sites assume you already speak the sport",
    problem: {
      title: "Jargon, then a fake forecast",
      body: "Most match pages dump xG and form on first-time fans, or hide a win-probability widget that pretends to know the result.",
    },
    solution: {
      title: "Teach first, then compare",
      body: "An intro explains the sport in a few sentences. The lab compares two clubs in counting stats and writes the difference in plain English—then labels FPL prices as a game and leaves missing wages blank.",
    },
  },
  process: {
    title: "Intro, then one matchup, then optional depth",
    steps: [
      {
        label: "Calm landing",
        description: "Explain soccer, the Premier League, and public-feed limits before anyone picks a club.",
      },
      {
        label: "League snapshot API",
        description: "FPL fixtures build the table, form, and scores; squads and xG come from the same public bootstrap.",
      },
      {
        label: "Matchup shell",
        description: "Swap, random pair, copyable URL, and a pinned last pair in localStorage.",
      },
      {
        label: "Plain-English reading",
        description: "Table place, scoring rate, defense, xG, and form—plus an explicit not-a-prediction line.",
      },
      {
        label: "Optional depth",
        description: "League table, live/upcoming fixtures, searchable squads, TheSportsDB wage notes, glossary.",
      },
      {
        label: "Blank when unknown",
        description: "Wikidata coaches and community wages only render if the feed actually has them.",
      },
    ],
  },
  quote: {
    text: "This is a reading of counting stats, not a match prediction.",
    attribution: "Product boundary on every snapshot",
  },
  shots: [
    {
      src: "/images/projects/epl-match-lab/lab-tabs.svg",
      alt: "Six lab sections from snapshot through glossary",
      caption:
        "Snapshot is the default. Table, fixtures, players, money, and words stay one tap away.",
    },
    {
      src: "/images/projects/epl-match-lab/data-sources.svg",
      alt: "Diagram of FPL, Wikidata, and TheSportsDB feeds",
      caption:
        "League table and scores from FPL fixtures. Coaches from Wikidata. Stadium and wages from TheSportsDB when listed.",
    },
    {
      src: "/images/projects/epl-match-lab/plain-english.svg",
      alt: "Diagram contrasting a prediction widget with a plain-English reading",
      caption:
        "No win percentages. The reading explains who is higher, who scores more, and what xG means.",
    },
  ],
  decisions: {
    title: "Choices that kept it honest",
    items: [
      {
        decision: "Public feeds only",
        why: "No paid scrape. If a coach, wage, or contract date is not listed, the UI stays blank instead of guessing.",
      },
      {
        decision: "Reading, not a model",
        why: "A first-time fan needs a comparison they can trust more than a made-up 58% win chance.",
      },
      {
        decision: "Label Fantasy prices as a game",
        why: "FPL £m values look like salaries. Copy has to say they are not.",
      },
    ],
  },
  contribution: {
    title: "What I personally built",
    items: [
      "Intro page for first-time soccer fans and the six-section lab shell",
      "League snapshot from FPL fixtures, standings, form, live minutes, and squads",
      "Plain-English match reading, shareable pair URLs, and optional Wikidata/TheSportsDB notes",
      "Searchable player lists with injury watch, glossary, and missing-data copy",
    ],
  },
  lessons: {
    title: "What I learned building it",
    items: [
      "Beginner copy is a product feature, not a tooltip.",
      "Blank is more trustworthy than a guessed wage.",
      "A stats page still needs a hard line between reading and predicting.",
    ],
  },
  details: [
    {
      title: "What you can do in the live lab",
      body: "Pick any two of the 20 clubs. Read goals, conceded, xG, form, coaches, and stadiums. Open the full table, current and next gameweek scores, head-to-head, searchable squads, community wage notes when listed, and a short glossary.",
    },
    {
      title: "Data sources",
      body: "Fantasy Premier League public API for table, fixtures, players, and xG. Wikidata for current managers. TheSportsDB for stadium, location, and optional wage/signing notes. Squads refresh about every 30 minutes; fixtures about every 5.",
    },
    {
      title: "AI collaboration note",
      body: "Built with Cursor from a beginner-first brief. I kept the no-prediction rule, public-feed-only rule, and blank-if-missing rule through later feature passes.",
    },
  ],
  cta: {
    title: "Open the lab",
    body: "Start on the intro if you have never watched soccer, then pick any two clubs.",
    primaryLabel: "Live demo",
    primaryHref: "https://epl-match-lab-rho.vercel.app/",
    primaryExternal: true,
    secondaryLabel: "GitHub",
    secondaryHref: "https://github.com/JimmyThai101/epl-match-lab",
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
