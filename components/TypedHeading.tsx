"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

// [text to type, pause after it (ms)] — each step continues from the last
const steps: [string, number][] = [
  ["hi,", 850],
  [" i'm\nsean.", 0],
];
const FULL_TEXT = steps.map(([text]) => text).join("");
const START_DELAY = 400;
const CHAR_DELAY = 85;

interface TypedHeadingProps {
  className?: string;
}

/*
  Types the greeting out on the dot-matrix display.
  - Screen readers get the whole heading once (the typed text is aria-hidden).
  - The final text is rendered invisibly underneath, so nothing shifts while
    typing.
  - With "reduce motion" on, the full text shows immediately.
*/
export default function TypedHeading({ className }: TypedHeadingProps) {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

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
    timers.push(setTimeout(() => setDone(true), at + 1200));

    return () => timers.forEach(clearTimeout);
  }, [reduceMotion]);

  const shown = reduceMotion ? FULL_TEXT : typed;
  const showCaret = !reduceMotion && !done;

  return (
    <h1 className={cn("dot relative m-0 whitespace-pre-line", className)}>
      <span className="sr-only">Hi, I'm Sean.</span>
      {/* reserves the final size so the layout never moves */}
      <span aria-hidden="true" className="invisible">
        {FULL_TEXT}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {shown}
        {showCaret && (
          <span className="ml-[0.06em] inline-block h-[0.82em] w-[0.42em] translate-y-[0.08em] animate-[caret_1s_steps(1)_infinite] bg-signal align-baseline" />
        )}
      </span>
    </h1>
  );
}
