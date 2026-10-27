"use client";

import { useEffect, useState, useSyncExternalStore, type FocusEvent } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * Cycles an index every `intervalMs`.
 * - Pauses while the region is hovered or holds keyboard focus.
 * - Stops for good once the user picks an item (`select`).
 * - Never starts on its own under prefers-reduced-motion.
 * Spread `pauseHandlers` onto the region's wrapper element.
 */
export function useAutoAdvance(count: number, intervalMs: number) {
  const [index, setIndex] = useState(0);
  // null = no explicit choice yet; auto-play then follows the OS motion setting.
  const [stopped, setStopped] = useState<boolean | null>(null);
  const [interacting, setInteracting] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false
  );
  const isPaused = interacting || (stopped ?? prefersReducedMotion);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % count), intervalMs);
    return () => clearInterval(interval);
  }, [isPaused, count, intervalMs]);

  return {
    index,
    isPaused,
    /** User picked an item: show it and stop auto-advancing. */
    select(next: number) {
      setIndex(next);
      setStopped(true);
    },
    pauseHandlers: {
      onMouseEnter: () => setInteracting(true),
      onMouseLeave: () => setInteracting(false),
      onFocus: () => setInteracting(true),
      onBlur: (e: FocusEvent<HTMLElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false);
      },
    },
  };
}
