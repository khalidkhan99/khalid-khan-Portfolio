import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About pageHref="/about" />
        <Skills pageHref="/skills" />
        <Projects pageHref="/projects" />
        <Experience pageHref="/experience" />
        <Contact pageHref="/contact" />
      </main>
    </>
  );
}
