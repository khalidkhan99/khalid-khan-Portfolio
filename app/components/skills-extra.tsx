import { BadgeCheckIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { certifications, learning, tools } from "@/app/data";

export function SkillsTools() {
  // Split tools into 3 rows
  const chunk1 = tools.slice(0, 5);
  const chunk2 = tools.slice(5, 10);
  const chunk3 = tools.slice(10);
  const row1 = [...chunk1, ...chunk1, ...chunk1, ...chunk1];
  const row2 = [...chunk2, ...chunk2, ...chunk2, ...chunk2];
  const row3 = [...chunk3, ...chunk3, ...chunk3, ...chunk3];

  const pill = (tool: string, i: number) => (
    <span
      key={`${tool}-${i}`}
      className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-mono text-sm text-bright transition-colors hover:border-accent/60 hover:text-accent"
    >
      <span className="size-1.5 rounded-full bg-gradient-cyan" />
      {tool}
    </span>
  );

  const fade = (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" aria-hidden="true" />
    </>
  );

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title="Tools I use"
          titleAccent="daily"
          description="The stack behind every project."
        />
      </div>

      {/* Row 1 — goes right */}
      <div className="relative mb-4">
        {fade}
        <div className="animate-marquee flex w-max items-center gap-4 px-4">
          {row1.map((t, i) => pill(t, i))}
        </div>
      </div>

      {/* Row 2 — goes left */}
      <div className="relative mb-4">
        {fade}
        <div className="animate-marquee-reverse flex w-max items-center gap-4 px-4">
          {row2.map((t, i) => pill(t, i))}
        </div>
      </div>

      {/* Row 3 — goes right */}
      <div className="relative">
        {fade}
        <div className="animate-marquee flex w-max items-center gap-4 px-4">
          {row3.map((t, i) => pill(t, i))}
        </div>
      </div>
    </section>
  );
}

export function SkillsLearning() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Always Learning"
          title="Currently"
          titleAccent="exploring"
          description="I never stop learning — these are the areas I'm actively studying right now."
        />
        {/* Center aligned pills */}
        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          {learning.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <span className="inline-flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-bright transition-colors hover:border-accent/60">
                {item.name}
                <span className="rounded-md border border-accent/30 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-accent">
                  {item.progress}%
                </span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsCertifications() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications &"
          titleAccent="courses"
          description="Proof of the hours spent learning — verified and kept current."
        />
        {/* Center aligned — 3 certs, centered in max-w-3xl */}
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 4) * 70}>
              <div className="group flex h-full flex-col items-start rounded-2xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-accent/60">
                <span className="bg-gradient-primary mb-4 inline-flex size-11 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110">
                  <BadgeCheckIcon className="size-5" />
                </span>
                <h3 className="text-sm font-semibold text-heading">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs text-accent">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-dim">{cert.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
