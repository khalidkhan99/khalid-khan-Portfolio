"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/app/data";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const duration = 1250; // 1.25s total load duration
    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth cubic-out easing curve
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Completed loading — smooth exit sequence
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = prevOverflow;
          }, 450);
        }, 120);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex h-dvh w-screen flex-col items-center justify-center bg-[#090a0f] px-6 select-none overscroll-none touch-none transition-all duration-500 ease-out ${
        isExiting
          ? "pointer-events-none scale-[1.02] opacity-0"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Lightweight GPU-friendly ambient radial background (No CPU-heavy Gaussian blurs) */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(0, 242, 254, 0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 58%, rgba(127, 0, 255, 0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Animated Avatar / Logo */}
        <div className="relative mb-5">
          <div className="relative size-24 overflow-hidden rounded-full border-2 border-accent/60 bg-[#0f1320] p-1 shadow-[0_0_24px_rgba(0,242,254,0.35)] sm:size-28">
            <Image
              src={site.logo}
              alt={site.name}
              width={112}
              height={112}
              priority
              className="size-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Brand Name & Role */}
        <h2 className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Khalid<span className="gradient-cyan"> Khan</span>
        </h2>
        <p className="mt-1 font-mono text-xs tracking-widest text-[#94a3b8] uppercase">
          Full-Stack &amp; Web Developer
        </p>

        {/* Smooth GPU-Accelerated Loading Line */}
        <div className="mt-7 w-56 sm:w-64">
          {/* Progress Track */}
          <div className="relative h-1.5 w-full overflow-hidden rounded-full border border-white/10 bg-white/10">
            {/* GPU-Accelerated scaleX fill bar */}
            <div
              className="h-full w-full rounded-full bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#7f00ff] shadow-[0_0_10px_#00f2fe]"
              style={{
                transform: `scaleX(${progress / 100})`,
                transformOrigin: "left",
                willChange: "transform",
                transition: "transform 100ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            />
          </div>

          {/* Status & percentage */}
          <div className="mt-2.5 flex items-center justify-between font-mono text-xs text-[#64748b]">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="text-[11px] text-dim">Loading...</span>
            </span>
            <span className="font-mono text-[11px] font-semibold text-bright">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
