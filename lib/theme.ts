"use client";

import { useCallback, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY as STORAGE_KEY } from "@/lib/theme-script";

export type Theme = "light" | "dark";
// "system" follows the OS setting; it's stored as "no saved theme"
export type ThemePreference = Theme | "system";

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

const systemTheme = (): Theme =>
  matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

function readPreference(): ThemePreference {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : "system";
  } catch {
    return "system";
  }
}

function applyPreference(preference: ThemePreference) {
  const theme = preference === "system" ? systemTheme() : preference;
  document.documentElement.classList.toggle("dark", theme === "dark");
  notify();
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // OS setting changed: only matters while following the system
  const media = matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (readPreference() === "system") applyPreference("system");
  };
  // another tab changed the theme
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) applyPreference(readPreference());
  };
  media.addEventListener("change", onSystemChange);
  window.addEventListener("storage", onStorage);

  // Re-check right after subscribing. React renders the server snapshot
  // ("system", light) during hydration; this makes sure every browser
  // re-reads the real values immediately after, rather than relying on
  // React's own post-hydration consistency check.
  queueMicrotask(listener);

  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
  };
}

const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function useTheme() {
  const preference = useSyncExternalStore(subscribe, readPreference, () => "system" as const);
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as const);

  const setPreference = useCallback((next: ThemePreference) => {
    try {
      if (next === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage can be unavailable (private mode); the change still applies
    }
    applyPreference(next);
  }, []);

  return { preference, theme, setPreference };
}
