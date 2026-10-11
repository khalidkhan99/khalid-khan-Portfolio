"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/app/data";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const raf = requestAnimationFrame(() => setIsDone(true));
      return () => cancelAnimationFrame(raf);
    }

    // Lock page scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 1400; // 1.4s smooth loader
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const linearFraction = Math.min(elapsed / duration, 1);

      // Ease out cubic progress curve for natural, snappy feel
      const easedProgress = Math.min(
        100,
        Math.round(100 * (1 - Math.pow(1 - linearFraction, 3))),
      );

      setProgress(easedProgress);

      if (linearFraction < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Finished loading — initiate exit transition
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = originalOverflow;
          }, 500);
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090a0f] px-6 select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? "pointer-events-none scale-105 opacity-0 blur-[2px]"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background ambient glow effects */}
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute size-96 rounded-full bg-gradient-cyan opacity-20 blur-[130px]" />
      <div className="pointer-events-none absolute size-80 rounded-full bg-gradient-purple opacity-20 blur-[130px] translate-y-12" />

      <div className="relative flex flex-col items-center">
        {/* Animated Avatar / Logo */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 animate-pulse rounded-full bg-gradient-primary opacity-40 blur-xl" />
          <div className="relative size-28 overflow-hidden rounded-full border-2 border-accent/60 bg-[#0f1320] p-1 shadow-[0_0_35px_rgba(0,242,254,0.35)] transition-transform sm:size-32">
            <Image
              src={site.logo}
              alt={site.name}
              width={128}
              height={128}
              priority
              className="size-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Brand Name & Role */}
        <h2 className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Khalid<span className="gradient-cyan"> Khan</span>
        </h2>
        <p className="mt-1 font-mono text-xs tracking-widest text-[#94a3b8] uppercase sm:text-sm">
          Full-Stack &amp; Web Developer
        </p>

        {/* Smooth Animated Loading Line */}
        <div className="mt-8 w-60 sm:w-72">
          {/* Progress Track */}
          <div className="relative h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#7f00ff] shadow-[0_0_14px_rgba(0,242,254,0.85)] transition-[width] duration-75 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing tip light */}
              <span className="absolute top-1/2 right-0 size-2 -translate-y-1/2 translate-x-1 rounded-full bg-white shadow-[0_0_8px_#00f2fe]" />
            </div>
          </div>

          {/* Loading status & percentage counter */}
          <div className="mt-3 flex items-center justify-between font-mono text-xs text-[#64748b]">
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="text-dim">Loading experience...</span>
            </span>
            <span className="font-semibold text-bright">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
