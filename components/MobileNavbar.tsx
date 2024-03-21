import React, { useState, useRef } from "react";

import clsx from "clsx";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { useClickAway } from "react-use";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { links } from "@/lib/data";
import { fadeUpAnimationVariants } from "@/lib/utils";
import { hamburgerAnimationVariants } from "@/lib/utils";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header>
      <nav className="z-[999] sm:hidden fixed top-5 right-5" ref={ref}>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              layout
              className="fixed flex flex-col gap-4 rounded-3xl mb-0 left-5 top-5 right-5 p-3 pr-20 border border-white/40 bg-white/80 shadow-lg shadow-black/[0.05] backdrop-blur dark:bg-gray-950/75 dark:border-none"
              exit={{ opacity: 0 }}
            >
              {links.map((link, index) => (
                <motion.li
                  //first:mr-10
                  className="flex items-center justify-center relative"
                  key={link.hash}
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center py-4 hover:text-gray-800 transition dark:text-white/60 dark:hover:text-white/75",
                      {
                        "text-gray-950 font-semibold dark:text-white/90":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsOpen((prev) => !prev);
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <span className="bg-gray-100 rounded-2xl absolute inset-0 -z-10 dark:bg-gray-800"></span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        {/* <motion.div
          layout="size"
          initial={{ borderRadius: 50 }}
          className={`bg-white ${
            isOpen ? "w-10 h-10" : "w-24 h-24"
          } flex justify-center items-center`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div layout className="rounded-full bg-black h-3 w-3" />
        </motion.div> */}
        <MotionConfig
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.button
            initial={false}
            // initial={{ y: -100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            animate={isOpen ? "open" : "closed"}
            onClick={() => setIsOpen((prev) => !prev)}
            className={`group relative h-16 w-16 rounded-full shadow-lg ${
              isOpen
                ? "bg-none border-none shadow-none backdrop-blur-none"
                : "border border-white border-opacity-40 bg-white bg-opacity-80 dark:bg-gray-950 dark:border-none dark:bg-opacity-75 shadow-black/[0.05] backdrop-blur"
            }`}
          >
            <motion.span
              variants={hamburgerAnimationVariants.top}
              className="absolute h-1 w-7 rounded-full bg-gray-500 group-hover:bg-gray-800 transition-colors dark:bg-gray-400 dark:group-hover:bg-gray-300"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
              variants={hamburgerAnimationVariants.middle}
              className="absolute h-1 w-7 rounded-full bg-gray-500 group-hover:bg-gray-800 transition-colors dark:bg-gray-400 dark:group-hover:bg-gray-300"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
              variants={hamburgerAnimationVariants.bottom}
              className="absolute h-1 w-7 rounded-full bg-gray-500 group-hover:bg-gray-800 transition-colors dark:bg-gray-400 dark:group-hover:bg-gray-300"
              style={{
                left: "50%",
                x: "-50%",
                y: "50%",
                bottom: "35%",
              }}
            />
          </motion.button>
        </MotionConfig>
      </nav>
    </header>
  );
}
