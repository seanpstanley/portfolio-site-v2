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
    <div className="relative flex flex-col items-center justify-center w-20 h-20 rounded-xl text-2xl nm-flat-pattens-blue dark:nm-flat-gray-900 backdrop-blur transition text-[#6c5cfb]  bg-white/80 dark:border-none dark:text-white/60 dark:bg-white/10 dark:hover:text-gray-300 ">
      <p className="-mb-1 text-5xl font-semibold tracking-tight">
        {(hours24to12(date) < 10 ? "0" : "") + hours24to12(date)}
      </p>
      <p className="mr-3 -mt-1 self-end text-sm">{amPm(date)}</p>
      <AnalogClock />
    </div>
  );
}
