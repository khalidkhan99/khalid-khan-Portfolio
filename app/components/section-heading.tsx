import Link from "next/link";
import { ArrowRightIcon } from "@/app/components/icons";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  actionHref,
  actionLabel = "Open full page",
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-accent uppercase">
        <span className="size-1.5 rounded-full bg-gradient-cyan" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-heading sm:text-4xl">
        {title}{" "}
        {titleAccent ? (
          <span className="gradient-purple">{titleAccent}</span>
        ) : null}
      </h2>
      {description ? (
        <p className="mt-4 text-body">{description}</p>
      ) : null}
      {actionHref ? (
        <Link
          href={actionHref}
          className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-bright transition-colors hover:border-accent hover:text-accent"
        >
          {actionLabel}
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
}
