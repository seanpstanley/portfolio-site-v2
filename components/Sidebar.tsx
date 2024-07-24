"use client";

import React from "react";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

import DateAndTime from "@/components/DateAndTime";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { links } from "@/lib/data";

export default function Sidebar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <aside className="hidden md:flex md:flex-col sm:justify-center sm:gap-6 h-screen top-0 fixed">
      {/* <motion.div
        className="h-16 w-28 rounded-xl nm-flat-pattens-blue-lg relative"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div> */}

      <nav className="flex flex-col w-28 nm-flat-pattens-blue-lg dark:nm-flat-cinder-xl rounded-xl py-4">
        <ul className="flex flex-col items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-[#6c5cfb] transition dark:text-white/60 dark:hover:text-[#6c5cfb] z-10",
                  {
                    "text-gray-950 font-semibold dark:text-white/90":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="nm-flat-pattens-blue dark:nm-flat-cinder-lg rounded-full absolute inset-x-0 inset-y-1 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <DateAndTime />
    </aside>
  );
}
