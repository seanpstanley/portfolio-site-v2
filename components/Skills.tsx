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
      className="mb-28 px-2 max-w-5xl text-center scroll-mt-10 sm:scroll-mt-20"
    >
      <SectionHeading>skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2.5 text-lg text-gray-800">
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
