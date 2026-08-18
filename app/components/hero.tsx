import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  XIcon,
} from "@/app/components/icons";
import { Particles } from "@/app/components/particles";
import { StatCounter } from "@/app/components/stat-counter";
import { Typewriter } from "@/app/components/typewriter";
import { heroCode, site, stats, typingPhrases } from "@/app/data";

const tokenColor: Record<string, string> = {
  kw: "text-code-kw",
  fn: "text-code-fn",
  str: "text-code-str",
};

function CodeLine({ tokens }: { tokens: [string, string][] }) {
  return (
    <p className="whitespace-pre font-mono text-[13px] leading-6 text-bright">
      {tokens.map(([kind, text], i) => (
        <span key={i} className={kind ? tokenColor[kind] : undefined}>
          {text}
        </span>
      ))}
    </p>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16"
    >
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <Particles />
      </div>
      <div
        className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-gradient-cyan opacity-20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -bottom-24 size-96 rounded-full bg-gradient-purple opacity-25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-bright backdrop-blur">
            <span className="relative flex size-2">
              <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          <h1 className="text-shadow-hero mt-6 font-mono text-4xl font-bold tracking-tight text-heading min-[390px]:text-5xl sm:text-6xl lg:text-7xl">
            Khalid<span className="gradient-cyan"> Khan</span>
          </h1>

          <p className="mt-5 text-xl font-medium text-bright sm:text-2xl">
            <Typewriter phrases={typingPhrases} />
          </p>
          <p className="mt-3 max-w-xl text-body">
            Building real AI tools — chatbots, content generators, and web apps — that solve actual problems for clients worldwide.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-dim">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-4 text-accent" />
              {site.location}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs">
              <span className="size-1.5 rounded-full bg-accent" />
              {site.timezone}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.resume}
              download
              aria-label="Download resume (PDF)"
              className="hidden items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20 sm:inline-flex"
            >
              <DownloadIcon className="size-4" />
              Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-bright transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-border-hover" aria-hidden="true" />
            {[
              { href: site.github, label: "GitHub", Icon: GithubIcon },
              { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
              { href: site.twitter, label: "X (Twitter)", Icon: XIcon },
              { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-bright transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="animate-float absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-2xl"
            aria-hidden="true"
          />
          <div className="glow-cyan relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-dim">khalid.ts</span>
            </div>
            <div className="overflow-x-auto px-5 py-4">
              <CodeLine tokens={heroCode.lines} />
              {heroCode.body.map((line, i) => (
                <CodeLine key={i} tokens={line} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-5 sm:px-6 sm:py-7">
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
