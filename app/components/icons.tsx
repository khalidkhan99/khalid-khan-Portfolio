type IconProps = { className?: string };

function Svg({ className, children, fill = "none", strokeWidth = "1.75" }: IconProps & { children: React.ReactNode; fill?: string; strokeWidth?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

/* ── Brand Icons (filled, no stroke) ── */

export function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  );
}

/* ── UI / Utility Icons ── */

export function MailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </Svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </Svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </Svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </Svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </Svg>
  );
}

export function SendIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4z" />
    </Svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2.5">
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

/* ── Tech / Category Icons ── */

export function CodeIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </Svg>
  );
}

export function BrainIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Clean neural-network style brain */}
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <circle cx="8" cy="19" r="2" />
      <circle cx="16" cy="19" r="2" />
      <path d="M12 7v2M7 12h2M15 12h2M9.5 17.5l1-2M13.5 15.5l1 2" />
      <path d="M10 6.5 7 10.5M14 6.5l2.5 4" />
    </Svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </Svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <polygon points="12 2 22 8.5 12 15 2 8.5" />
      <polyline points="2 15 12 21.5 22 15" />
      <polyline points="2 11.5 12 18 22 11.5" />
    </Svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <Svg className={className} fill="currentColor" strokeWidth="0">
      {/* Star / spark shape — filled, clean */}
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </Svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <Svg className={className} fill="currentColor" strokeWidth="0">
      <path d="M13 2 3 14h8l-2 8 10-12h-8z" />
    </Svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </Svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </Svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Svg>
  );
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </Svg>
  );
}

export function BadgeCheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
      <path d="m9 12 2 2 4-4" strokeWidth="2" />
    </Svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <Svg className={className} fill="currentColor" strokeWidth="0">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .68-1.05 1.6-1.83 2.76-2.34L9.64 6c-1.5.73-2.7 1.7-3.6 2.93-.9 1.23-1.35 2.5-1.35 3.82 0 1.05.26 1.92.78 2.6.52.68 1.23 1.02 2.13 1.02.86 0 1.56-.27 2.1-.82.54-.55.81-1.24.81-2.07l-.32-.77zm7.77 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .68-1.05 1.6-1.83 2.76-2.34L17.4 6c-1.5.73-2.7 1.7-3.6 2.93-.9 1.23-1.35 2.5-1.35 3.82 0 1.05.26 1.92.78 2.6.52.68 1.23 1.02 2.13 1.02.86 0 1.56-.27 2.1-.82.54-.55.81-1.24.81-2.07l-.32-.77z" />
    </Svg>
  );
}
