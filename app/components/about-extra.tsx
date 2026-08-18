import {
  BrainIcon,
  CloudIcon,
  CodeIcon,
  SparkIcon,
} from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import {
  interests,
  processSteps,
  services,
  type ServiceIcon,
} from "@/app/data";

const serviceIcons: Record<
  ServiceIcon,
  (props: { className?: string }) => React.ReactNode
> = {
  brain: BrainIcon,
  spark: SparkIcon,
  code: CodeIcon,
  cloud: CloudIcon,
};

export function AboutServices() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Services &"
          titleAccent="expertise"
          description="Four ways I help teams ship intelligent products that actually run."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 2) * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60">
                  <span className="bg-gradient-primary mb-4 inline-flex size-12 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-semibold text-heading">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutProcess() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How I"
          titleAccent="work"
          description="A simple workflow — from your idea to a live product."
        />
        {/* Center aligned cards with number instead of blank icon */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-accent/60">
                {/* Gradient number instead of broken icon */}
                <span className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-primary text-xl font-bold text-white shadow-lg">
                  {step.step}
                </span>
                <h3 className="font-semibold text-heading">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutInterests() {
  return (
    <section className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Beyond the Code"
          title="What keeps me"
          titleAccent="curious"
          description="A few things I care about outside of writing software."
        />
        {/* Center aligned — max 4 cols, centered */}
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="flex h-full flex-col items-start rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-accent/60">
                <h3 className="font-semibold text-heading">{item.title}</h3>
                <p className="mt-1.5 text-sm text-body">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
