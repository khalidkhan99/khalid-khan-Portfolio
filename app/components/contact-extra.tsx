import { CheckIcon, MailIcon, PhoneIcon } from "@/app/components/icons";
import { FAQ } from "@/app/components/faq";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { contactValues, site } from "@/app/data";

export function ContactValues() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Me"
          title="What you can"
          titleAccent="expect"
          description="Working with me is straightforward, honest and reliable."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactValues.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 70}>
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

export function Availability() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div
              className="bg-gradient-primary pointer-events-none absolute -top-32 -right-32 size-80 rounded-full opacity-20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="bg-gradient-purple pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full opacity-20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
                <span className="relative flex size-2">
                  <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Currently available for new projects
              </span>
              <h2 className="mt-6 text-3xl font-bold text-heading sm:text-4xl">
                Let&apos;s build your{" "}
                <span className="animate-gradient-text gradient-cyan">
                  next big thing
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-body">
                Tell me about your idea, project or role — I&apos;ll get back to
                you within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <MailIcon className="size-4" />
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-bright transition-colors hover:border-accent hover:text-accent"
                >
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactFaq() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked"
          titleAccent="questions"
          description="Quick answers to the things people usually ask before reaching out."
        />
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-dim">
            <CheckIcon className="size-4 text-accent" />
            Still have questions? Just email me — I reply fast.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
