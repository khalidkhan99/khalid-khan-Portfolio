import Link from "next/link";
import { ArrowLeftIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
};

export function PageHeader({
  eyebrow,
  title,
  titleAccent,
  description,
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden pt-24 sm:pt-28">
      <div
        className="animate-aurora pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-gradient-cyan opacity-30 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-dim transition-colors hover:text-accent"
          >
            <ArrowLeftIcon className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            titleAccent={titleAccent}
            description={description}
          />
        </Reveal>
      </div>
    </div>
  );
}
