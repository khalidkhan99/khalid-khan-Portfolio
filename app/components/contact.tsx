"use client";

import { FormEvent, useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  XIcon,
} from "@/app/components/icons";
import { SectionHeading } from "@/app/components/section-heading";
import { Reveal } from "@/app/components/reveal";
import { site } from "@/app/data";

export function Contact({
  showHeading = true,
  pageHref,
}: {
  showHeading?: boolean;
  pageHref?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Keep the honeypot effective without showing a success message to bots.
    if (formData.get("_honey")) return;

    setStatus("sending");

    try {
      const response = await fetch(site.formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            titleAccent="together"
            description="Have a project in mind or just want to say hi? My inbox is always open."
            actionHref={pageHref}
            actionLabel="Get in touch"
          />
        ) : null}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-heading">
                Let&apos;s connect
              </h3>
              <p className="text-sm leading-relaxed text-body">
                Whether you&apos;re hiring, collaborating, or curious about AI — I
                usually reply within a day.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/60"
                >
                  <span className="bg-gradient-primary inline-flex size-11 items-center justify-center rounded-lg text-white">
                    <MailIcon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs text-dim">Email</p>
                    <p className="text-sm font-medium text-bright group-hover:text-accent">
                      {site.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/60"
                >
                  <span className="bg-gradient-purple inline-flex size-11 items-center justify-center rounded-lg text-white">
                    <PhoneIcon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs text-dim">Phone</p>
                    <p className="text-sm font-medium text-bright group-hover:text-accent">
                      {site.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="bg-gradient-primary inline-flex size-11 items-center justify-center rounded-lg text-white">
                    <MapPinIcon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs text-dim">Location</p>
                    <p className="text-sm font-medium text-bright">
                      {site.location} · {site.timezone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <span className="text-xs tracking-wider text-dim uppercase">
                  Find me on
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>

              <div className="flex items-center gap-3">
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
                    className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-bright transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value={`New message from ${site.name} portfolio`}
              />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-bright"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-heading placeholder:text-dim focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-bright"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-heading placeholder:text-dim focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-bright"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-heading placeholder:text-dim focus:border-accent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <SendIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              {status === "success" ? (
                <p
                  role="status"
                  className="mt-4 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-400"
                >
                  Thank you! Your form has been submitted successfully.
                </p>
              ) : null}
              {status === "error" ? (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                >
                  Message could not be sent. Please try again or email me directly.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
