"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { links } from "@/lib/data";
import { cn, pad2 } from "@/lib/utils";

interface SectionReadoutProps {
  size?: "lg" | "sm";
  className?: string;
}

// LCD screen mirroring the current section. Decorative: the nav carries
// the same information for assistive tech via aria-current.
export default function SectionReadout({
  size = "lg",
  className,
}: SectionReadoutProps) {
  const { activeSection } = useActiveSectionContext();
  const index = Math.max(
    0,
    links.findIndex((link) => link.name === activeSection),
  );
  const isLarge = size === "lg";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "well",
        isLarge ? "rounded-2xl p-1.5" : "rounded-[14px] p-[5px]",
        className,
      )}
    >
      <div
        className={cn(
          "lcd flex items-end justify-between gap-3",
          isLarge ? "rounded-[11px] px-[18px] py-4" : "rounded-[10px] px-3.5 py-2.5",
        )}
      >
        <div className="flex items-baseline gap-3.5">
          <span
            className={cn("dot text-signal", isLarge ? "text-[40px]" : "text-[26px]")}
          >
            {pad2(index + 1)}
          </span>
          <span className={cn("dot", isLarge ? "text-[26px]" : "text-[19px]")}>
            {links[index].name.toLowerCase()}
          </span>
        </div>
        <div className="flex gap-[5px] pb-1.5">
          {links.map((link, i) => (
            <span
              key={link.hash}
              className={cn(
                "size-1.5 rounded-full transition-colors",
                i <= index ? "bg-signal" : "bg-lcd-off",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
