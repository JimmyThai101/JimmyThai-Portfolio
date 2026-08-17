import type { CaseStudy } from "@/types/case-study";

export const plannedquestCaseStudy: CaseStudy = {
  slug: "plannedquest",
  projectId: "plannedquest-lead-research",
  title: "PlannedQuest Lead Research Pipeline",
  hero: {
    statement: "Manual district research was too slow—so I built a conservative crawl-to-CSV pipeline.",
    role: "Full-Stack Software Development Intern",
    timeline: "2025–2026",
    technologies: [
      "Next.js",
      "Express",
      "Playwright",
      "OpenAI API",
      "SSE",
      "PostgreSQL",
    ],
    summary:
      "An 8-stage lead-research system for 9–12 college/career-readiness orgs: seed districts, discover pages, extract contacts, score conservatively, then export review-ready CSV.",
  },
  heroImage: {
    src: "/images/projects/plannedquest/pipeline-run.png",
    alt: "Lead Research Pipeline Run tab showing eight completed stages and live logs",
    caption:
      "Live Run tab: ingest → discover → crawl → extract → score → build leads → export, with stage metrics and logs.",
  },
  metrics: [
    { value: "10", label: "Districts processed in the Orange County test run" },
    { value: "149", label: "Contacts extracted from crawled pages" },
    { value: "91", label: "Pages crawled in one deterministic pass" },
    { value: "0 AI", label: "Model calls when scoring already cleared the bar" },
  ],
  problemSolution: {
    title: "CCR outreach needed evidence, not guesswork",
    problem: {
      title: "Manual website hunting",
      body: "Finding decision-makers meant opening staff directories one by one—slow, inconsistent, and hard to export cleanly.",
    },
    solution: {
      title: "Observable 8-stage pipeline",
      body: "Seed CSV in, live stage metrics out, then a wide district CSV plus funnel JSON for review and Postgres loading.",
    },
  },
  process: {
    title: "Eight stages, one conservative pass",
    steps: [
      {
        label: "Ingest seed",
        description: "Load district rows from a California seed CSV.",
      },
      {
        label: "Discover & crawl",
        description: "Find staff/bids pages, then crawl relevant links with error counts visible.",
      },
      {
        label: "Extract & score",
        description: "Pull contacts, qualify orgs, and keep only people who clear the bar.",
      },
      {
        label: "Build & export",
        description: "Assemble lead rows, write funnel JSON, and export an 86-column CSV.",
      },
      {
        label: "Review in dashboard",
        description: "Overview and Leads tabs show score bands, email types, and review status.",
      },
      {
        label: "AI only if needed",
        description: "OpenAI stays off until ambiguous districts need ranking help.",
      },
    ],
  },
  quote: {
    text: "AI evaluates—the researcher decides.",
    attribution: "Pipeline rule during calibration and review",
  },
  shots: [
    {
      src: "/images/projects/plannedquest/overview-metrics.png",
      alt: "Overview tab with organizations, contacts, leads, and review status cards",
      caption:
        "Overview after a run: 10 orgs, 149 contacts, 7 people clearing the bar, and leads queued for manual review.",
    },
    {
      src: "/images/projects/plannedquest/dashboard-and-export.png",
      alt: "Dashboard beside VS Code showing leads.csv export and local engine running",
      caption:
        "Next.js dashboard on :3000, Express engine on :3001, and the exported leads.csv open for inspection.",
    },
    {
      src: "/images/projects/plannedquest/roadmap-phases.png",
      alt: "Roadmap showing Built, Calibrate, Ship, and Scale phases",
      caption:
        "Roadmap from Built → Calibrate → Ship → Scale: CSV/Postgres next, then broader CA coverage.",
    },
    {
      src: "/images/projects/plannedquest/pipeline-run.png",
      alt: "Completed pipeline run with stage-by-stage metrics",
      caption:
        "One OC seed run finished with 10 leads, 149 contacts, and transparent stage totals.",
    },
  ],
  decisions: {
    title: "Three calls that kept quality high",
    items: [
      {
        decision: "Deterministic first",
        why: "This OC run used 0 AI calls—scoring already produced reviewable leads.",
      },
      {
        decision: "Split dashboard and engine",
        why: "SSE keeps the Run tab live while the Express engine owns the long crawl.",
      },
      {
        decision: "Wide CSV + funnel JSON",
        why: "Reviewers get a district row; Postgres can COPY with lead_id / cds_code keys.",
      },
    ],
  },
  contribution: {
    title: "What I personally built",
    items: [
      "Express research engine with staged ingest → export flow",
      "Next.js Run / Leads / Overview dashboard with live SSE progress",
      "Conservative contact extraction, org/people scoring, and source tracking",
      "CSV + funnel JSON outputs prepared for Postgres and landing pages",
    ],
  },
  lessons: {
    title: "What changed after testing",
    items: [
      "Stage metrics make long crawls trustworthy mid-run.",
      "Most districts never need AI if scoring thresholds are tuned.",
      "Review queues matter—qualified contacts still wait for a human.",
    ],
  },
  details: [
    {
      title: "Sample Orange County run totals",
      body: "Seed 10 districts → discover 95 pages → crawl 91 (87 relevant, 4 errors) → extract 149 contacts → 10/10 orgs qualified → 7 people clear the bar → 10 lead rows exported.",
    },
    {
      title: "Calibration focus now",
      body: "OpenAI only for ambiguous districts, Brave search for staff/bids discovery, CA seed expansion, and config tuning from the Leads tab.",
    },
    {
      title: "AI guardrails (collapsed detail)",
      body: "Use only provided text. Do not invent contacts, emails, titles, or URLs. Cite evidence. Prefer deterministic wins; route weak cases to human review.",
    },
  ],
  cta: {
    title: "See the pipeline story on the homepage",
    body: "The featured project card links back here. Jump to projects anytime to compare with the rest of the portfolio.",
    primaryLabel: "Back to projects",
    primaryHref: "/#projects",
    secondaryLabel: "Home",
    secondaryHref: "/",
  },
  nav: [
    { id: "hook", label: "Hook" },
    { id: "impact", label: "Impact" },
    { id: "problem", label: "Problem" },
    { id: "process", label: "Process" },
    { id: "gallery", label: "Visuals" },
    { id: "built", label: "My work" },
    { id: "next", label: "Next" },
  ],
};
