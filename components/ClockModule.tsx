"use client";

import { useNow } from "@/lib/hooks";
import { pad2 } from "@/lib/utils";

const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// digital readout + analog dial + date tile. Renders dashes until hydrated.
export default function ClockModule() {
  const now = useNow();

  const hours24 = now?.getHours() ?? 0;
  const hours12 = hours24 % 12 || 12;
  const minutes = now?.getMinutes() ?? 0;
  const time = now ? `${pad2(hours12)}:${pad2(minutes)}` : "--:--";
  const hourDeg = 180 + hours12 * 30 + minutes / 2;
  const minuteDeg = 180 + minutes * 6;

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-[2px]">
      <div className="cell flex items-center gap-3.5 p-3.5">
        <div className="well flex-1 rounded-[14px] p-[5px]">
          <div className="lcd flex items-baseline gap-2 rounded-[10px] px-3.5 py-3">
            <time
              className="dot text-[34px]"
              dateTime={now?.toISOString()}
              suppressHydrationWarning
            >
              {time}
            </time>
            <span className="dot text-[16px] text-lcd-dim">
              {now ? (hours24 >= 12 ? "pm" : "am") : ""}
            </span>
          </div>
        </div>
        <div className="well relative size-[58px] flex-none rounded-full" aria-hidden="true">
          {now && (
            <>
              <span
                className="absolute top-1/2 left-1/2 -ml-[1.5px] h-4 w-[3px] origin-top rounded-sm bg-ink"
                style={{ transform: `rotate(${hourDeg}deg)` }}
              />
              <span
                className="absolute top-1/2 left-1/2 -ml-px h-[22px] w-[2px] origin-top rounded-sm bg-ink"
                style={{ transform: `rotate(${minuteDeg}deg)` }}
              />
            </>
          )}
          <span className="absolute top-1/2 left-1/2 -mt-[5px] -ml-[5px] size-2.5 rounded-full bg-signal" />
        </div>
      </div>
      <div className="cell flex flex-col justify-center gap-1 px-4 py-3.5">
        <span className="label">{now ? weekdays[now.getDay()] : "---"}</span>
        <span className="dot text-[30px]">
          {now ? `${months[now.getMonth()]} ${pad2(now.getDate())}` : "--- --"}
        </span>
      </div>
    </div>
  );
}
