/**
 * Format a date object into a human-readable string
 * @param date The date to format
 * @returns Formatted date string (e.g., "June 7, 2025")
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
