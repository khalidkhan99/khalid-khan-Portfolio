import type { Metadata } from "next";
import { Experience } from "@/app/components/experience";
import { Awards, CareerStats } from "@/app/components/experience-extra";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Khalid Khan's experience — AI development, WordPress projects, and freelance web development since 2022.",
  keywords: ["Khalid Khan Experience", "Khalid Khan Work History", "AI Developer Freelance Pakistan"],
  alternates: {
    canonical: "https://khalid-khan-portfolio.vercel.app/experience",
  },
  openGraph: {
    title: "Experience | Khalid Khan AI Developer",
    description: "AI development, WordPress, and freelance work — Khalid Khan's experience.",
    url: "https://khalid-khan-portfolio.vercel.app/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <CareerStats />
      <Awards />
    </>
  );
}
