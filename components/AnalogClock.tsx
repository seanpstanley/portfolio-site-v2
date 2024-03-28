import React from "react";

import { motion } from "framer-motion";

import { useDate } from "@/lib/hooks";

export default function Analog() {
  const { date, hours, minutes, seconds } = useDate();

  const hours24to12 = (date: Date) => {
    return (date.getHours() + 24) % 12 || 12;
  };

  const amPm = (date: Date) => {
    return date.getHours() >= 12 ? "pm" : "am";
  };

  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 transition-colors border border-white/40 hover:text-gray-600 bg-white/80 shadow-lg shadow-black/5 backdrop-blur dark:border-none dark:text-white/60 text-2xl dark:bg-white/10 dark:hover:text-gray-300 rounded-xl">
      <p className="text-6xl -mb-2 font-semibold tracking-tight">
        {(hours24to12(date) < 10 ? "0" : "") + hours24to12(date)}
      </p>
      <p className="text-sm tracking-wide self-end mr-2">{amPm(date)}</p>
      <div className="absolute w-2 h-2 z-20 bg-gray-800/60 dark:bg-white/80 rounded-full" />
      <div className="absolute w-1.5 h-1.5 z-30 bg-orange-400 rounded-full" />
      <div className="absolute w-0.5 h-0.5 z-40 bg-black  rounded-full" />
      <div className="transition flex justify-center absolute before:absolute before:w-2 before:h-12">
        <motion.div
          className="absolute w-1.5 h-6 bg-black/70 borderBlack dark:border-none dark:bg-white/70 rounded-full shadow-md backdrop-blur-sm origin-top	"
          initial={false}
          animate={{ rotate: `${hours}deg` }}
        />
      </div>
      <div className="flex justify-center absolute">
        <motion.div
          className="absolute w-1 h-8 z-20 bg-black/70 borderBlack dark:border-none dark:bg-white/70 rounded-full shadow-md backdrop-blur-sm origin-top	"
          initial={false}
          animate={{ rotate: `${minutes}deg` }}
        />
      </div>
      <div className="flex justify-center absolute">
        <motion.div
          className="absolute w-0.5 h-9 z-30 bg-orange-400 rounded-full shadow-md origin-top	"
          initial={"0deg"}
          animate={{ rotate: `${seconds}deg` }}
        />
        <motion.div
          className="absolute w-0.5 h-2 z-30 bg-orange-400 rounded-full shadow-md origin-top"
          initial={"0deg"}
          animate={{ rotate: `${seconds - 180}deg` }}
        />
      </div>
    </div>
  );
}
