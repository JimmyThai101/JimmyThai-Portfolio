import { aquariumClockCaseStudy } from "@/data/case-studies/aquarium-clock";
import { plannedquestCaseStudy } from "@/data/case-studies/plannedquest";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  plannedquestCaseStudy,
  aquariumClockCaseStudy,
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((caseStudy) => caseStudy.slug);
}

export function getCaseStudyByProjectId(
  projectId: string,
): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.projectId === projectId);
}
