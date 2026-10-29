"use client";

import { useEffect, useRef, type ComponentProps, type ElementType, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Tilt and spotlight only for a real mouse, and never under reduced motion. */
const FINE_POINTER = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
/** Cards wider than this tilt proportionally less, so wide panels don't swing. */
const FULL_TILT_WIDTH = 420;

type TiltCardProps<T extends ElementType> = {
  as?: T;
  /** Maximum rotation in degrees at the card's edges. */
  maxTilt?: number;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentProps<T>, "as" | "className" | "children" | "onPointerEnter" | "onPointerMove" | "onPointerLeave">;

/**
 * Card shell with a slight 3D tilt and a cursor-following spotlight
 * (see `card-tilt` / `card-spotlight` in globals.css). Pointer position is
 * written straight to CSS variables, so moving the mouse never re-renders.
 */
export function TiltCard<T extends ElementType = "div">({ as, maxTilt = 6, className, children, ...rest }: TiltCardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const frame = useRef(0);
  const enabled = useRef(false);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function handleEnter() {
    enabled.current = window.matchMedia(FINE_POINTER).matches;
  }

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (!enabled.current) return;
    const el = e.currentTarget;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = clientX - r.left;
      const y = clientY - r.top;
      const tilt = maxTilt * Math.min(1, FULL_TILT_WIDTH / r.width);
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.style.setProperty("--rx", `${((0.5 - y / r.height) * 2 * tilt).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((x / r.width - 0.5) * 2 * tilt).toFixed(2)}deg`);
    });
  }

  function handleLeave(e: PointerEvent<HTMLElement>) {
    cancelAnimationFrame(frame.current);
    // Keep --mx/--my so the spotlight fades out where the pointer left.
    e.currentTarget.style.removeProperty("--rx");
    e.currentTarget.style.removeProperty("--ry");
  }

  return (
    <Tag
      className={cn("card-tilt card-spotlight", className)}
      onPointerEnter={handleEnter}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
