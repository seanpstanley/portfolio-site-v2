"use client";

import React from "react";

import { motion } from "framer-motion";
import { PiSun, PiMoon } from "react-icons/pi";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 bg-white/75 w-12 h-12 backdrop-blur-[0.5rem] borderBlack dark:border-white/40 shadow-2xl flex items-center justify-center rounded-full dark:text-white/60 dark:hover:text-gray-300 text-gray-700 hover:text-gray-900 dark:bg-gray-950/75 text-xl transition-colors"
      onClick={toggleTheme}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {theme === "light" ? <PiSun /> : <PiMoon />}
    </motion.button>
  );
}
