import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHostOsName() {
  const userAgent = window.navigator.userAgent;

  if (userAgent.includes("Win")) {
    return "Windows";
  } else if (userAgent.includes("Mac")) {
    return "MacOS";
  } else if (userAgent.includes("X11") || userAgent.includes("Linux")) {
    return "Linux/Unix";
  } else if (/Android/i.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  } else {
    return "Unknown";
  }
}

export function encodeCodeString(input: string): string {
  return btoa(decodeURIComponent(encodeURIComponent(input)));
}

export function decodeCodeString(encoded: string): string {
  return decodeURIComponent(encodeURIComponent(atob(encoded)));
}
