"use client";

import { useId, type ComponentProps, type ReactNode } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { icon } from "./icon";

const control = cn(
  "w-full rounded-md border bg-surface-raised px-4 type-body text-fg placeholder:text-fg-muted",
  "border-border-strong transition-[border-color,box-shadow] duration-150 ease-standard",
  "hover:border-fg-secondary focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-focus-ring",
  "disabled:cursor-not-allowed disabled:bg-bg-muted disabled:text-fg-muted disabled:opacity-70",
  "aria-invalid:border-danger-solid aria-invalid:hover:border-danger-solid"
);

/**
 * Label + control + hint + error, wired with ids for assistive tech.
 * The render-prop receives the props a control needs.
 */
export function Field({
  label,
  hint,
  error,
  required,
  optional,
  className,
  children,
}: {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  className?: string;
  children: (props: { id: string; "aria-describedby"?: string; "aria-invalid"?: true; required?: boolean }) => ReactNode;
}) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="type-body-sm font-bold text-fg">
        {label}
        {required && (
          <span className="text-danger-text" aria-hidden>
            {" "}*
          </span>
        )}
        {optional && <span className="font-normal text-fg-muted"> (optional)</span>}
      </label>
      {children({ id, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined, required })}
      {hint && !error && (
        <p id={hintId} className="type-caption text-fg-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="type-caption font-bold text-danger-text">
          {error}
        </p>
      )}
    </div>
  );
}

export function Input({ className, ...rest }: ComponentProps<"input">) {
  return <input className={cn(control, "h-12", className)} {...rest} />;
}

export function Textarea({ className, ...rest }: ComponentProps<"textarea">) {
  return <textarea className={cn(control, "min-h-28 resize-y py-3", className)} {...rest} />;
}

export function Select({ className, children, ...rest }: ComponentProps<"select">) {
  return (
    <div className="relative">
      <select className={cn(control, "h-12 appearance-none pr-11", className)} {...rest}>
        {children}
      </select>
      <ChevronDown {...icon.sm} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-fg-muted" />
    </div>
  );
}

const choiceBox = cn(
  "peer relative size-5 shrink-0 appearance-none border border-border-strong bg-surface-raised",
  "transition-colors duration-150 ease-standard checked:border-accent checked:bg-accent",
  "hover:border-fg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

export function Checkbox({ label, className, ...rest }: Omit<ComponentProps<"input">, "type"> & { label: ReactNode }) {
  return (
    <label className={cn("inline-flex cursor-pointer items-start gap-3 type-body-sm text-fg has-disabled:cursor-not-allowed has-disabled:text-fg-muted", className)}>
      <span className="relative mt-px inline-flex">
        <input type="checkbox" className={cn(choiceBox, "rounded-sm")} {...rest} />
        <Check {...icon.sm} size={14} strokeWidth={2.5} className="pointer-events-none absolute inset-0 m-auto text-on-accent opacity-0 peer-checked:opacity-100" />
      </span>
      <span>{label}</span>
    </label>
  );
}

export function Radio({ label, className, ...rest }: Omit<ComponentProps<"input">, "type"> & { label: ReactNode }) {
  return (
    <label className={cn("inline-flex cursor-pointer items-start gap-3 type-body-sm text-fg has-disabled:cursor-not-allowed has-disabled:text-fg-muted", className)}>
      <span className="relative mt-px inline-flex">
        <input type="radio" className={cn(choiceBox, "rounded-full")} {...rest} />
        <span aria-hidden className="pointer-events-none absolute inset-0 m-auto size-2 rounded-full bg-on-accent opacity-0 peer-checked:opacity-100" />
      </span>
      <span>{label}</span>
    </label>
  );
}

export function Switch({
  checked,
  onCheckedChange,
  label,
  disabled,
  className,
}: {
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  label: ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-3 type-body-sm text-fg", disabled && "cursor-not-allowed text-fg-muted", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-150 ease-standard",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:opacity-50",
          checked ? "border-accent bg-accent" : "border-border-strong bg-bg-muted"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "inline-block size-4 rounded-full shadow-elevation-1 transition-transform duration-200 ease-standard",
            checked ? "translate-x-6 bg-on-accent" : "translate-x-1 bg-surface-raised"
          )}
        />
      </button>
      <span>{label}</span>
    </label>
  );
}

/** Toggle chip (aria-pressed) for single/multi-select filters. */
export function ChoiceChip({
  selected,
  className,
  children,
  ...rest
}: Omit<ComponentProps<"button">, "type"> & { selected: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "inline-flex min-h-9 items-center gap-1.5 rounded-full border px-4 py-1.5 type-body-sm font-medium",
        "transition-[background-color,border-color,color] duration-150 ease-standard",
        selected
          ? "border-fg bg-fg text-fg-inverse"
          : "border-border-strong bg-surface-raised text-fg-secondary hover:border-fg hover:text-fg",
        className
      )}
      {...rest}
    >
      {selected && <Check {...icon.sm} size={14} strokeWidth={2.25} />}
      {children}
    </button>
  );
}
