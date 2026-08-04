import CaseStudyTextBlock from "@/components/case-study/CaseStudyTextBlock";
import type { CaseStudyTextSection } from "@/types/case-study";

type LessonsLearnedProps = CaseStudyTextSection;

export default function LessonsLearned({ title, paragraphs }: LessonsLearnedProps) {
  return (
    <CaseStudyTextBlock
      id="lessons-learned"
      title={title}
      paragraphs={paragraphs}
    />
  );
}
