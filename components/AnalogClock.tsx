import { motion } from "framer-motion";

import { useDate } from "@/lib/hooks";

export default function AnalogClock() {
  const { hours, minutes, seconds } = useDate();

  return (
    <div className="absolute flex justify-center items-center w-full h-full">
      <div className="absolute w-2.5 h-2.5 z-20 rounded-full bg-gray-800 dark:bg-gray-50" />
      <div className="absolute w-1.5 h-1.5 z-30 rounded-full bg-orange-400" />
      <div className="absolute w-[0.175rem] h-[0.175rem] z-40  rounded-full bg-black" />
      <div className="flex justify-center">
        <motion.div
          className="absolute origin-top flex items-center justify-center w-[0.225rem] h-2.5 rounded-full shadow-md bg-gray-900 dark:bg-gray-50"
          // animate={{ rotate: `${hours}deg` }}
          style={{ rotate: `${hours}deg` }}
        >
          <motion.div className="absolute translate-y-[0.7rem] w-1.5 h-[1.1rem] rounded-full shadow-md bg-gray-900 dark:bg-gray-50" />
        </motion.div>
        <motion.div
          className="absolute origin-top flex items-center justify-center w-[0.225rem] h-2.5 z-20 rounded-full shadow-md bg-gray-900 dark:bg-gray-50"
          // animate={{ rotate: `${minutes}deg` }}
          style={{ rotate: `${minutes}deg` }}
        >
          <motion.div className="absolute translate-y-[1.05rem] origin-top w-1.5 h-[1.8rem] z-20 rounded-full shadow-md bg-gray-900 dark:bg-gray-50" />
        </motion.div>
        <motion.div
          className="absolute origin-top w-[0.075rem] h-9 z-30 rounded-full shadow-md bg-orange-400 "
          // animate={{ rotate: `${seconds}deg` }}
          style={{ rotate: `${seconds}deg` }}
        />
        <motion.div
          className="absolute origin-top  w-[0.075rem] h-2.5 z-30 rounded-full shadow-md bg-orange-400"
          // animate={{ rotate: `${seconds - 180}deg` }}
          style={{ rotate: `${seconds - 180}deg` }}
        />
      </div>
    </div>
  );
}
