import { useSyncExternalStore } from "react";

// A shared clock that ticks once a second while anything is subscribed.
let now: Date | null = null;
let timer: ReturnType<typeof setInterval> | null = null;
const clockListeners = new Set<() => void>();

/** Starts the shared ticker on first subscribe and stops it after the last unsubscribe. */
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

/**
 * The current time, updated every second.
 *
 * Returns `null` during server render and hydration, so time-dependent UI
 * renders a placeholder first instead of causing a hydration mismatch.
 *
 * @example
 * const now = useNow();
 * return <span>{now ? now.toLocaleTimeString() : "--:--"}</span>;
 */
export function useNow(): Date | null {
  return useSyncExternalStore(
    subscribeClock,
    () => now,
    () => null,
  );
}
