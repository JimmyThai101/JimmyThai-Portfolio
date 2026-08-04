export type CaseStudyTextSection = {
  title: string;
  paragraphs: string[];
};

export type CaseStudyHero = {
  role: string;
  timeline: string;
  technologies: string[];
  summary: string;
};

export type FlowStep = {
  label: string;
  description?: string;
};

export type TechnologyItem = {
  name: string;
  reason: string;
};

export type DesignDecision = {
  decision: string;
  reason: string;
  tradeoffs: string;
  benefits: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type CaseStudySections = {
  problem?: CaseStudyTextSection;
  role?: CaseStudyTextSection;
  overview?: CaseStudyTextSection;
  architecture?: {
    title: string;
    description?: string;
    steps: FlowStep[];
  };
  technologyStack?: {
    title: string;
    description?: string;
    items: TechnologyItem[];
  };
  designDecisions?: {
    title: string;
    items: DesignDecision[];
  };
  methodology?: {
    title: string;
    description?: string;
    steps: FlowStep[];
  };
  aiIntegration?: CaseStudyTextSection;
  designProcess?: {
    title: string;
    description?: string;
    steps: FlowStep[];
  };
  collaboration?: CaseStudyTextSection;
  results?: CaseStudyTextSection;
  lessonsLearned?: CaseStudyTextSection;
  animationApproach?: CaseStudyTextSection;
  accessibility?: CaseStudyTextSection;
  challenges?: CaseStudyTextSection;
  futureImprovements?: CaseStudyTextSection;
  nextSteps?: CaseStudyTextSection;
  gallery?: {
    title: string;
    items: GalleryItem[];
  };
};

export type CaseStudySectionKey = keyof CaseStudySections;

export type CaseStudy = {
  slug: string;
  projectId: string;
  title: string;
  hero: CaseStudyHero;
  sections: CaseStudySections;
  sectionOrder: CaseStudySectionKey[];
  /** Use "grid" for compact step layouts; defaults to vertical diagram. */
  architectureLayout?: "diagram" | "grid";
};
