import React from "react";

import { weekdays, months } from "@/lib/data";
import { useDate } from "@/lib/hooks";

export default function Calendar() {
  const { date } = useDate();

  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 transition-colors border border-white/40 hover:text-gray-600 bg-white/80 shadow-lg shadow-black/[0.05] backdrop-blur dark:text-white/60 text-2xl dark:bg-white/10 dark:border-none dark:hover:text-gray-300 rounded-xl">
      <p className="text-sm tracking-wide -mb-2">
        {weekdays[date.getDay()]} {months[date.getMonth()]}
      </p>
      <p className="font-semibold text-6xl tracking-tight">{date.getDate()}</p>
    </div>
  );
}
