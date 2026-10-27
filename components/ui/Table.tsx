import Link from "next/link";
import type { ComponentProps } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { icon } from "./icon";

/** Scrollable table wrapper; numeric columns get tabular figures. */
export function Table({ className, children, ...rest }: ComponentProps<"table">) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border bg-surface">
      <table className={cn("w-full border-collapse text-left type-body-sm", className)} {...rest}>
        {children}
      </table>
    </div>
  );
}

export function Th({ className, numeric, ...rest }: ComponentProps<"th"> & { numeric?: boolean }) {
  return (
    <th
      scope="col"
      className={cn(
        "border-b border-border bg-bg-subtle px-4 py-3 type-overline text-fg-muted",
        numeric && "text-right",
        className
      )}
      {...rest}
    />
  );
}

export function Td({ className, numeric, ...rest }: ComponentProps<"td"> & { numeric?: boolean }) {
  return (
    <td
      className={cn("border-b border-border px-4 py-3 text-fg-secondary", numeric && "numeric text-right text-fg", className)}
      {...rest}
    />
  );
}

/** Link-based pagination. `href(page)` builds each page URL. */
export function Pagination({
  page,
  pageCount,
  href,
  label = "Pagination",
}: {
  page: number;
  pageCount: number;
  href: (page: number) => string;
  label?: string;
}) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const item =
    "inline-flex size-10 items-center justify-center rounded-full type-body-sm font-bold numeric transition-colors duration-150 ease-standard";
  const disabled = "pointer-events-none text-fg-muted opacity-50";
  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-1">
        <li>
          <Link
            href={href(Math.max(1, page - 1))}
            aria-label="Previous page"
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : undefined}
            className={cn(item, "text-fg hover:bg-bg-muted", page === 1 && disabled)}
          >
            <ChevronLeft {...icon.sm} />
          </Link>
        </li>
        {pages.map((p) => (
          <li key={p}>
            <Link
              href={href(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(item, p === page ? "bg-fg text-fg-inverse" : "text-fg-secondary hover:bg-bg-muted hover:text-fg")}
            >
              {p}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={href(Math.min(pageCount, page + 1))}
            aria-label="Next page"
            aria-disabled={page === pageCount}
            tabIndex={page === pageCount ? -1 : undefined}
            className={cn(item, "text-fg hover:bg-bg-muted", page === pageCount && disabled)}
          >
            <ChevronRight {...icon.sm} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
