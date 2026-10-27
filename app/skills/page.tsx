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
    "Khalid Khan's technical skills — Next.js, React, TypeScript, Tailwind CSS, Python, Supabase, Stripe, WordPress, and modern web development.",
  keywords: ["Khalid Khan Skills", "Full-Stack Developer", "Next.js Developer", "React Developer", "TypeScript", "Tailwind CSS"],
  alternates: {
    canonical: "https://khalid-khan-dev.vercel.app/skills",
  },
  openGraph: {
    title: "Skills | Khalid Khan Full-Stack & Web Developer",
    description: "Next.js, React, TypeScript, Tailwind CSS, Python and more — Khalid Khan's full skill set.",
    url: "https://khalid-khan-dev.vercel.app/skills",
  },
};

export default function SkillsPage() {
  return (
    <>
      <Skills asH1 />
      <SkillsTools />
      <SkillsLearning />
      <SkillsCertifications />
    </>
  );
}
