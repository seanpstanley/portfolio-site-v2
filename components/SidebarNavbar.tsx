"use client";

import { links } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

import { motion } from "framer-motion";

export default function SidebarNavbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.nav
      className="flex-col w-fit hidden lg:flex mt-14"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <ul className="flex flex-col items-start mx-auto justify-center text-[0.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap gap-1.5">
        {links.map((link) => (
          <motion.li
            className="flex items-center justify-center relative"
            key={link.hash}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.125,
            }}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center gap-6 px-3 py-3 tracking-wider hover:text-[#6c5cfb] transition-colors motion-reduce:transition-none dark:text-white/60 dark:hover:text-[#6c5cfb] z-10 focus-visible:text-[#6c5cfb]",
                {
                  "text-gray-900 font-semibold text-base dark:text-white/90":
                    activeSection === link.name,
                }
              )}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.icon}
              {link.name}

              {link.name === activeSection && (
                <motion.span
                  className="nm-flat-pattens-blue dark:nm-flat-cinder rounded-full absolute -inset-x-1 inset-y-1 -z-10"
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
    </motion.nav>
  );
}
