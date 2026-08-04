import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectCaseStudyNotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Case study not found
          </h1>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            The project case study you are looking for does not exist or has
            been moved.
          </p>
          <Link
            href="/#projects"
            className="mt-6 inline-flex rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Back to projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
