/** Normalize Firestore Timestamp, ISO string, or Date for display. */

export function toJsDate(val: unknown): Date {
  if (val == null) return new Date(NaN);
  if (val instanceof Date) return val;
  if (typeof val === "string") return new Date(val);
  if (typeof val === "object" && val !== null && "toDate" in val) {
    const td = (val as { toDate?: () => Date }).toDate;
    if (typeof td === "function") return td.call(val);
  }
  if (
    typeof val === "object" &&
    val !== null &&
    "seconds" in val &&
    typeof (val as { seconds: unknown }).seconds === "number"
  ) {
    return new Date((val as { seconds: number }).seconds * 1000);
  }
  return new Date(NaN);
}

export function formatBlogLongDate(publishDate: unknown): string {
  const d = toJsDate(publishDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatBlogDateTime(publishDate: unknown): string {
  const d = toJsDate(publishDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
