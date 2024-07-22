"use client";

import React from "react";

import { motion } from "framer-motion";
import { PiSun, PiMoon } from "react-icons/pi";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="flex nav fixed bottom-5 right-5 size-12 sm:w-48 justify-center sm:justify-between sm:py-2 sm:px-4 text-xl items-center rounded-full text-gray-700 hover:text-gray-900 dark:text-white/60 dark:hover:text-gray-300 transition-colors"
      onClick={toggleTheme}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      aria-label="Light/dark mode toggle"
      aria-description="Default is light mode, or user's system preference if there is one."
      aria-pressed={theme === "light" ? "false" : "true"}
    >
      {theme === "light" ? (
        <>
          <span className="hidden sm:block text-sm">Toggle Light Mode</span>
          <PiSun className="sm:text-lg" />
        </>
      ) : (
        <>
          <span className="hidden sm:block text-sm">Toggle Dark Mode</span>
          <PiMoon className="sm:text-lg" />
        </>
      )}
    </motion.button>
  );
}
