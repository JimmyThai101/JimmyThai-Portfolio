import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MoreAboutPage from "@/components/about/MoreAboutPage";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `More about me | ${profile.name}`,
  description: profile.moreAbout.intro,
};

export default function AboutRoute() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <MoreAboutPage />
      </main>
      <Footer />
    </>
  );
}
