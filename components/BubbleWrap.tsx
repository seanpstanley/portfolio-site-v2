"use client";

import { useState } from "react";

import { LuVolume2, LuVolumeX } from "react-icons/lu";

import { playPop, useSoundEnabled } from "@/lib/sound";
import { cn } from "@/lib/utils";

const COUNT = 24;

/*
  A strip of poppable bubbles. It's a toy, not a control: the bubbles are
  hidden from assistive tech and skipped by Tab. The sound toggle is a real,
  labelled button. Once every bubble is popped, the sheet refills.
*/
export default function BubbleWrap() {
  const [popped, setPopped] = useState<Set<number>>(() => new Set());
  const { enabled: soundOn, toggle: toggleSound } = useSoundEnabled();

  const pop = (i: number) => {
    if (popped.has(i)) return;
    if (soundOn) playPop();
    const next = new Set(popped).add(i);
    setPopped(next.size === COUNT ? new Set() : next);
  };

  return (
    <div className="cell flex flex-col gap-3.5 px-[18px] pt-3.5 pb-[18px]">
      <div className="flex items-center justify-between">
        <span className="label">bubble wrap</span>
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label="Pop sound"
          className="bubble size-8 rounded-full"
        >
          {soundOn ? (
            <LuVolume2 className="size-3.5" aria-hidden="true" />
          ) : (
            <LuVolumeX className="size-3.5" aria-hidden="true" />
          )}
        </button>
      </div>
      <div
        aria-hidden="true"
        className="grid grid-cols-[repeat(12,22px)] justify-between gap-y-2.5"
      >
        {Array.from({ length: COUNT }, (_, i) => (
          <span
            key={i}
            onPointerDown={() => pop(i)}
            className={cn(
              "size-[22px] rounded-full transition-all duration-100 motion-reduce:transition-none",
              popped.has(i) ? "well scale-90" : "keycap cursor-pointer hover:scale-105",
            )}
          />
        ))}
      </div>
    </div>
  );
}
