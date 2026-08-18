import type { Metadata } from "next";
import { Projects } from "@/app/components/projects";
import { FeaturedProject, ProjectStats } from "@/app/components/projects-extra";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Khalid Khan's projects — AI chatbots, content generators, and web apps built with Python, LLaMA, LangChain, Next.js, and Streamlit.",
  keywords: ["Khalid Khan Projects", "AI Chatbot Project", "AI Content Generator", "Python LLM Project"],
  alternates: {
    canonical: "https://khalid-khan-portfolio.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Khalid Khan AI Developer",
    description: "AI chatbots, content generators, and web apps by Khalid Khan.",
    url: "https://khalid-khan-portfolio.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <FeaturedProject />
      <ProjectStats />
    </>
  );
}
