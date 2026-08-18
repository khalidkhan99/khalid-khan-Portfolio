import { DownloadIcon } from "@/app/components/icons";
import { site } from "@/app/data";

export function FloatingResume() {
  return (
    <a
      href={site.resume}
      download
      aria-label="Download resume (PDF)"
      className="group fixed right-6 bottom-6 z-40 hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-2xl transition-transform hover:-translate-y-1 sm:inline-flex"
    >
      <DownloadIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
      Resume
    </a>
  );
}
