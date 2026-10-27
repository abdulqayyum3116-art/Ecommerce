"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { icon } from "./icon";

/**
 * Modal / drawer on the native <dialog> element: focus is trapped, Esc
 * closes, focus returns to the opener, and the page behind is inert.
 */
export function Dialog({
  open,
  onClose,
  title,
  description,
  variant = "modal",
  side = "right",
  footer,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  variant?: "modal" | "drawer";
  side?: "left" | "right";
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // Backdrop click: the event target is the <dialog> itself.
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby={titleId}
      className={cn(
        "m-0 max-h-none max-w-none border-border bg-surface-raised p-0 text-fg backdrop:bg-overlay",
        "open:motion-safe:animate-rise",
        variant === "modal" &&
          "fixed inset-0 m-auto h-fit w-[calc(100%-2rem)] max-w-lg rounded-xl border shadow-elevation-5",
        variant === "drawer" &&
          cn("fixed inset-y-0 h-dvh w-[min(24rem,88vw)] border shadow-elevation-5", side === "right" ? "right-0 left-auto" : "left-0"),
        className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-border p-6">
          <div>
            <h2 id={titleId} className="type-h4 text-fg">
              {title}
            </h2>
            {description && <p className="mt-1 type-body-sm text-fg-secondary">{description}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-m-2 inline-flex size-10 shrink-0 items-center justify-center rounded-full text-fg-muted transition-colors duration-150 hover:bg-bg-muted hover:text-fg"
          >
            <X {...icon.md} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
        {footer && <div className="flex justify-end gap-3 border-t border-border p-6">{footer}</div>}
      </div>
    </dialog>
  );
}
