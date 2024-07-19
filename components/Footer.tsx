import React from "react";

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
    <footer className="text-center  text-gray-500 mb-10 px-4">
      <small className="mb-2 block text-xs">&copy; {romanYear}</small>
      <p className="text-xs">
        "{`${quote}`}" -<span className="italic">{source}</span>, {year}
      </p>
    </footer>
  );
}
