"use client";

import { useTheme } from "@/lib/theme";

// a physical slide switch: a well with a domed thumb
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className="well relative h-[34px] w-16 flex-none cursor-pointer rounded-full"
    >
      <span
        aria-hidden="true"
        className="bubble pointer-events-none absolute top-[3px] left-[3px] size-7 rounded-full transition-transform duration-200 motion-reduce:transition-none"
        style={{ transform: isDark ? "translateX(30px)" : undefined }}
      />
    </button>
  );
}
