"use client";

import { useSyncExternalStore } from "react";

/*
  A shared clock that ticks once a second while anything is subscribed.
  Returns null during server render and hydration, so time-dependent UI
  renders a placeholder first instead of a hydration mismatch.
*/
let now: Date | null = null;
let timer: ReturnType<typeof setInterval> | null = null;
const clockListeners = new Set<() => void>();

function subscribeClock(listener: () => void) {
  clockListeners.add(listener);
  if (!timer) {
    now = new Date();
    queueMicrotask(() => clockListeners.forEach((l) => l()));
    timer = setInterval(() => {
      now = new Date();
      clockListeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    clockListeners.delete(listener);
    if (clockListeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}

export function useNow() {
  return useSyncExternalStore(
    subscribeClock,
    () => now,
    () => null,
  );
}
