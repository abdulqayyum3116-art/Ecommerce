import Image from "next/image";
import { cn } from "@/lib/cn";
import lightLogo from "@/public/logo.png";
import darkLogo from "@/public/logo-dark.png";

/** CodeSquad lockup for light or dark backgrounds. */
export function Logo({ className, theme = "light" }: { className?: string; theme?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex w-44 shrink-0 items-center sm:w-48", className)}>
      <Image
        src={theme === "dark" ? darkLogo : lightLogo}
        alt="CodeSquad AI Solutions"
        className="h-auto w-full"
        sizes="(min-width: 640px) 192px, 176px"
      />
    </span>
  );
}
