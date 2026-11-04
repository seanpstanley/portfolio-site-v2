"use client";

import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import { cn, pad2 } from "@/lib/utils";

interface SectionProps {
  name: SectionName;
  className?: string;
  children: React.ReactNode;
}

// a numbered module: "02 — experience" label, a groove, then the content
export default function Section({
  name,
  className,
  children,
}: SectionProps) {
  const index = links.findIndex((link) => link.name === name);
  const id = links[index].hash.slice(1);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("flex scroll-mt-28 flex-col gap-[22px] lg:scroll-mt-14", className)}
    >
      <div className="flex items-center gap-3.5">
        <h2 id={`${id}-heading`} className="label m-0">
          {pad2(index + 1)} — {name.toLowerCase()}
        </h2>
        <div className="well h-1 flex-1 rounded" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}
