import React from "react";

import { weekdays, months } from "@/lib/data";
import { useDate } from "@/lib/hooks";

export default function Date() {
  const { date } = useDate();

  return (
    <div className="flex flex-col items-center justify-center size-20 text-2xl rounded-xl nm-flat-pattens-blue dark:nm-flat-cinder dark:hover:text-[#6c5cfb] hover:text-[#6c5cfb] bg-white/80 dark:text-white/60 transition-colors motion-reduce:transition-none">
      <p className="-mb-1.5 text-sm">
        {weekdays[date.getDay()]} {months[date.getMonth()]}
      </p>
      <p className="font-semibold text-5xl tracking-tight">{date.getDate()}</p>
    </div>
  );
}
