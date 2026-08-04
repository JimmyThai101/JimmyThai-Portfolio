import CaseStudyTextBlock from "@/components/case-study/CaseStudyTextBlock";
import type { CaseStudyTextSection } from "@/types/case-study";

type AIIntegrationProps = CaseStudyTextSection;

export default function AIIntegration({ title, paragraphs }: AIIntegrationProps) {
  return (
    <CaseStudyTextBlock id="ai-integration" title={title} paragraphs={paragraphs} />
  );
}
