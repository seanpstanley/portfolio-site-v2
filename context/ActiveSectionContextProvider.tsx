"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// after a nav click, ignore scroll-spy updates while the smooth scroll runs
const CLICK_LOCK_MS = 1000;

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("About");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const lastClick = useRef(0);

  useEffect(() => {
    lastClick.current = timeOfLastClick;
  }, [timeOfLastClick]);

  /*
    Scroll spy: one observer watching a thin band across the middle of the
    window. Whichever section crosses that band is active. Works for
    sections taller than the window and when several are on screen.
  */
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.hash.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - lastClick.current < CLICK_LOCK_MS) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const link = links.find((l) => l.hash === `#${entry.target.id}`);
          if (!link) continue;
          setActiveSection(link.name);
          // keep the URL shareable; replace (not push) so Back still
          // leaves the page instead of stepping through sections
          if (window.location.hash !== link.hash) {
            window.history.replaceState(window.history.state, "", link.hash);
          }
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }

  return context;
}
