"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

// [text to type, pause after it in ms]. Each step continues from the last.
const steps: [string, number][] = [
  ["sean", 500],
  ["\nstanley", 0],
];
const FULL_TEXT = steps.map(([text]) => text).join("");
// Timing, in ms.
const START_DELAY = 400;
const CHAR_DELAY = 85;
// Matches the caret keyframes: on for the first half of each cycle, off for the second.
const BLINK_MS = 1000;
// How many times the caret blinks after typing ends.
const BLINKS = 2;

/** Props for {@link TypedHeading}. */
interface TypedHeadingProps {
  /** Extra classes for the `<h1>`, e.g. the font size. */
  className?: string;
}

/**
 * The page's `<h1>`: types "sean stanley" out on the dot-matrix display,
 * with a caret that blinks twice and then disappears.
 *
 * - Screen readers get the whole heading once (the typed text is aria-hidden).
 * - The final text is rendered invisibly underneath, so nothing shifts while
 *   typing.
 * - With "reduce motion" on, the full text shows immediately.
 */
export default function TypedHeading({ className }: TypedHeadingProps) {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState("");
  // Solid while typing, then blinks, then goes away.
  const [caret, setCaret] = useState<"solid" | "blinking" | "gone">("solid");

  useEffect(() => {
    if (reduceMotion) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let at = START_DELAY;
    let text = "";

    for (const [chunk, pause] of steps) {
      for (const char of chunk) {
        text += char;
        const snapshot = text;
        timers.push(setTimeout(() => setTyped(snapshot), at));
        at += CHAR_DELAY;
      }
      at += pause;
    }
    // The blink animation starts fresh when typing ends, so its phase is
    // known: after two full blinks, remove it midway through the "off" half.
    timers.push(setTimeout(() => setCaret("blinking"), at));
    timers.push(
      setTimeout(
        () => setCaret("gone"),
        at + (BLINKS - 1) * BLINK_MS + BLINK_MS * 0.75,
      ),
    );

    return () => timers.forEach(clearTimeout);
  }, [reduceMotion]);

  const shown = reduceMotion ? FULL_TEXT : typed;
  const showCaret = !reduceMotion && caret !== "gone";

  return (
    <h1 className={cn("relative m-0 dot whitespace-pre-line", className)}>
      <span className="sr-only">Sean Stanley</span>
      {/* Reserves the final size so the layout never moves. */}
      <span aria-hidden="true" className="invisible">
        {FULL_TEXT}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {shown}
        {showCaret && (
          <span
            className={cn(
              "ml-[0.06em] inline-block h-[0.82em] w-[0.42em] translate-y-[0.08em] bg-signal align-baseline",
              caret === "blinking" && "animate-[caret_1s_steps(1)_infinite]",
            )}
          />
        )}
      </span>
    </h1>
  );
}
