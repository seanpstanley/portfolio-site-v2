"use client";

import { footerQuotes } from "@/lib/data";
import { useNow } from "@/lib/hooks";
import { romanize } from "@/lib/utils";

// an LCD strip with the quote of the day (picked by day of the month).
// Uses the visitor's clock, so it changes daily without a redeploy.
export default function Footer() {
  const now = useNow();
  const entry = now ? footerQuotes[now.getDate()] : null;

  return (
    <footer className="mt-[104px] rounded-[20px] p-[7px] well">
      <div className="flex min-h-[72px] flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-[15px] px-[22px] py-[18px] lcd">
        <span className="dot text-[22px] text-signal">
          © {now ? romanize(now.getFullYear()) : ""}
        </span>
        {entry && (
          <figure className="m-0 flex-[1_1_320px] font-mono text-[13px] leading-[1.55] text-pretty">
            <blockquote className="m-0 inline">“{entry.quote}”</blockquote>{" "}
            <figcaption className="inline text-lcd-dim">
              — <cite className="not-italic">{entry.source}</cite>, {entry.year}
            </figcaption>
          </figure>
        )}
      </div>
    </footer>
  );
}
