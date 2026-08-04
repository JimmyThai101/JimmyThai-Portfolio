import CaseStudyTextBlock from "@/components/case-study/CaseStudyTextBlock";
import type { CaseStudyTextSection } from "@/types/case-study";

type ResultsProps = CaseStudyTextSection;

export default function Results({ title, paragraphs }: ResultsProps) {
  return <CaseStudyTextBlock id="results" title={title} paragraphs={paragraphs} />;
}
