import CaseStudyTextBlock from "@/components/case-study/CaseStudyTextBlock";
import type { CaseStudyTextSection } from "@/types/case-study";

type ProjectOverviewProps = CaseStudyTextSection;

export default function ProjectOverview({ title, paragraphs }: ProjectOverviewProps) {
  return (
    <CaseStudyTextBlock id="overview" title={title} paragraphs={paragraphs} />
  );
}
