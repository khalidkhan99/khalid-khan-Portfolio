import {
  BrainIcon,
  CloudIcon,
  CodeIcon,
  LayersIcon,
} from "@/app/components/icons";
import { SectionHeading } from "@/app/components/section-heading";
import { Reveal } from "@/app/components/reveal";
import { skillGroups, type SkillIcon } from "@/app/data";

const icons: Record<SkillIcon, (props: { className?: string }) => React.ReactNode> = {
  code: CodeIcon,
  brain: BrainIcon,
  cloud: CloudIcon,
  layers: LayersIcon,
};

function proficiencyOf(level: number) {
  if (level >= 88) {
    return {
      label: "Core",
      dot: "bg-emerald-400",
      className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    };
  }
  if (level >= 78) {
    return {
      label: "Proficient",
      dot: "bg-cyan-400",
      className: "border-cyan-400/30 bg-cyan-400/10 text-cyan-400",
    };
  }
  return {
    label: "Familiar",
    dot: "bg-dim",
    className: "border-border bg-surface text-dim",
  };
}

export function Skills({
  showHeading = true,
  pageHref,
}: {
  showHeading?: boolean;
  pageHref?: string;
}) {
  return (
    <section id="skills" className="relative scroll-mt-16 bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Skills"
            title="My technical"
            titleAccent="arsenal"
            description="A stack built for solving real problems — from model training to production deployment."
            actionHref={pageHref}
            actionLabel="Browse skills"
          />
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.category} delay={gi * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/60">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="bg-gradient-primary inline-flex size-11 items-center justify-center rounded-xl text-white shadow-lg">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-heading">
                        {group.category}
                      </h3>
                      <p className="text-xs text-dim">{group.blurb}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const level = proficiencyOf(skill.level);
                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-bright"
                        >
                          <span
                            className={`size-1.5 shrink-0 rounded-full ${level.dot}`}
                          />
                          {skill.name}
                          <span
                            className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] ${level.className}`}
                          >
                            {level.label}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-dim">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Core — daily driver
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-cyan-400" />
              Proficient — production-ready
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-dim" />
              Familiar — building experience
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
