"use client";

import React from "react";

import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { motion } from "framer-motion";
import { IoSunny, IoMoon } from "react-icons/io5";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useTheme();

  const isLightMode = theme === "light";

  return (
    <motion.div
      className="fixed bottom-3 right-3 z-[999]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <button
        className="nav focus flex size-12 items-center justify-center rounded-full border border-gray-900/50 bg-pattens-blue/70 text-xl text-gray-700 shadow-lg backdrop-blur-md transition-colors hover:text-blue-genie focus-visible:text-blue-genie active:scale-95 motion-reduce:transition-none dark:border-white/50 dark:bg-cinder/70 dark:text-white/60 dark:hover:text-blue-genie dark:focus-visible:text-blue-genie lg:hidden"
        onClick={toggleTheme}
        aria-label="Light/dark mode toggle"
        aria-pressed={!isLightMode}
      >
        {isLightMode ? (
          <AccessibleIcon label="Moon">
            <IoMoon />
          </AccessibleIcon>
        ) : (
          <AccessibleIcon label="Sun">
            <IoSunny />
          </AccessibleIcon>
        )}
      </button>
    </motion.div>
  );
}
