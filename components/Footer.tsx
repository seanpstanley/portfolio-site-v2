// "use client";

import React from "react";

import { motion } from "framer-motion";

import { footerQuotes } from "@/lib/data";

export default function Footer() {
  const dayToQuote = () => {
    const weekdayNum = new Date().getDate();
    const quoteObj = footerQuotes[weekdayNum];
    return quoteObj;
  };

  const { quote, source, year } = dayToQuote();

  return (
    // <motion.footer
    //   className="xl:-z-10 flex flex-col xl:origin-top-left xl:w-[32rem] lg:m-0 xl:p-0 xl:fixed xl:bottom-10 xl:left-5 xl:-rotate-90 text-center xl:text-start text-gray-500 mb-10 px-4"
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ delay: 0.175 }}
    // >
    //   <small className="mb-2 block text-xs">&copy; MMXXIV.</small>
    //   <p className="text-xs">
    //     {quote} -<span className="italic">{source}</span>, {year}
    //   </p>
    // </motion.footer>
    <footer className="text-center  text-gray-500 mb-10 px-4">
      <small className="mb-2 block text-xs">&copy; MMXXIV.</small>
      <p className="text-xs">
        {quote} -<span className="italic">{source}</span>, {year}
      </p>
    </footer>
  );
}
