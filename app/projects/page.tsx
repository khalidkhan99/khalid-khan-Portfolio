import type { Metadata } from "next";
import { Projects } from "@/app/components/projects";
import {
  BuildPhilosophy,
  FeaturedProject,
  ProjectStats,
} from "@/app/components/projects-extra";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Khalid Khan's projects — full-stack e-commerce stores, 30+ utility tools web suites, and modern responsive web applications built with Next.js, React, and TypeScript.",
  keywords: ["Khalid Khan Projects", "Fashionstyle E-Commerce", "AllTools Online", "Next.js Projects", "Full-Stack Portfolio"],
  alternates: {
    canonical: "https://khalid-khan-portfolio.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Khalid Khan Full-Stack & Web Developer",
    description: "Full-stack e-commerce stores, utility web tools, and web applications by Khalid Khan.",
    url: "https://khalid-khan-portfolio.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <FeaturedProject />
      <ProjectStats />
      <BuildPhilosophy />
    </>
  );
}
