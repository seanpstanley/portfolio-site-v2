"use client";

import { useNow } from "@/lib/clock";
import { pad2 } from "@/lib/utils";

// Lowercase, to match the panel's labels.
const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

/**
 * The panel's clock: a digital readout, an analog dial, and a date tile, in
 * the visitor's local time. Renders dashes until hydrated, since the server
 * doesn't know the visitor's time.
 */
export default function Clock() {
  const now = useNow();

  const hours24 = now?.getHours() ?? 0;
  const hours12 = hours24 % 12 || 12;
  const minutes = now?.getMinutes() ?? 0;
  const time = now ? `${pad2(hours12)}:${pad2(minutes)}` : "--:--";
  const hourDeg = 180 + hours12 * 30 + minutes / 2;
  const minuteDeg = 180 + minutes * 6;

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-[2px]">
      <div className="flex items-center gap-3.5 p-3.5 cell">
        <div className="flex-1 rounded-[14px] p-[5px] well">
          <div className="flex items-baseline gap-2 rounded-[10px] px-3.5 py-3 lcd">
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
        <div
          className="relative size-[58px] flex-none rounded-full well"
          aria-hidden="true"
        >
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
      <div className="flex flex-col justify-center gap-1 px-4 py-3.5 cell">
        <span className="label">{now ? weekdays[now.getDay()] : "---"}</span>
        <span className="dot text-[30px]">
          {now ? `${months[now.getMonth()]} ${pad2(now.getDate())}` : "--- --"}
        </span>
      </div>
    </div>
  );
}
