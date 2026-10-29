import { SectionHeading } from "@/app/components/section-heading";
import { Reveal } from "@/app/components/reveal";
import { WhatsAppBotCard } from "@/app/components/whatsapp-bot-card";
import { about } from "@/app/data";

export function About({
  showHeading = true,
  pageHref,
  asH1 = false,
}: {
  showHeading?: boolean;
  pageHref?: string;
  asH1?: boolean;
}) {
  return (
    <section id="about" className="relative scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="About Me"
            title="Turning ideas into"
            titleAccent="intelligent products"
            description={about.intro}
            actionHref={pageHref}
            actionLabel="Read my story"
            as={asH1 ? "h1" : "h2"}
          />
        ) : null}

        {/* Left: Interactive WhatsApp AI Agent Card, Right: About Story & Highlights */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="relative">
            <WhatsAppBotCard />
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <p className="leading-relaxed text-body">{about.body}</p>
            </Reveal>

            {/* 2 col grid for highlights */}
            <div className="grid grid-cols-1 gap-3 min-[390px]:grid-cols-2">
              {about.highlights.map((item, i) => {
                return (
                  <Reveal key={item.title} delay={i * 60}>
                    <div className="group h-full rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:bg-card-hover">
                      <h3 className="text-sm font-semibold text-heading">{item.title}</h3>
                      <p className="mt-0.5 text-xs text-body">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
