"use client";

import { LuFileText } from "react-icons/lu";

import BubbleWrap from "@/components/BubbleWrap";
import ClockModule from "@/components/ClockModule";
import NavKeys from "@/components/NavKeys";
import SectionReadout from "@/components/SectionReadout";
import ThemeSwitch from "@/components/ThemeSwitch";
import { resumeHref, socials } from "@/lib/data";

const keyLabel = "font-mono text-[13px] font-semibold";

/*
  The left-hand control surface: one sheet of seamed tiles.
  Phones get the name plate and utility row; the readout, nav keys, clock
  and bubble wrap are desktop-only (phones use MobileReadout + MobileDock).
*/
export default function ControlPanel() {
  return (
    <header className="lg:sticky lg:top-10 lg:w-[400px] lg:flex-none">
      <div className="sheet rounded-[30px]">
        <div className="cell flex flex-col gap-[18px] px-7 pt-7 pb-[26px]">
          <div className="flex items-center justify-between">
            <span className="label">portfolio</span>
            <div className="grille h-[22px] w-[66px]" aria-hidden="true" />
          </div>
          <h1 className="dot m-0 text-[44px] sm:text-[50px]">
            sean
            <br />
            stanley
          </h1>
          <p className="m-0 text-[17px] leading-normal text-pretty text-ink-2">
            I'm a <span className="font-semibold text-ink">frontend developer</span>{" "}
            who likes stuff that looks good.
          </p>
        </div>

        <div className="cell hidden p-3.5 lg:block">
          <SectionReadout />
        </div>

        <nav aria-label="Sections" className="hidden lg:block">
          <NavKeys variant="panel" />
        </nav>

        <div className="grid grid-cols-4 gap-[2px]">
          <div className="cell flex flex-col items-center gap-2.5 px-2 pt-4 pb-3.5">
            <ThemeSwitch />
            <span className="label">theme</span>
          </div>
          <div className="cell flex flex-col items-center gap-2 px-2 py-3.5">
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
          <div className="cell flex flex-col items-center gap-2 px-2 py-3.5">
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
          <div className="cell flex flex-col items-center gap-2 px-2 py-3.5">
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
          <ClockModule />
        </div>

        <div className="hidden lg:block [@media(max-height:900px)]:hidden">
          <BubbleWrap />
        </div>
      </div>
    </header>
  );
}
