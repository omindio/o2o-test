import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-rose-500 dark:outline-rose-500",
];

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
];

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-purple-200 focus:dark:ring-purple-700/30",
  // border color
  "focus:border-purple-700 dark:focus:border-purple-700",
];
