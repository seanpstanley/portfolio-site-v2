import React from "react";

import { weekdays, months } from "@/lib/data";
import { useDate } from "@/lib/hooks";

export default function Calendar() {
  const { date } = useDate();

  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 text-2xl rounded-xl shadow-lg shadow-black/[0.05] backdrop-blur border border-white/40 hover:text-gray-600 bg-white/80 dark:text-white/60 dark:bg-white/10 dark:border-none dark:hover:text-gray-300 transition-colors">
      <p className="-mb-1.5 text-sm tracking-wide">
        {weekdays[date.getDay()]} {months[date.getMonth()]}
      </p>
      <p className="font-semibold text-5xl tracking-tight">{date.getDate()}</p>
    </div>
  );
}
