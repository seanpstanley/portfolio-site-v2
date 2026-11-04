import { useCallback, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY as STORAGE_KEY } from "@/lib/theme-script";

/** The theme actually showing. */
export type Theme = "light" | "dark";

/**
 * The visitor's choice. `"system"` follows the OS setting, and is stored as
 * "no saved theme".
 */
export type ThemePreference = Theme | "system";

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

const systemTheme = (): Theme =>
  matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

/** Reads the saved preference. `"system"` when nothing is saved or storage is unavailable. */
function readPreference(): ThemePreference {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : "system";
  } catch {
    return "system";
  }
}

/** Shows the theme for a preference and notifies subscribers. */
function applyPreference(preference: ThemePreference) {
  const theme = preference === "system" ? systemTheme() : preference;
  document.documentElement.classList.toggle("dark", theme === "dark");
  notify();
}

/** Registers a listener, and watches OS and other-tab theme changes. */
function subscribe(listener: () => void) {
  listeners.add(listener);

  // OS setting changed: only matters while following the system.
  const media = matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (readPreference() === "system") applyPreference("system");
  };
  // Another tab changed the theme.
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

/**
 * Reads and sets the theme. Shared across components and browser tabs, and
 * follows OS changes while the preference is `"system"`.
 *
 * @returns `preference`: the visitor's choice; `theme`: what's showing;
 * `setPreference`: saves a new choice and applies it.
 *
 * @example
 * const { preference, setPreference } = useTheme();
 */
export function useTheme() {
  const preference = useSyncExternalStore(
    subscribe,
    readPreference,
    () => "system" as const,
  );
  const theme = useSyncExternalStore(
    subscribe,
    getTheme,
    () => "light" as const,
  );

  const setPreference = useCallback((next: ThemePreference) => {
    try {
      if (next === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the change still applies.
    }
    applyPreference(next);
  }, []);

  return { preference, theme, setPreference };
}
