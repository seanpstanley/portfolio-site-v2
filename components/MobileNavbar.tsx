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
      <nav className="z-[999] sm:hidden fixed top-6 left-6" ref={ref}>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              layout="size"
              className={`${
                isOpen ? "" : "w-0 h-0"
              } fixed right-6 top-6 left-24 flex flex-col gap-2 mb-0 p-2.5 rounded-3xl nav`}
              exit={{ opacity: 0 }}
            >
              {links.map((link, index) => (
                <motion.li
                  className="relative flex items-center justify-center"
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
                      <span className="absolute inset-0 -z-10 bg-gray-100 rounded-2xl dark:bg-gray-800"></span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          <MotionConfig
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.button
              initial={false}
              animate={isOpen ? "open" : "closed"}
              onClick={() => setIsOpen((prev) => !prev)}
              className="group relative h-16 w-16 rounded-full nav"
              aria-label="Nav menu toggle"
              aria-pressed={isOpen ? "true" : "false"}
            >
              <motion.span
                variants={hamburgerAnimationVariants.top}
                className="hamburger-line "
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={hamburgerAnimationVariants.middle}
                className="hamburger-line "
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={hamburgerAnimationVariants.bottom}
                className="hamburger-line"
                style={{
                  left: "50%",
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                }}
              />
            </motion.button>
          </MotionConfig>
        </motion.div>
      </nav>
    </header>
  );
}
