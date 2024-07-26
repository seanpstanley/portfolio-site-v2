"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function ScrollIndicator() {
  const { ref } = useSectionInView("About", 1);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let scrollHeight = 0;
    if (scrollRef.current) {
      scrollHeight = scrollRef.current.clientHeight;
    }

    const range = 300;
    const offset = scrollHeight * 2;

    const didScrollPage = (e: Event) => {
      let calc = 1 - (window.scrollY - offset + range) / range;
      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  return (
    <div ref={ref} className="flex-col gap-4 items-center my-28 hidden lg:flex">
      <motion.p
        className="text-xl font-light tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.25 }}
        ref={scrollRef}
        style={{ opacity: opacity }}
      >
        Scroll
      </motion.p>
      <motion.div
        className="bg-gray-400 w-px h-72 dark:bg-opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 3,
        }}
        ref={scrollRef}
        style={{ opacity: opacity }}
      ></motion.div>
    </div>
  );
}
