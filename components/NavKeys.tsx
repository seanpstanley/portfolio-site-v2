"use client";

import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuBriefcase,
  LuLayoutGrid,
  LuMail,
  LuSlidersVertical,
  LuUser,
} from "react-icons/lu";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import { cn, pad2 } from "@/lib/utils";

const icons: Record<SectionName, IconType> = {
  About: LuUser,
  Experience: LuBriefcase,
  Projects: LuLayoutGrid,
  Skills: LuSlidersVertical,
  Contact: LuMail,
};

interface NavKeysProps {
  variant: "panel" | "dock";
}

// one domed key per section; the active key stays pressed and its LED lights
export default function NavKeys({ variant }: NavKeysProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const isDock = variant === "dock";

  return (
    <ul className="grid grid-cols-5 gap-[2px]">
      {links.map((link, i) => {
        const isActive = link.name === activeSection;
        const Icon = icons[link.name];

        return (
          <li key={link.hash} className="cell">
            <Link
              href={link.hash}
              aria-current={isActive ? "true" : undefined}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              className={cn(
                "group flex flex-col items-center outline-offset-[-4px]",
                isDock ? "gap-1.5 px-0.5 pt-2.5 pb-2" : "gap-2.5 px-1 pt-4 pb-3.5",
              )}
            >
              <span className="led" data-on={isActive} aria-hidden="true" />
              <span
                className={cn(
                  "bubble rounded-full",
                  isDock ? "size-[42px]" : "size-[50px]",
                )}
                data-pressed={isActive}
                aria-hidden="true"
              >
                {isDock ? (
                  <span className="dot text-[14px]">{pad2(i + 1)}</span>
                ) : (
                  <Icon className="size-5" />
                )}
              </span>
              <span
                className={cn(
                  "label transition-colors",
                  isDock && "text-[10px]",
                  isActive ? "text-ink" : "group-hover:text-ink",
                )}
              >
                {link.short}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
