"use client";

import { useEffect, useId, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

interface TechTagsProps {
  tags: string[];
  // show at most this many, then a "+N" chip that reveals the rest
  max?: number;
}

export default function TechTags({ tags, max }: TechTagsProps) {
  const shown = max ? tags.slice(0, max) : tags;
  const hidden = tags.slice(shown.length);

  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {shown.map((tag) => (
        <li key={tag} className="chip">
          {tag}
        </li>
      ))}
      {hidden.length > 0 && <MoreTags tags={hidden} />}
    </ul>
  );
}

/*
  "+N" chip with a popover listing the rest. A disclosure button, so it
  works with hover, keyboard focus (Escape closes), and touch (tap toggles).
*/
function MoreTags({ tags }: { tags: string[] }) {
  const [open, setOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const id = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => {
    clearTimeout(closeTimer.current);
    // open toward whichever side has room
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) setAlignRight(rect.left > window.innerWidth / 2);
    setOpen(true);
  };
  // a short delay lets the pointer cross the gap into the popover
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <li className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        ref={triggerRef}
        type="button"
        className="chip cursor-pointer transition-colors hover:text-ink"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => (open ? setOpen(false) : show())}
        onFocus={show}
        onBlur={hide}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        <span aria-hidden="true">+{tags.length}</span>
        <span className="sr-only">Show {tags.length} more technologies</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={id}
            aria-label="More technologies"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className={cn(
              "pad absolute bottom-full z-20 mb-2.5 flex w-max max-w-[min(280px,calc(100vw-48px))] list-none flex-wrap gap-2 rounded-2xl p-3",
              alignRight ? "right-0 origin-bottom-right" : "left-0 origin-bottom-left",
            )}
          >
            {tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
