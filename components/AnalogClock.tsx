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
    <div className="relative flex flex-col items-center justify-center w-20 h-20  rounded-xl text-2xl shadow-lg shadow-black/5 backdrop-blur transition-colors border border-white/40 hover:text-gray-600 bg-white/80 dark:border-none dark:text-white/60 dark:bg-white/10 dark:hover:text-gray-300">
      <p className="-mb-1 text-5xl font-semibold tracking-tight">
        {(hours24to12(date) < 10 ? "0" : "") + hours24to12(date)}
      </p>
      <p className="mr-3 -mt-1 self-end text-sm">{amPm(date)}</p>
      <div className="absolute flex justify-center items-center w-full h-full">
        <div className="absolute w-2 h-2 z-20 rounded-full bg-gray-800/60 dark:bg-white/80" />
        <div className="absolute w-1.5 h-1.5 z-30 rounded-full bg-orange-400" />
        <div className="absolute w-0.5 h-0.5 z-40  rounded-full bg-black" />
        <div className=" flex justify-center">
          <motion.div
            className="absolute origin-top w-1.5 h-6 rounded-full shadow-md backdrop-blur-sm bg-black/70 borderBlack dark:border-none dark:bg-white/70"
            animate={{ rotate: `${hours}deg` }}
          />
          <motion.div
            className="absolute w-1 h-8 z-20 origin-top rounded-full shadow-md backdrop-blur-sm bg-black/70 borderBlack dark:border-none dark:bg-white/70"
            animate={{ rotate: `${minutes}deg` }}
          />
          <motion.div
            className="absolute w-0.5 h-9 z-30 origin-top rounded-full shadow-md bg-orange-400 "
            animate={{ rotate: `${seconds}deg` }}
          />
          <motion.div
            className="absolute w-0.5 h-2 z-30 origin-top rounded-full shadow-md bg-orange-400"
            animate={{ rotate: `${seconds - 180}deg` }}
          />
        </div>
      </div>
    </div>
  );
}
