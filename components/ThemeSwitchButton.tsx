"use client";

import React from "react";

import { PiSun, PiMoon } from "react-icons/pi";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-[0.5rem] borderBlack dark:border-white dark:border-opacity-40 shadow-2xl flex items-center justify-center rounded-full focus:scale-110 borderBlack hover:scale-110 active:scale-100 transition dark:bg-gray-950 text-xl"
      onClick={toggleTheme}
    >
      {theme === "light" ? <PiSun /> : <PiMoon />}
    </button>
  );
}
