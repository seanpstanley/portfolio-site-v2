"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { links } from "@/lib/data";

export default function SidebarNavbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.nav
      className="mt-14 hidden w-fit flex-col lg:flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <ul className="mx-auto flex w-[initial] flex-col flex-nowrap items-start justify-center gap-1.5 text-[0.9rem] font-medium text-gray-600">
        {links.map((link) => (
          <motion.li
            className="relative flex items-center justify-center"
            key={link.hash}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.125,
            }}
          >
            <Link
              className={clsx(
                "focus z-10 flex w-full items-center justify-center gap-6 rounded-full px-3 py-3 tracking-wider ring-offset-0 ring-offset-pattens-blue transition hover:text-blue-genie focus-visible:text-blue-genie motion-reduce:transition-none dark:text-white/60 dark:ring-offset-cinder dark:hover:text-blue-genie",
                {
                  "scale-110 font-semibold text-gray-900 dark:text-white/90":
                    activeSection === link.name,
                },
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
                  className="absolute -inset-x-1 inset-y-1 -z-10 rounded-full nm-flat-pattens-blue dark:nm-flat-cinder"
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
