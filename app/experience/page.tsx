import type { Metadata } from "next";
import { Experience } from "@/app/components/experience";
import { Awards, CareerStats, Testimonials } from "@/app/components/experience-extra";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Khalid Khan's experience — full-stack web applications, e-commerce stores, WordPress development, and CS studies since 2022.",
  keywords: ["Khalid Khan Experience", "Khalid Khan Work History", "Full-Stack Developer Freelance Pakistan", "Web Developer Experience"],
  alternates: {
    canonical: "https://khalid-khan-portfolio.vercel.app/experience",
  },
  openGraph: {
    title: "Experience | Khalid Khan Full-Stack & Web Developer",
    description: "Full-stack web apps, e-commerce platforms, WordPress, and freelance work — Khalid Khan's experience.",
    url: "https://khalid-khan-portfolio.vercel.app/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <CareerStats />
      <Awards />
      <Testimonials />
    </>
  );
}
