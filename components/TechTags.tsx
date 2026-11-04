"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

/** Props for {@link TechTags}. */
interface TechTagsProps {
  /** Technologies to show, in display order. */
  tags: string[];
  /**
   * Maximum number of chips to show before the rest collapse into a "+N" chip
   * with a popover. Shows every tag when omitted.
   */
  max?: number;
}

/**
 * A wrapping row of technology chips, used on experience and project cards.
 *
 * With `max` set, the overflow collapses into a "+N" chip whose popover
 * lists the rest (see {@link MoreTags}).
 *
 * @example
 * <TechTags tags={project.tags} max={3} />
 */
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

// Keep the popover this far from the screen edges.
const EDGE = 16;

/** Props for {@link MoreTags}. */
interface MoreTagsProps {
  /** The tags that didn't fit, listed in the popover. */
  tags: string[];
}

/**
 * A "+N" chip with a popover listing the remaining tags.
 *
 * It's a disclosure button, so it works with hover, keyboard focus (Escape
 * closes), and touch (tap toggles). The popover opens above the chip and
 * slides sideways as needed to stay on screen.
 */
function MoreTags({ tags }: MoreTagsProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const itemRef = useRef<HTMLLIElement>(null);
  const popoverRef = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  // A short delay lets the pointer cross the gap into the popover.
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Shift the popover (left-aligned to the chip by default) back on screen,
  // and grow it from the chip.
  useLayoutEffect(() => {
    const item = itemRef.current;
    const popover = popoverRef.current;
    if (!open || !item || !popover) return;

    const itemLeft = item.getBoundingClientRect().left;
    const viewport = document.documentElement.clientWidth;
    const room = viewport - EDGE - itemLeft - popover.offsetWidth;
    const offset = Math.max(Math.min(0, room), EDGE - itemLeft);

    popover.style.left = `${offset}px`;
    popover.style.transformOrigin = `${item.offsetWidth / 2 - offset}px bottom`;
  }, [open]);

  return (
    <li
      ref={itemRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        type="button"
        className="cursor-pointer chip transition-colors hover:text-ink"
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
            ref={popoverRef}
            id={id}
            aria-label="More technologies"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className="absolute bottom-full left-0 z-20 mb-2.5 flex w-max max-w-[min(280px,calc(100vw-32px))] list-none flex-wrap gap-2 rounded-2xl p-3 floating"
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
