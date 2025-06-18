import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateUniqueId = (): string => {
  return `${new Date().getTime()}_${Math.floor(Math.random() * 1000)}`;
};

export function blendWithWhite(hex: string) {
  // Extract RGB components from the hex color
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  const alpha = parseInt(hex.substring(7, 9), 16) / 255; // Convert alpha to decimal

  // Blend with white (255, 255, 255)
  r = Math.round(r * alpha + 255 * (1 - alpha));
  g = Math.round(g * alpha + 255 * (1 - alpha));
  b = Math.round(b * alpha + 255 * (1 - alpha));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();
}

export function formatTimeAgo(dateString: string): string {
  if (!dateString) return "";

  const now = moment();
  const then = moment(dateString);
  const diffMinutes = now.diff(then, "minutes");
  const diffHours = now.diff(then, "hours");
  const diffDays = now.diff(then, "days");

  if (diffMinutes < 60) {
    return `${diffMinutes} min${diffMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  } else if (diffDays === 1) {
    return `Yesterday`;
  } else {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }
}

/**
 * Returns the background color class based on color property
 */
export const getColorClass = (color?: string): string => {
  switch (color) {
    case "green":
      return "bg-green-100 text-green-600";
    case "red":
      return "bg-red-100 text-red-600";
    case "blue":
      return "bg-blue-100 text-blue-600";
    case "orange":
      return "bg-orange-100 text-orange-600";
    case "cyan":
      return "bg-cyan-100 text-cyan-600";
    case "yellow":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
