"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import SectionHeading from "@/components/SectionHeading";
import "react-vertical-timeline-component/style.min.css";
import TechTags from "@/components/TechTags";
import { useTheme } from "@/context/ThemeContextProvider";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.35);
  const { theme } = useTheme();

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-10 sm:scroll-mt-28 mb-20 sm:mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgba(255, 255, 255, 0.9)"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
                textAlign: "left",
                padding: "1.25rem 1.25rem 0.75rem 1.25rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white " : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold">{experience.title}</h3>
              <p className="font-semibold !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
              <div className="flex gap-2 mt-3 mb:1 sm:mt-4 sm:mb-0 justify-between items-end">
                <TechTags tags={experience.tags} />
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
