import { DownloadIcon, GithubIcon, LinkedinIcon, XIcon } from "@/app/components/icons";
import { site } from "@/app/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="bg-gradient-primary flex size-7 items-center justify-center rounded-md text-xs font-bold text-white">
            {site.initials}
          </span>
          <p className="text-sm text-body">
            © {year} {site.name}. Built with Next.js & AI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            download
            aria-label="Download resume (PDF)"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-bright transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon className="size-4" />
            Resume
          </a>
          {[
            { href: site.github, label: "GitHub", Icon: GithubIcon },
            { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            { href: site.twitter, label: "X (Twitter)", Icon: XIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-dim transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
