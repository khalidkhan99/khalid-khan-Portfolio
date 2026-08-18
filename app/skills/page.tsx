import type { Metadata } from "next";
import { Skills } from "@/app/components/skills";
import {
  SkillsCertifications,
  SkillsLearning,
  SkillsTools,
} from "@/app/components/skills-extra";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Khalid Khan's technical skills — Python, Next.js, React, TypeScript, LangChain, LLaMA, Streamlit, WordPress, and more.",
  keywords: ["Khalid Khan Skills", "Python Developer", "Next.js Developer", "LangChain", "LLM Skills"],
  alternates: {
    canonical: "https://khalid-khan-portfolio.vercel.app/skills",
  },
  openGraph: {
    title: "Skills | Khalid Khan AI Developer",
    description: "Python, Next.js, LangChain, LLaMA and more — Khalid Khan's full skill set.",
    url: "https://khalid-khan-portfolio.vercel.app/skills",
  },
};

export default function SkillsPage() {
  return (
    <>
      <Skills />
      <SkillsTools />
      <SkillsLearning />
      <SkillsCertifications />
    </>
  );
}
