/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | number | bigint | boolean | null | undefined>): string {
  return classes.filter((c): c is string => typeof c === "string" && c.length > 0).join(" ");
}
