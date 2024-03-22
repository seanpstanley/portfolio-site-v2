"use client";

import React from "react";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function ScrollIndicator() {
  const { ref } = useSectionInView("Home", 1);

  return (
    <div ref={ref} className="flex flex-col gap-4 items-center sm:mb-28 mb-20">
      <motion.p
        className="text-xl font-light tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.25 }}
      >
        SCROLL
      </motion.p>
      <motion.div
        className="bg-gray-300 h-72 w-1 rounded-full dark:bg-opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 3,
        }}
      ></motion.div>
    </div>
  );
}
