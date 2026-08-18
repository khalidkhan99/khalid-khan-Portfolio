import { BriefcaseIcon } from "@/app/components/icons";
import { SectionHeading } from "@/app/components/section-heading";
import { Reveal } from "@/app/components/reveal";
import { experience } from "@/app/data";

export function Experience({
  showHeading = true,
  pageHref,
}: {
  showHeading?: boolean;
  pageHref?: string;
}) {
  return (
    <section
      id="experience"
      className="relative scroll-mt-16 bg-surface/40 py-24"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Experience"
            title="My career"
            titleAccent="journey"
            description="Building software and AI tools — from freelance projects to open-source work."
            actionHref={pageHref}
            actionLabel="View experience"
          />
        ) : null}

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 70}>
              <div className="timeline-line relative flex gap-5 pl-0">
                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <span className="bg-gradient-primary flex size-8 items-center justify-center rounded-full text-white shadow-lg">
                    <BriefcaseIcon />
                  </span>
                </div>

                <div className="flex-1 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-heading">
                        {job.role}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-dim">
                        {job.period}
                      </span>
                      <span className="rounded-md bg-gradient-primary px-2.5 py-1 text-[11px] font-semibold text-white">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-body">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 size-4 shrink-0 text-accent"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
