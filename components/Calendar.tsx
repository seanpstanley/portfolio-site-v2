import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

// import Clock from "@/components/Clock";
import { weekdays, months } from "@/lib/data";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    // clean up the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  const hours24to12 = (date: Date) => {
    return (date.getHours() + 24) % 12 || 12;
  };

  const amPm = (date: Date) => {
    return date.getHours() >= 12 ? "pm" : "am";
  };

  return (
    <motion.div
      className="hidden lg:absolute origin-top-left top-5 left-28 sm:flex gap-4 text-gray-800"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <div className="flex flex-col items-center justify-center x transition-colors border border-white/40 bg-white/80 shadow-lg shadow-black/[0.05] backdrop-blur dark:text-white/60 text-2xl dark:bg-white/10 dark:border-none dark:hover:text-gray-300 rounded-xl">
        {/* <BsCalendar className="dark:text-white/90" /> */}
        <p className="text-xl -mb-2 font-normal">
          {/* {date.toLocaleDateString("en-GB", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })} */}
          {weekdays[date.getDay()]} {months[date.getMonth()]}
        </p>
        <p className="font-semibold text-7xl tracking-tight">
          {date.getDate()}
        </p>
      </div>
      {/* <div className="flex flex-col tracking-widest	items-end justify-center p-3 transition-colors dark:text-white/60 text-2xl dark:bg-white/10 dark:hover:text-gray-300 dark:border-white/40 rounded-xl">
        <p className="text-6xl -mb-2 font-normal">
          {date.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
          {(date.getHours() < 10 ? "0" : "") + date.getHours()}
        </p>
        <p className="font-semibold text-6xl">
          {(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}
        </p>
      </div> */}
      {/* <Clock /> */}
      <div className="flex flex-col items-center justify-center w-28 h-28 transition-colors border border-white/40 bg-white/80 shadow-lg shadow-black/[0.05] backdrop-blur dark:border-none dark:text-white/60 text-2xl dark:bg-white/10 dark:hover:text-gray-300 rounded-xl">
        <p className="text-7xl -mb-2 font-semibold tracking-tight">
          {(hours24to12(date) < 10 ? "0" : "") + hours24to12(date)}
        </p>
        <p className="text-xl self-end mr-4 font-normal">
          {/* {(hours24to12(date) < 10 ? "0" : "") + hours24to12(date)} */}
          {amPm(date)}
        </p>
      </div>
    </motion.div>
  );
}
