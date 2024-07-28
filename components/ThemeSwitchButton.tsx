"use client";

import React from "react";

import { motion } from "framer-motion";
import { IoSunny, IoMoon } from "react-icons/io5";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="z-[999] flex nav fixed bottom-3 right-3 shadow-xl nm-flat-pattens-blue hover:nm-flat-pattens-blue-sm dark:hover:nm-flat-cinder-sm hover:scale-105 focus-visible:scale-105 active:scale-100 dark:nm-flat-cinder active:nm-inset-pattens-blue-sm dark:active:nm-inset-cinder-sm size-12 lg:hidden justify-center text-xl items-center rounded-full text-gray-700 hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] dark:focus-visible:text-[#6c5cfb] dark:text-white/60 dark:hover:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
      onClick={toggleTheme}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      aria-label="Light/dark mode toggle"
      aria-description="Default is light mode, or user's system preference if there is one."
      aria-pressed={theme === "light" ? "false" : "true"}
    >
      {theme === "light" ? <IoMoon /> : <IoSunny />}
    </motion.button>
  );
}
