"use client";

import React from "react";

import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { fadeUpAnimationVariants } from "@/lib/utils";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.8);

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-10 lg:scroll-mt-24 mb-16 md:mb-24 lg:mb-32 px-2 lg:px-0 max-w-4xl text-center"
    >
      <SectionHeading>skills</SectionHeading>
      <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800 dark:text-white/80">
        {skillsData.map((skill, index) => (
          <motion.li
            className="inset-card px-5 py-3 rounded-xl"
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
