import { SectionHeading } from "@/app/components/section-heading";
import { Reveal } from "@/app/components/reveal";
import { about, site } from "@/app/data";

export function About({
  showHeading = true,
  pageHref,
}: {
  showHeading?: boolean;
  pageHref?: string;
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
          />
        ) : null}

        {/* Left bigger (JSON) right smaller (highlights) */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-purple opacity-20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-mono text-sm text-dim">
                  ~/whoami.json
                </span>
              </div>
              {/* Bigger font, more padding, more lines */}
              <div className="space-y-2 px-4 py-5 font-mono text-xs leading-6 text-bright sm:space-y-3 sm:px-6 sm:py-6 sm:text-[15px] sm:leading-7">
                <p><span className="text-code-fn">&quot;name&quot;</span>: <span className="text-code-str">&quot;{site.name}&quot;</span>,</p>
                <p><span className="text-code-fn">&quot;role&quot;</span>: <span className="text-code-str">&quot;{site.title}&quot;</span>,</p>
                <p><span className="text-code-fn">&quot;location&quot;</span>: <span className="text-code-str">&quot;{site.location}&quot;</span>,</p>
                <p><span className="text-code-fn">&quot;email&quot;</span>: <span className="text-code-str">&quot;{site.email}&quot;</span>,</p>
                <p><span className="text-code-fn">&quot;focus&quot;</span>: [</p>
                <p className="pl-8"><span className="text-code-str">&quot;AI / ML&quot;</span>,</p>
                <p className="pl-8"><span className="text-code-str">&quot;LLMs &amp; Chatbots&quot;</span>,</p>
                <p className="pl-8"><span className="text-code-str">&quot;Web Development&quot;</span>,</p>
                <p className="pl-8"><span className="text-code-str">&quot;Prompt Engineering&quot;</span></p>
                <p>],</p>
                <p><span className="text-code-fn">&quot;available&quot;</span>: <span className="text-code-str">true</span>,</p>
                <p><span className="text-code-fn">&quot;status&quot;</span>: <span className="text-code-str">&quot;open to work&quot;</span></p>
              </div>
            </div>
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
