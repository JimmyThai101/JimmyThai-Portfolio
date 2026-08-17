export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyCompareSide = {
  title: string;
  body: string;
};

export type CaseStudyProcessStep = {
  label: string;
  description: string;
};

export type CaseStudyShot = {
  src: string;
  alt: string;
  caption: string;
};

export type CaseStudyDecision = {
  decision: string;
  why: string;
};

export type CaseStudyDetail = {
  title: string;
  body: string;
};

export type CaseStudyCta = {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
};

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

export type CaseStudyHero = {
  /** Bold conclusion-style statement under the title */
  statement: string;
  role: string;
  timeline: string;
  /** Keep to 4–6 technologies */
  technologies: string[];
  /** 1–2 sentences max */
  summary: string;
};

export type CaseStudy = {
  slug: string;
  projectId: string;
  title: string;
  hero: CaseStudyHero;
  heroImage: CaseStudyShot;
  metrics: CaseStudyMetric[];
  problemSolution: {
    title: string;
    problem: CaseStudyCompareSide;
    solution: CaseStudyCompareSide;
  };
  process: {
    title: string;
    steps: CaseStudyProcessStep[];
  };
  quote: {
    text: string;
    attribution?: string;
  };
  shots: CaseStudyShot[];
  decisions: {
    title: string;
    items: CaseStudyDecision[];
  };
  contribution: {
    title: string;
    items: string[];
  };
  lessons: {
    title: string;
    items: string[];
  };
  /** Secondary details + prompts live here, collapsed by default */
  details: CaseStudyDetail[];
  cta: CaseStudyCta;
  nav: CaseStudyNavItem[];
};
