"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

import { THEME_STORAGE_KEY as STORAGE_KEY } from "@/lib/theme-script";

const listeners = new Set<() => void>();

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

function apply(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // follow the OS setting until the visitor picks a theme themselves
  const media = matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (!readStored()) apply(media.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystemChange);

  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onSystemChange);
  };
}

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const getServerSnapshot = (): Theme => "light";

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage can be unavailable (private mode); the toggle still works
    }
    apply(next);
  }, []);

  return { theme, toggleTheme };
}
