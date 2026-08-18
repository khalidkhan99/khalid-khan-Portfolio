import { QuoteIcon } from "@/app/components/icons";
import { SectionHeading } from "@/app/components/section-heading";
import { testimonials } from "@/app/data";

export function TestimonialsMarquee() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recommendations"
          title="What people"
          titleAccent="say"
          description="Reviews from clients, colleagues and collaborators — hover to pause."
        />
      </div>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32"
          aria-hidden="true"
        />
        <div className="animate-marquee flex w-max items-stretch gap-6 px-4">
          {items.map((item, i) => (
            <figure
              key={`${item.name}-${i}`}
              className="w-[22rem] shrink-0 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <QuoteIcon className="size-6 text-accent" />
              <blockquote className="mt-3 text-sm leading-relaxed text-body">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-3">
                <p className="text-sm font-semibold text-heading">{item.name}</p>
                <p className="text-xs text-dim">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
