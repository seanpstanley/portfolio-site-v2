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
      <nav className="z-[999] sm:hidden fixed top-6 right-5" ref={ref}>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              layout="size"
              className={`${
                isOpen ? "" : "w-0 h-0"
              }flex flex-col gap-2 rounded-3xl mb-0 left-5 top-6 right-24 p-2.5 nav`}
              exit={{ opacity: 0 }}
            >
              {links.map((link, index) => (
                <motion.li
                  className="flex items-center justify-center relative"
                  key={link.hash}
                  variants={fadeUpAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  <Link
                    className={clsx(
                      "flex justify-center items-center w-full py-5 hover:text-gray-800 transition dark:text-white/60 dark:hover:text-white/75",
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
        <MotionConfig
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.button
            initial={false}
            // initial={{ y: -100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            animate={isOpen ? "open" : "closed"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="group relative h-16 w-16 rounded-full shadow-lg border border-white border-opacity-40 bg-white bg-opacity-80 dark:bg-gray-950 dark:border-none dark:bg-opacity-75 shadow-black/[0.05] backdrop-blur"
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
