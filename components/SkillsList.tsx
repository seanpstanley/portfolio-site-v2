"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";
import { fadeUpAnimationVariants } from "@/lib/utils";

export default function SkillsList() {
  return (
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
  );
}
