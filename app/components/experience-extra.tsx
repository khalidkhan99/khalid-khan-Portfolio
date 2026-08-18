import {
  QuoteIcon,
  TrophyIcon,
} from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { StatCounter } from "@/app/components/stat-counter";
import { awards, careerStats, testimonials } from "@/app/data";

export function CareerStats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur sm:grid-cols-4 sm:divide-y-0">
          {careerStats.map((stat) => (
            <div key={stat.label} className="px-6 py-7 text-center">
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards &"
          titleAccent="achievements"
          description="Milestones and highlights from my journey."
        />
        {/* Center aligned — only 2 awards so max-w keeps them centered */}
        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {awards.map((award, i) => (
            <Reveal key={`${award.title}-${award.year}`} delay={(i % 4) * 70}>
              <div className="group flex h-full flex-col items-start rounded-2xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-accent/60">
                <span className="bg-gradient-primary mb-4 inline-flex size-12 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110">
                  <TrophyIcon className="size-5" />
                </span>
                <h3 className="text-sm font-semibold text-heading">
                  {award.title}
                </h3>
                <p className="mt-2 text-xs text-accent">{award.event}</p>
                <p className="mt-1 font-mono text-xs text-dim">{award.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people"
          titleAccent="say"
          description="Feedback from the clients I've had the pleasure of working with."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60">
                <QuoteIcon className="size-7 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-body">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-heading">
                    {item.name}
                  </p>
                  <p className="text-xs text-dim">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
