"use client";

import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";

import { type ThemePreference, useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const options: { value: ThemePreference; label: string; Icon: typeof LuSun }[] =
  [
    { value: "light", label: "Light", Icon: LuSun },
    { value: "system", label: "Auto (match system)", Icon: LuMonitor },
    { value: "dark", label: "Dark", Icon: LuMoon },
  ];

const SEGMENT = 30; // px per position

/*
  A three-position slide switch: light / auto / dark.
  Built on native radio buttons, so arrow keys move between positions and
  screen readers announce it as a radio group.
*/
export default function ThemeSwitch() {
  const { preference, setPreference } = useTheme();
  const index = options.findIndex((option) => option.value === preference);

  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="sr-only">Theme</legend>
      <div
        className="relative flex h-[34px] rounded-full p-[3px] well"
        style={{ width: SEGMENT * options.length + 6 }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[3px] left-[3px] keycap h-7 rounded-full keycap-seated transition-transform duration-200 motion-reduce:transition-none"
          style={{
            width: SEGMENT,
            transform: `translateX(${index * SEGMENT}px)`,
          }}
        />
        {options.map(({ value, label, Icon }) => {
          const checked = value === preference;
          return (
            <label
              key={value}
              className={cn(
                "relative flex h-7 cursor-pointer items-center justify-center rounded-full transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent has-[:focus-visible]:outline-solid",
                checked ? "text-ink" : "text-ink-3 hover:text-ink",
              )}
              style={{ width: SEGMENT }}
            >
              <input
                type="radio"
                name="theme"
                value={value}
                checked={checked}
                onChange={() => setPreference(value)}
                className="sr-only"
              />
              <Icon className="size-3.5" aria-hidden="true" />
              <span className="sr-only">{label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
