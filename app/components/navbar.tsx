"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, GithubIcon, MenuIcon } from "@/app/components/icons";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { navLinks, site } from "@/app/data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    `text-sm transition-colors ${
      pathname === href
        ? "font-medium text-accent"
        : "text-body hover:text-heading"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-lg font-bold text-heading"
          aria-label="Go to home"
        >
          <span className="bg-gradient-primary flex size-8 items-center justify-center rounded-md text-sm text-white shadow-lg">
            {site.initials}
          </span>
          <span className="hidden sm:inline">
            Khalid<span className="gradient-cyan"> Khan</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden size-9 items-center justify-center rounded-lg border border-border text-bright transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <GithubIcon className="size-5" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border text-bright transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-b border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="space-y-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    pathname === link.href
                      ? "bg-card font-medium text-accent"
                      : "text-body hover:bg-card hover:text-heading"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
