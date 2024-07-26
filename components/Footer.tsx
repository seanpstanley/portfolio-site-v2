"use client";

import { motion } from "framer-motion";

import DateAndTime from "@/components/DateAndTime";
import { footerQuotes } from "@/lib/data";
import { romanize } from "@/lib/utils";

export default function Footer() {
  const date = new Date();

  const dayToQuote = () => {
    const quoteObj = footerQuotes[date.getDate()];
    console.log(date);
    return quoteObj;
  };
  const { quote, source, year } = dayToQuote();

  const curYear = date.getFullYear();
  const romanYear = romanize(curYear);

  return (
    <footer className="pb-12 md:pb-16 lg:pb-20 text-gray-500 dark:text-white/40 text-start w-full px-2 lg:px-0">
      <motion.div
        className="border-t border-gray-400 dark:border-gray-400/20 pt-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.165,
        }}
      />
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-y-1.5 md:gap-x-6 md:justify-between"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.175,
        }}
      >
        <small className="mb-2 block text-xs leading-relaxed">
          &copy; {romanYear} | "{`${quote}`}" -
          <span className="italic">
            {source}, {year}
          </span>
        </small>

        <DateAndTime />
      </motion.div>
    </footer>
  );
}
