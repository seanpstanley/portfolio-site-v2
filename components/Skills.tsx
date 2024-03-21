"use client";

import React from "react";

import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { fadeUpAnimationVariants } from "@/lib/utils";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.9);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 px-2 sm:px-0 max-w-4xl scroll-mt-10 sm:scroll-mt-28 text-center"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white hover:bg-gray-100	borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 transition-colors"
            key={index}
            variants={fadeUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
