"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { IoSunny, IoMoon } from "react-icons/io5";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    // <motion.button
    //   className="flex nm-flat-pattens-blue dark:nm-flat-cinder-lg size-12 sm:w-20 justify-center sm:justify-between sm:py-2 sm:px-4 text-xl items-center rounded-full text-gray-700 hover:text-[#6c5cfb] focus:text-[#6c5cfb] dark:focus:text-[#6c5cfb] dark:text-white/60 dark:hover:text-[#6c5cfb] transition-colors"
    //   onClick={toggleTheme}
    // initial={{ opacity: 0, y: 100 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{ delay: 0.175 }}
    //   aria-label="Light/dark mode toggle"
    //   aria-description="Default is light mode, or user's system preference if there is one."
    //   aria-pressed={theme === "light" ? "false" : "true"}
    // >
    //   {theme === "light" ? (
    //     <>
    //       {/* <span className="hidden sm:block text-sm">Toggle Light Mode</span> */}
    //       <PiSun className="sm:text-lg" />
    //     </>
    //   ) : (
    //     <>
    //       {/* <span className="hidden sm:block text-sm">Toggle Dark Mode</span> */}
    //       <PiMoon className="sm:text-lg" />
    //     </>
    //   )}
    // </motion.button>

    <motion.label
      className="relative inline-flex cursor-pointer items-center w-fit rounded-full text-gray-700 hover:text-[#6c5cfb] focus:text-[#6c5cfb] dark:focus:text-[#6c5cfb] dark:text-white/60 dark:hover:text-[#6c5cfb] transition-colors"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <input
        id="dark-toggle"
        type="checkbox"
        onClick={toggleTheme}
        checked={theme === "light" ? false : true}
        className="peer sr-only"
      />
      <label htmlFor="dark-toggle" className="hidden">
        Toggle Dark Mode
      </label>
      <span className="absolute left-2.5">
        <IoMoon />
      </span>
      <span className="absolute right-2 text-lg text-gray-">
        <IoSunny />
      </span>
      <div className="peer h-9 w-16 rounded-full nm-inset-pattens-blue-sm dark:nm-inset-cinder-sm after:absolute after:left-1 after:top-1 after:size-7 after:rounded-full after:nm-flat-pattens-blue-sm after:dark:nm-flat-cinder after:transition-all after:content-[''] peer-checked:after:translate-x-full after:duration-300 after:ease-in-out">
        {/* <IoMoon /> */}
      </div>
    </motion.label>
  );
}
