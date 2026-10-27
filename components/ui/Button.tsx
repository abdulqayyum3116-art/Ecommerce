import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { icon } from "./icon";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-on-accent shadow-elevation-1 hover:bg-accent-hover hover:shadow-elevation-2 active:bg-accent-pressed active:shadow-elevation-1",
  secondary:
    "border border-border-strong bg-surface-raised text-fg hover:border-fg hover:bg-bg-subtle active:bg-bg-muted",
  ghost: "text-fg hover:bg-bg-muted active:bg-border",
  destructive: "bg-danger-solid text-on-solid shadow-elevation-1 hover:brightness-110 active:brightness-95",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 gap-1.5 px-4 type-body-sm font-bold",
  md: "h-11 gap-2 px-5 type-button",
  lg: "h-12 gap-2 px-7 type-button",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
} = {}) {
  return cn(
    "group/button relative inline-flex select-none items-center justify-center whitespace-nowrap rounded-full",
    "transition-[background-color,border-color,box-shadow,filter,transform] duration-150 ease-standard",
    "active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className
  );
}

/** Trailing arrow that nudges on hover. */
export function ButtonArrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex transition-transform duration-200 ease-standard group-hover/button:translate-x-0.5 motion-reduce:transform-none">
      {children}
    </span>
  );
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  /** Icon rendered after the label (e.g. an arrow). */
  trailingIcon?: ReactNode;
  /** Icon rendered before the label. */
  leadingIcon?: ReactNode;
};

export type ButtonProps = ComponentProps<"button"> &
  CommonProps & {
    loading?: boolean;
    /** Label announced and shown while loading; defaults to children. */
    loadingLabel?: ReactNode;
  };

export function Button({
  variant,
  size,
  fullWidth,
  loading = false,
  loadingLabel,
  leadingIcon,
  trailingIcon,
  className,
  children,
  disabled,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...rest}
    >
      {loading ? (
        <Loader2 {...icon.sm} className="shrink-0 motion-safe:animate-spin" />
      ) : (
        leadingIcon
      )}
      <span>{loading && loadingLabel ? loadingLabel : children}</span>
      {!loading && trailingIcon && <ButtonArrow>{trailingIcon}</ButtonArrow>}
    </button>
  );
}

export type ButtonLinkProps = ComponentProps<typeof Link> & CommonProps;

export function ButtonLink({
  variant,
  size,
  fullWidth,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={buttonClasses({ variant, size, fullWidth, className })} {...rest}>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon && <ButtonArrow>{trailingIcon}</ButtonArrow>}
    </Link>
  );
}

/** Inline text link with an accent underline (medgrow's text-button idiom). */
export function TextLink({ className, children, ...rest }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group/button inline-flex items-center gap-1 type-button text-fg underline decoration-accent decoration-2 underline-offset-[6px]",
        "transition-colors duration-150 ease-standard hover:text-accent-text",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
