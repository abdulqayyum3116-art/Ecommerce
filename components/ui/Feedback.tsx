import type { ComponentProps, ReactNode } from "react";
import { AlertCircle, CheckCircle2, Info, TriangleAlert, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { icon } from "./icon";

type Tone = "info" | "success" | "warning" | "danger";

const TONE: Record<Tone, string> = {
  info: "bg-info-bg border-info-border text-info-text",
  success: "bg-success-bg border-success-border text-success-text",
  warning: "bg-warning-bg border-warning-border text-warning-text",
  danger: "bg-danger-bg border-danger-border text-danger-text",
};

const TONE_ICON: Record<Tone, typeof Info> = {
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  danger: AlertCircle,
};

/** Inline message. Icon + text carry meaning, not colour alone. */
export function Alert({
  tone = "info",
  title,
  children,
  className,
  ...rest
}: Omit<ComponentProps<"div">, "title"> & { tone?: Tone; title?: ReactNode }) {
  const Icon = TONE_ICON[tone];
  return (
    <div
      role={tone === "danger" ? "alert" : "status"}
      className={cn("flex items-start gap-3 rounded-md border p-4 type-body-sm", TONE[tone], className)}
      {...rest}
    >
      <Icon {...icon.md} className="mt-px shrink-0" />
      <div className="min-w-0">
        {title && <p className="font-bold">{title}</p>}
        <div className={cn(title && "mt-1")}>{children}</div>
      </div>
    </div>
  );
}

/**
 * Toast — presentational. Render inside a live region (see ToastRegion).
 */
export function Toast({
  tone = "success",
  title,
  children,
  onDismiss,
}: {
  tone?: Tone;
  title: ReactNode;
  children?: ReactNode;
  onDismiss?: () => void;
}) {
  const Icon = TONE_ICON[tone];
  return (
    <div className="pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border border-border bg-surface-raised p-4 shadow-elevation-4 motion-safe:animate-rise">
      <Icon
        {...icon.md}
        className={cn(
          "mt-px shrink-0",
          tone === "success" && "text-success-solid",
          tone === "danger" && "text-danger-solid",
          tone === "warning" && "text-warning-solid",
          tone === "info" && "text-info-solid"
        )}
      />
      <div className="min-w-0 flex-1">
        <p className="type-body-sm font-bold text-fg">{title}</p>
        {children && <p className="mt-0.5 type-body-sm text-fg-secondary">{children}</p>}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="-m-1 inline-flex size-8 items-center justify-center rounded-full text-fg-muted transition-colors duration-150 hover:bg-bg-muted hover:text-fg"
        >
          <X {...icon.sm} />
        </button>
      )}
    </div>
  );
}

export function ToastRegion({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className={cn("pointer-events-none fixed right-4 bottom-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3", className)}
    >
      {children}
    </div>
  );
}

export function EmptyState({
  icon: iconNode,
  title,
  children,
  action,
  className,
}: {
  icon?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-xl flex-col items-center rounded-lg border border-dashed border-border-strong bg-bg-subtle px-6 py-10 text-center",
        className
      )}
    >
      {iconNode && (
        <span className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-bg-muted text-fg-secondary">
          {iconNode}
        </span>
      )}
      <p className="type-h4 text-fg">{title}</p>
      {children && <div className="mt-2 type-body-sm text-fg-secondary measure-narrow">{children}</div>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Skeleton({ className, ...rest }: ComponentProps<"div">) {
  return <div aria-hidden className={cn("rounded-sm bg-bg-muted motion-safe:animate-shimmer", className)} {...rest} />;
}

/** Placeholder for a card while content loads. */
export function SkeletonCard() {
  return (
    <div role="status" aria-label="Loading" className="rounded-lg border border-border bg-surface p-6">
      <Skeleton className="mb-6 size-11 rounded-md" />
      <Skeleton className="mb-3 h-6 w-3/4" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}
