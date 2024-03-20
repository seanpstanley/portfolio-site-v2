"use client";

import React from "react";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="sm:flex hidden w-2/5 justify-center mb-28">
      <div className="flex flex-col gap-4 items-center">
        <motion.p
          className="text-xl font-light tracking-widest"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          SCROLL
        </motion.p>
        <motion.div
          className="bg-gray-200 h-72 w-1 rounded-full  sm:block dark:bg-opacity-20 my-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55 }}
        ></motion.div>
      </div>
    </div>
  );
}
