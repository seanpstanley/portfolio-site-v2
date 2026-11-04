"use client";

import Section from "@/components/Section";
import { skillGroups } from "@/lib/data";

const cap = "keycap min-h-[42px] rounded-xl px-[15px] text-[14.5px] font-medium";

// keycaps grouped under colored legends, on one seamed sheet
export default function Skills() {
  return (
    <Section name="Skills">
      <div className="sheet rounded-[26px]">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="cell grid gap-[18px] px-6 py-[22px] sm:grid-cols-[150px_minmax(0,1fr)]"
          >
            <div className="flex items-center gap-[9px] sm:pt-3">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-[3px]"
                style={{ background: group.color }}
              />
              <h3 className="label m-0 text-ink">{group.name}</h3>
            </div>
            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {group.items.map((skill) => (
                <li key={skill} className={cap}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="cell flex items-center justify-between gap-4 px-6 py-[18px]">
          <span className="label">bonus key</span>
          <span className={`${cap} bubble-signal font-semibold`}>
            good personality :)
          </span>
        </div>
      </div>
    </Section>
  );
}
