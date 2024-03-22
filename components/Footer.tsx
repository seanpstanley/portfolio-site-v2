import React from "react";

import { footerQuotes } from "@/lib/data";

export default function Footer() {
  const dayToQuote = () => {
    const weekdayNum = new Date().getDate();
    const quoteObj = footerQuotes[weekdayNum];
    return quoteObj;
  };

  const { quote, source, year } = dayToQuote();

  return (
    <footer className="sm:fixed sm:bottom-1/4 sm:rotate-90 sm:-left-0 text-center sm:text-start text-gray-500 mb-10 px-4">
      <small className="mb-2 block text-xs">&copy; MMXXIV.</small>
      <p className="text-xs">
        {quote} -<span className="italic">{source}</span>, {year}
      </p>
    </footer>
  );
}
