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
      className="scroll-mt-10 lg:scroll-mt-24 mb-20 md:mb-28 px-2 md:px-0 max-w-4xl text-center"
    >
      <SectionHeading>skills</SectionHeading>
      <ul className="flex flex-wrap justify-center lg:justify-start gap-2.5 text-lg text-gray-800 dark:text-white/80">
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
