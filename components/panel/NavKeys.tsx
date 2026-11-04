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

import { useActiveSection } from "@/context/ActiveSectionProvider";
import { sections } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import { cn, pad2 } from "@/lib/utils";

// The icon on each section's key in the panel.
const icons: Record<SectionName, IconType> = {
  About: LuUser,
  Experience: LuBriefcase,
  Projects: LuLayoutGrid,
  Skills: LuSlidersVertical,
  Contact: LuMail,
};

/** Props for {@link NavKeys}. */
interface NavKeysProps {
  /**
   * Where the keys sit: `"panel"` (desktop control panel, icon keys) or
   * `"dock"` (phone dock, smaller numbered keys).
   */
  variant: "panel" | "dock";
}

/**
 * The section nav: one domed key per section. The active key stays pressed,
 * its LED lights, and it's marked `aria-current`.
 */
export default function NavKeys({ variant }: NavKeysProps) {
  const { activeSection, selectSection } = useActiveSection();
  const isDock = variant === "dock";

  return (
    <ul className="grid grid-cols-5 gap-[2px]">
      {sections.map((section, i) => {
        const isActive = section.name === activeSection;
        const Icon = icons[section.name];

        return (
          <li key={section.hash} className="cell">
            <Link
              href={section.hash}
              aria-current={isActive ? "true" : undefined}
              onClick={() => selectSection(section.name)}
              className={cn(
                "group flex flex-col items-center outline-offset-[-4px]",
                isDock
                  ? "gap-1.5 px-0.5 pt-2.5 pb-2"
                  : "gap-2.5 px-1 pt-4 pb-3.5",
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
                {section.short}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
