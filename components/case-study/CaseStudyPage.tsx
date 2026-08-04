import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ProjectOverview from "@/components/case-study/ProjectOverview";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import LogicFlow from "@/components/case-study/LogicFlow";
import TechnologyStack from "@/components/case-study/TechnologyStack";
import DesignDecisions from "@/components/case-study/DesignDecisions";
import Methodology from "@/components/case-study/Methodology";
import AIIntegration from "@/components/case-study/AIIntegration";
import DesignProcess from "@/components/case-study/DesignProcess";
import Results from "@/components/case-study/Results";
import LessonsLearned from "@/components/case-study/LessonsLearned";
import NextSteps from "@/components/case-study/NextSteps";
import Gallery from "@/components/case-study/Gallery";
import CaseStudyTextBlock from "@/components/case-study/CaseStudyTextBlock";
import type { CaseStudy, CaseStudySectionKey } from "@/types/case-study";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
};

function renderSection(caseStudy: CaseStudy, key: CaseStudySectionKey) {
  const { sections } = caseStudy;

  switch (key) {
    case "problem": {
      const section = sections.problem;
      if (!section) return null;
      return (
        <CaseStudyTextBlock
          id="problem"
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    }
    case "role": {
      const section = sections.role;
      if (!section) return null;
      return (
        <CaseStudyTextBlock
          id="role"
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    }
    case "overview": {
      const section = sections.overview;
      if (!section) return null;
      return (
        <ProjectOverview title={section.title} paragraphs={section.paragraphs} />
      );
    }
    case "architecture": {
      const section = sections.architecture;
      if (!section) return null;
      return caseStudy.architectureLayout === "grid" ? (
        <LogicFlow
          title={section.title}
          description={section.description}
          steps={section.steps}
        />
      ) : (
        <ArchitectureDiagram
          title={section.title}
          description={section.description}
          steps={section.steps}
        />
      );
    }
    case "technologyStack": {
      const section = sections.technologyStack;
      if (!section) return null;
      return (
        <TechnologyStack
          title={section.title}
          description={section.description}
          items={section.items}
        />
      );
    }
    case "designDecisions": {
      const section = sections.designDecisions;
      if (!section) return null;
      return <DesignDecisions title={section.title} items={section.items} />;
    }
    case "methodology": {
      const section = sections.methodology;
      if (!section) return null;
      return (
        <Methodology
          title={section.title}
          description={section.description}
          steps={section.steps}
        />
      );
    }
    case "aiIntegration": {
      const section = sections.aiIntegration;
      if (!section) return null;
      return (
        <AIIntegration title={section.title} paragraphs={section.paragraphs} />
      );
    }
    case "designProcess": {
      const section = sections.designProcess;
      if (!section) return null;
      return (
        <DesignProcess
          title={section.title}
          description={section.description}
          steps={section.steps}
        />
      );
    }
    case "collaboration": {
      const section = sections.collaboration;
      if (!section) return null;
      return (
        <CaseStudyTextBlock
          id="collaboration"
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    }
    case "results": {
      const section = sections.results;
      if (!section) return null;
      return <Results title={section.title} paragraphs={section.paragraphs} />;
    }
    case "lessonsLearned": {
      const section = sections.lessonsLearned;
      if (!section) return null;
      return (
        <LessonsLearned title={section.title} paragraphs={section.paragraphs} />
      );
    }
    case "animationApproach": {
      const section = sections.animationApproach;
      if (!section) return null;
      return (
        <CaseStudyTextBlock
          id="animation-approach"
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    }
    case "accessibility": {
      const section = sections.accessibility;
      if (!section) return null;
      return (
        <CaseStudyTextBlock
          id="accessibility"
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    }
    case "challenges": {
      const section = sections.challenges;
      if (!section) return null;
      return (
        <CaseStudyTextBlock
          id="challenges"
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    }
    case "futureImprovements": {
      const section = sections.futureImprovements;
      if (!section) return null;
      return (
        <CaseStudyTextBlock
          id="future-improvements"
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    }
    case "nextSteps": {
      const section = sections.nextSteps;
      if (!section) return null;
      return <NextSteps title={section.title} paragraphs={section.paragraphs} />;
    }
    case "gallery": {
      const section = sections.gallery;
      if (!section) return null;
      return <Gallery title={section.title} items={section.items} />;
    }
    default:
      return null;
  }
}

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  return (
    <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <CaseStudyHero title={caseStudy.title} hero={caseStudy.hero} />

      {caseStudy.sectionOrder.map((key) => (
        <div key={key}>{renderSection(caseStudy, key)}</div>
      ))}
    </article>
  );
}
