import React from "react";

import AnalogClock from "@/components/AnalogClock";
import { useDate } from "@/lib/hooks";

export default function Time() {
  const { date } = useDate();

  const hours24to12 = (date: Date) => {
    return (date.getHours() + 24) % 12 || 12;
  };

  const amPm = (date: Date) => {
    return date.getHours() >= 12 ? "pm" : "am";
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center size-20 rounded-xl text-2xl nm-flat-pattens-blue dark:nm-flat-cinder transition-colors motion-reduce:transition-none dark:hover:text-[#6c5cfb] hover:text-[#6c5cfb] dark:text-white/60"
      suppressHydrationWarning
    >
      <p className="-mb-1 text-5xl font-semibold tracking-tight">
        {(hours24to12(date) < 10 ? "0" : "") + hours24to12(date)}
      </p>
      <p className="mr-3 -mt-1 self-end text-sm">{amPm(date)}</p>
      <AnalogClock />
    </div>
  );
}
