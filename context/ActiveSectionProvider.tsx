"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { sections } from "@/lib/data";
import type { SectionName } from "@/lib/types";

/** What {@link useActiveSection} returns. */
interface ActiveSectionValue {
  /** The section currently in view (or last selected from the nav). */
  activeSection: SectionName;
  /**
   * Marks a section active right away, for nav clicks. Scroll-spy updates
   * pause briefly so the smooth scroll doesn't flicker through the sections
   * it passes.
   */
  selectSection: (name: SectionName) => void;
}

const ActiveSectionContext = createContext<ActiveSectionValue | null>(null);

// How long scroll-spy updates pause after a nav click (covers the smooth scroll).
const CLICK_LOCK_MS = 1000;

/** Props for {@link ActiveSectionProvider}. */
interface ActiveSectionProviderProps {
  /** The part of the app that can read the active section. */
  children: React.ReactNode;
}

/**
 * Tracks which page section is in view and shares it with the nav keys and
 * section readouts. Also keeps the URL hash in sync while scrolling.
 */
export default function ActiveSectionProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("About");
  const lastClick = useRef(0);

  const selectSection = useCallback((name: SectionName) => {
    lastClick.current = Date.now();
    setActiveSection(name);
  }, []);

  /*
    Scroll spy: one observer watching a thin band across the middle of the
    window. Whichever section crosses that band is active. Works for
    sections taller than the window and when several are on screen.
  */
  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.hash.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - lastClick.current < CLICK_LOCK_MS) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = sections.find(
            (s) => s.hash === `#${entry.target.id}`,
          );
          if (!section) continue;
          setActiveSection(section.name);
          // Keep the URL shareable. Replace (not push) so Back still leaves
          // the page instead of stepping through sections.
          if (window.location.hash !== section.hash) {
            window.history.replaceState(window.history.state, "", section.hash);
          }
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const value = useMemo(
    () => ({ activeSection, selectSection }),
    [activeSection, selectSection],
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

/**
 * Reads the active section. Must be used inside {@link ActiveSectionProvider}.
 *
 * @example
 * const { activeSection, selectSection } = useActiveSection();
 */
export function useActiveSection(): ActiveSectionValue {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider",
    );
  }

  return context;
}
