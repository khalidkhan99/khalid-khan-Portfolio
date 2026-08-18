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
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { StatCounter } from "@/app/components/stat-counter";
import {
  philosophy,
  projectStats,
  projects,
  type ProjectIcon,
} from "@/app/data";

const icons: Record<
  ProjectIcon,
  (props: { className?: string }) => React.ReactNode
> = {
  spark: SparkIcon,
  bolt: BoltIcon,
  brain: BrainIcon,
  chart: ChartIcon,
  search: SearchIcon,
  message: MessageIcon,
};

export function FeaturedProject() {
  const featured = projects.find((p) => p.live) ?? projects[0];
  const Icon = icons[featured.icon];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured"
          title="A closer"
          titleAccent="look"
          description="One of the projects I'm proudest of — currently live and in use."
        />
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div
              className="bg-gradient-primary pointer-events-none absolute -top-28 -right-28 size-72 rounded-full opacity-20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -left-28 size-72 rounded-full bg-gradient-purple opacity-20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
              <span className="bg-gradient-primary inline-flex size-16 items-center justify-center rounded-2xl text-white shadow-lg">
                <Icon className="size-8" />
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  LIVE
                </span>
                <h3 className="mt-3 text-2xl font-bold text-heading">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-2xl text-body">
                  {featured.description}
                </p>
                <p className="mt-3 font-mono text-sm text-accent">
                  {featured.metrics}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalIcon className="size-4" />
                    Live Demo
                  </a>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-bright transition-colors hover:border-accent hover:text-accent"
                  >
                    <GithubIcon className="size-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectStats() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur sm:grid-cols-4 sm:divide-y-0">
          {projectStats.map((stat) => (
            <div key={stat.label} className="px-6 py-7 text-center">
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuildPhilosophy() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Philosophy"
          title="How I"
          titleAccent="build"
          description="The principles behind every project I take on."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {philosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60">
                <span className="bg-gradient-primary mb-4 inline-flex size-11 items-center justify-center rounded-xl font-mono text-sm font-bold text-white shadow-lg">
                  0{i + 1}
                </span>
                <h3 className="font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-body">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const architectureLayers = [
  { label: "Client", sub: "Web · Mobile" },
  { label: "API Gateway", sub: "Auth · Rate Limit" },
  { label: "App Service", sub: "FastAPI · Workers" },
  { label: "RAG Pipeline", sub: "Embed · Retrieve · Rerank" },
  { label: "Vector DB", sub: "pgvector · Redis" },
  { label: "LLM", sub: "Mistral · Ollama" },
];

export function FeaturedArchitecture() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="System Design"
          title="Architecture"
          titleAccent="diagram"
          description="How the featured product is wired together — from request to response."
        />
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-border bg-card/60 p-6 sm:p-10">
            <div
              className="bg-gradient-cyan pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-dim">
                  architecture.png
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Placeholder — to be replaced
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {architectureLayers.map((layer, i) => (
                  <div
                    key={layer.label}
                    className="rounded-xl border border-border bg-surface p-4 text-center transition-colors hover:border-accent/60"
                  >
                    <span className="font-mono text-xs text-dim">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 font-semibold text-heading">
                      {layer.label}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] text-body">
                      {layer.sub}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center font-mono text-xs text-dim">
                client &rarr; gateway &rarr; service &rarr; rag &rarr;
                (vector-db · llm) &rarr; response
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
