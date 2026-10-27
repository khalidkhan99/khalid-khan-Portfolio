import type { Metadata } from "next";
import { AboutInterests, AboutProcess, AboutServices } from "@/app/components/about-extra";
import { About } from "@/app/components/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Khalid Khan — Full-Stack & Web Developer from Pakistan. Building modern e-commerce stores, web applications, and developer tools with Next.js, React, and TypeScript.",
  keywords: ["Khalid Khan About", "Khalid Khan Full-Stack Developer", "Khalid Khan Web Developer", "Khalid Khan Pakistan"],
  alternates: {
    canonical: "https://khalid-khan-dev.vercel.app/about",
  },
  openGraph: {
    title: "About Khalid Khan | Full-Stack & Web Developer",
    description: "Learn about Khalid Khan — Full-Stack & Web Developer from Pakistan.",
    url: "https://khalid-khan-dev.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <About asH1 />
      <AboutServices />
      <AboutProcess />
      <AboutInterests />
    </>
  );
}
