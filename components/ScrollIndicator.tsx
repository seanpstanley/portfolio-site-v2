"use client";

import React, { useRef, useState } from "react";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function ScrollIndicator() {
  const { ref } = useSectionInView("Home", 1);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  const handleOpacityChange = (newOpacity: number) => {
    setOpacity(newOpacity);
    scrollRef.current!.style.opacity = newOpacity.toString();
  };

  return (
    <div ref={ref} className="flex flex-col gap-4 items-center sm:mb-28 mb-20">
      <motion.p
        className="text-xl font-light tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.25 }}
        ref={scrollRef}
        style={{ opacity }}
      >
        Scroll
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
        ref={scrollRef}
        style={{ opacity }}
      ></motion.div>
    </div>
  );
}
