import CaseStudyTextBlock from "@/components/case-study/CaseStudyTextBlock";
import type { CaseStudyTextSection } from "@/types/case-study";

type NextStepsProps = CaseStudyTextSection;

export default function NextSteps({ title, paragraphs }: NextStepsProps) {
  return (
    <CaseStudyTextBlock id="next-steps" title={title} paragraphs={paragraphs} />
  );
}
