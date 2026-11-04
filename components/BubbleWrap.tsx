"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { LuVolume2, LuVolumeX } from "react-icons/lu";

import { playPop, useSoundEnabled } from "@/lib/sound";
import { cn } from "@/lib/utils";
import alienDance from "@/public/alien-dance-transparent.gif";

const COLUMNS = 12;
const COUNT = COLUMNS * 2;

// the secret: pop the four corners clockwise, starting top-left
const SEQUENCE = [0, COLUMNS - 1, COUNT - 1, COUNT - COLUMNS];
const ALIEN_MS = 6000;

/*
  A strip of poppable bubbles. It's a toy, not a control: the bubbles are
  hidden from assistive tech and skipped by Tab. The sound toggle is a real,
  labelled button. Once every bubble is popped, the sheet refills.
*/
export default function BubbleWrap() {
  const [popped, setPopped] = useState<Set<number>>(() => new Set());
  const [progress, setProgress] = useState(0);
  const [alien, setAlien] = useState(false);
  const alienTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const { enabled: soundOn, toggle: toggleSound } = useSoundEnabled();

  useEffect(() => () => clearTimeout(alienTimer.current), []);

  const pop = (i: number) => {
    if (!popped.has(i)) {
      if (soundOn) playPop();
      const next = new Set(popped).add(i);
      setPopped(next.size === COUNT ? new Set() : next);
    }

    // advance the secret sequence, or start over. Presses on already-popped
    // bubbles count too, so the secret works no matter what's been popped.
    const step =
      SEQUENCE[progress] === i ? progress + 1 : i === SEQUENCE[0] ? 1 : 0;
    if (step === SEQUENCE.length) {
      setProgress(0);
      setAlien(true);
      clearTimeout(alienTimer.current);
      alienTimer.current = setTimeout(() => setAlien(false), ALIEN_MS);
    } else {
      setProgress(step);
    }
  };

  return (
    <div className="cell relative flex flex-col gap-3.5 px-[18px] pt-3.5 pb-[18px]">
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
      <AnimatePresence>
        {alien && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 right-14"
            initial={{ opacity: 0, y: 40, scale: 0.4 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <Image src={alienDance} alt="" unoptimized className="size-20" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
