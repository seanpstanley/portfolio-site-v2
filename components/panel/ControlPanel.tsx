"use client";

import { useEffect, useRef } from "react";

import { LuFileText } from "react-icons/lu";

import BubbleWrap from "@/components/panel/BubbleWrap";
import Clock from "@/components/panel/Clock";
import NavKeys from "@/components/panel/NavKeys";
import SectionReadout from "@/components/panel/SectionReadout";
import ThemeSwitch from "@/components/panel/ThemeSwitch";
import TypedHeading from "@/components/panel/TypedHeading";
import { resumeHref, socials } from "@/lib/data";
import { useTheme } from "@/lib/theme";

// Shared styles for the text keys ("gh", "in").
const keyLabel = "font-mono text-[13px] font-semibold";
// The label under the theme switch, per preference.
const themeLabel = { light: "light", system: "auto", dark: "dark" } as const;
// Space kept between the sticky panel and the window edges, in px.
const GAP = 40;

/**
 * The left-hand control surface: one sheet of seamed tiles with the name
 * plate, section readout, nav keys, theme switch, links, clock, and bubble
 * wrap. Sticky on desktop.
 *
 * Phones get the name plate, utility row, and bubble wrap. The readout, nav
 * keys, and clock are desktop-only; phones use `MobileReadout` and
 * `MobileDock` instead.
 */
export default function ControlPanel() {
  const ref = useRef<HTMLElement>(null);
  const { preference } = useTheme();

  /*
    Sticky, even when the panel is taller than the window: its sticky top
    goes negative by the overflow, so it scrolls with the page until its
    bottom edge is in view, then holds there.
  */
  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;

    const update = () => {
      const top = Math.min(GAP, window.innerHeight - panel.offsetHeight - GAP);
      panel.style.setProperty("--panel-top", `${top}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(panel);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      ref={ref}
      className="lg:sticky lg:top-[var(--panel-top,2.5rem)] lg:w-[400px] lg:flex-none"
    >
      <div className="sheet rounded-[30px]">
        <div className="flex flex-col gap-[18px] px-7 pt-7 pb-[26px] cell">
          <div className="flex items-center justify-between">
            <span className="label">portfolio</span>
            <div className="h-[22px] w-[66px] grille" aria-hidden="true" />
          </div>
          <TypedHeading className="text-[44px] sm:text-[50px]" />
          <p className="m-0 text-[17px] leading-normal text-pretty text-ink-2">
            <span className="font-semibold text-ink">Frontend developer</span>{" "}
            who likes stuff that looks good.
          </p>
        </div>

        <div className="hidden p-3.5 cell lg:block">
          <SectionReadout />
        </div>

        <nav aria-label="Sections" className="hidden lg:block">
          <NavKeys variant="panel" />
        </nav>

        <div className="grid grid-cols-[1.45fr_1fr_1fr_1fr] gap-[2px]">
          <div className="flex flex-col items-center gap-2.5 px-1.5 pt-4 pb-3.5 cell">
            <ThemeSwitch />
            <span className="label" aria-hidden="true">
              {themeLabel[preference]}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 px-2 py-3.5 cell">
            <a
              className="bubble size-11 rounded-[14px]"
              href={resumeHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Résumé PDF (opens in a new tab)"
            >
              <LuFileText className="size-[18px]" aria-hidden="true" />
            </a>
            <span className="label">cv</span>
          </div>
          <div className="flex flex-col items-center gap-2 px-2 py-3.5 cell">
            <a
              className={`bubble size-11 rounded-full ${keyLabel}`}
              href={socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in a new tab)"
            >
              gh
            </a>
            <span className="label">github</span>
          </div>
          <div className="flex flex-col items-center gap-2 px-2 py-3.5 cell">
            <a
              className={`bubble size-11 rounded-full ${keyLabel}`}
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in a new tab)"
            >
              in
            </a>
            <span className="label">linkedin</span>
          </div>
        </div>

        <div className="hidden lg:block">
          <Clock />
        </div>

        <BubbleWrap />
      </div>
    </header>
  );
}
