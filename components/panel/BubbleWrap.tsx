"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { LuChevronDown, LuVolume2, LuVolumeX } from "react-icons/lu";

import { playPop, useSoundEnabled } from "@/lib/sound";
import { cn } from "@/lib/utils";
import alienDance from "@/public/alien-dance-transparent.gif";

// Two rows of bubbles.
const COLUMNS = 12;
const COUNT = COLUMNS * 2;

// The secret: pop the four corners clockwise, starting top-left.
const SEQUENCE = [0, COLUMNS - 1, COUNT - 1, COUNT - COLUMNS];
// How long the dancing alien stays.
const ALIEN_MS = 6000;

/**
 * A collapsible strip of poppable bubbles, with an opt-in pop sound.
 *
 * It's a toy, not a control: the bubbles are hidden from assistive tech and
 * skipped by Tab, while the show/hide and sound toggles are real, labelled
 * buttons. Once every bubble is popped, the sheet refills. Popping the four
 * corners clockwise from the top-left summons a dancing alien.
 *
 * It starts collapsed, so the control panel fits laptop screens and doesn't
 * push the content down on phones.
 */
export default function BubbleWrap() {
  const [open, setOpen] = useState(false);
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

    // Advance the secret sequence, or start over. Presses on already-popped
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
    <div
      className={cn(
        "relative flex flex-col px-[18px] pt-3.5 cell",
        open ? "pb-[18px]" : "pb-3.5",
      )}
    >
      <div className="flex min-h-8 items-center justify-between gap-3">
        <span className="label">bubble wrap</span>
        <div className="flex items-center gap-2">
          {open && (
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
          )}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="bubble h-8 gap-1 rounded-full px-3 font-mono text-[11px] font-semibold tracking-wider uppercase"
          >
            {open ? "hide" : "show"}
            <span className="sr-only"> bubble wrap</span>
            <LuChevronDown
              className={cn(
                "size-3.5 transition-transform motion-reduce:transition-none",
                open && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            aria-hidden="true"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="-mx-3 -mb-3 overflow-hidden px-3 pb-3"
          >
            <div className="grid grid-cols-[repeat(12,minmax(0,22px))] justify-between gap-y-2.5 pt-3.5">
              {Array.from({ length: COUNT }, (_, i) => (
                <span
                  key={i}
                  onPointerDown={() => pop(i)}
                  className={cn(
                    "aspect-square w-full rounded-full transition-all duration-100 motion-reduce:transition-none",
                    popped.has(i)
                      ? "scale-90 well"
                      : "keycap cursor-pointer hover:scale-105",
                  )}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
