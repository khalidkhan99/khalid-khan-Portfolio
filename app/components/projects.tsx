import {
  BoltIcon,
  BrainIcon,
  ChartIcon,
  ExternalIcon,
  GithubIcon,
  MessageIcon,
  SearchIcon,
  SparkIcon,
} from "@/app/components/icons";
import { SectionHeading } from "@/app/components/section-heading";
import { Reveal } from "@/app/components/reveal";
import { projects, type ProjectIcon } from "@/app/data";

const icons: Record<ProjectIcon, (props: { className?: string }) => React.ReactNode> = {
  spark: SparkIcon,
  bolt: BoltIcon,
  brain: BrainIcon,
  chart: ChartIcon,
  search: SearchIcon,
  message: MessageIcon,
};

export function Projects({
  showHeading = true,
  pageHref,
}: {
  showHeading?: boolean;
  pageHref?: string;
}) {
  return (
    <section id="projects" className="relative scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Projects"
            title="Things I've"
            titleAccent="built"
            description="A selection of AI and software projects built with modern tools and shipped for real use."
            actionHref={pageHref}
            actionLabel="See all projects"
          />
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = icons[project.icon];
            return (
              <Reveal key={project.title} delay={(i % 3) * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-card-hover">
                  <div
                    className="bg-gradient-primary pointer-events-none absolute -top-20 -right-20 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between p-6 pb-4">
                    <span className="bg-gradient-primary inline-flex size-12 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110">
                      <Icon className="size-6" />
                    </span>
                    {project.live ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        LIVE
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-6">
                    <h3 className="font-semibold text-heading transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-body">
                      {project.description}
                    </p>
                    <p className="mt-3 font-mono text-xs text-accent">
                      {project.metrics}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                      {project.live ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="group inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                        >
                          <ExternalIcon className="size-4" />
                          Live Demo
                        </a>
                      ) : null}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                        className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-bright transition-colors hover:border-accent hover:text-accent"
                      >
                        <GithubIcon className="size-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
