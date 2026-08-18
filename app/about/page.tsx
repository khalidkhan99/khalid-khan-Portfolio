import type { Metadata } from "next";
import { AboutProcess, AboutServices } from "@/app/components/about-extra";
import { About } from "@/app/components/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Khalid Khan — Student & AI Developer from Pakistan. Building AI chatbots, LLM tools, and web applications with Python, Next.js, and more.",
  keywords: ["Khalid Khan About", "Khalid Khan AI Developer", "Khalid Khan Pakistan", "AI Student Pakistan"],
  alternates: {
    canonical: "https://khalid-khan-portfolio.vercel.app/about",
  },
  openGraph: {
    title: "About Khalid Khan | AI Developer",
    description: "Learn about Khalid Khan — Student & AI Developer from Pakistan.",
    url: "https://khalid-khan-portfolio.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <AboutServices />
      <AboutProcess />
    </>
  );
}
