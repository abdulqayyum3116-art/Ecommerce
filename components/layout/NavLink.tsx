"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

/**
 * Link that, when it points at the page you are already on, scrolls back to
 * the top (the hero) instead of doing nothing. Smooth unless the user prefers
 * reduced motion. Modified clicks (new tab etc.) behave normally.
 */
export function NavLink({ href, onClick, ...rest }: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    const modified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
    if (e.defaultPrevented || modified || typeof href !== "string" || href !== pathname) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    if (window.location.hash) history.replaceState(null, "", pathname);
  }

  return <Link href={href} onClick={handleClick} {...rest} />;
}
