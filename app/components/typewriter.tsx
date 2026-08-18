"use client";

import { useEffect, useRef } from "react";

const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const HOLD_TIME = 1800;

export function Typewriter({ phrases }: { phrases: string[] }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      node.textContent = phrases[phrases.length - 1];
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (timer) clearTimeout(timer);

      const current = phrases[phraseIndex % phrases.length];

      if (!deleting) {
        charIndex += 1;
        node.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, HOLD_TIME);
        } else {
          timer = setTimeout(tick, TYPE_SPEED);
        }
      } else {
        charIndex -= 1;
        node.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex += 1;
          timer = setTimeout(tick, 250);
        } else {
          timer = setTimeout(tick, DELETE_SPEED);
        }
      }
    };

    timer = setTimeout(tick, 300);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phrases]);

  return (
    <span className="inline-block min-h-[1.75em] w-full">
      <span ref={spanRef} aria-label={phrases.join(", ")} className="gradient-cyan" />
      <span
        className="animate-blink ml-1 inline-block h-[1em] w-[3px] translate-y-[0.15em] rounded-full bg-accent"
        aria-hidden="true"
      />
    </span>
  );
}
