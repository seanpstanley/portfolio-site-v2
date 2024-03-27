"use client";

import React from "react";

import { motion } from "framer-motion";
import { PiSun, PiMoon } from "react-icons/pi";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="nav bottom-5 right-5 w-12 h-12 flex items-center justify-center rounded-full text-xl  text-gray-700 hover:text-gray-900 dark:text-white/60 dark:hover:text-gray-300 transition-colors"
      onClick={toggleTheme}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {theme === "light" ? <PiSun /> : <PiMoon />}
    </motion.button>
  );
}
