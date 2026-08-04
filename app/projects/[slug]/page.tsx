import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/data/case-studies";

type ProjectCaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Jimmy Thai",
    };
  }

  return {
    title: `${caseStudy.title} Case Study | Jimmy Thai`,
    description: caseStudy.hero.summary,
  };
}

export default async function ProjectCaseStudyRoute({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <CaseStudyPage caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  );
}
