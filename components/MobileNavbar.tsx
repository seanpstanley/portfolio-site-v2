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
    <nav className="z-[999] lg:hidden fixed h-16 top-0 right-0" ref={ref}>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            layout="size"
            className={`${
              isOpen ? "" : "w-0 h-0"
            } fixed left-0 right-0 pr-16 flex flex-col nav items-center border border-red-500 text-[0.9rem] justify-center flex-nowrap text-gray-600 font-medium`}
            exit={{ opacity: 0 }}
          >
            {links.map((link, index) => (
              <motion.li
                className="relative flex items-center justify-center w-full"
                key={link.hash}
                variants={fadeUpAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <Link
                  className={clsx(
                    "flex justify-center gap-6 tracking-wider border border-white items-center w-full py-6 hover:text-[#6c5cfb] transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] z-10",
                    {
                      "text-gray-900 font-semibold scale-110 dark:text-white/90":
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
                  {link.icon}
                  {link.name}

                  {link.name === activeSection && (
                    <span className="absolute inset-x-14 inset-y-4 -z-10 nm-flat-pattens-blue dark:nm-flat-cinder rounded-full"></span>
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
            className="group relative size-16"
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
  );
}
