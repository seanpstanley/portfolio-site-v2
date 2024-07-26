"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { HiDownload } from "react-icons/hi";

import SectionHeading from "@/components/SectionHeading";
import "react-vertical-timeline-component/style.min.css";
import TechTags from "@/components/TechTags";
import { useTheme } from "@/context/ThemeContextProvider";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.35);
  const { theme } = useTheme();

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="scroll-mt-10 lg:scroll-mt-24 mb-20 md:mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="" layout={"1-column-left"}>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "#e3eaf4" : "#1f2427",
                boxShadow:
                  theme === "light"
                    ? "0.4em 0.4em calc(0.4em * 2) #a2bbdb, calc(0.4em * -1) calc(0.4em * -1) calc(0.4em * 2) #f6f8fb"
                    : "0.4em 0.4em calc(0.4em * 2) #191c1e, calc(0.4em * -1) calc(0.4em * -1) calc(0.4em * 2) #242a2d",
                // border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
                textAlign: "left",
                padding: "1.25rem 1.25rem 0.75rem 1.25rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #e3eaf4"
                    : "0.4rem solid #1f2427",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "#e3eaf4 " : "#1f2427",
                fontSize: "1.5rem",
                color: theme === "light" ? "" : "",
                border: "black",
              }}
              iconClassName={""}
            >
              <h3 className="font-bold">{experience.title}</h3>
              <p className="font-semibold !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-600 dark:text-white/60">
                {experience.description}
              </p>
              <div className="flex mt-3 mb:1 justify-between items-end gap-2">
                <TechTags tags={experience.tags} />
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <a
        className="mt-8 group relative lowercase nm-flat-pattens-blue dark:nm-flat-cinder-lg inline-flex items-center justify-center px-5 py-3 overflow-hidden font-medium transition rounded-full hover:nm-flat-pattens-blue-sm dark:hover:nm-flat-cinder active:nm-inset-pattens-blue dark:active:nm-inset-cinder disabled:scale-100 disabled:hover:nm-inset-pattens-blue dark:disabled:hover:nm-inset-cinder disabled:nm-inset-pattens-blue dark:disabled:nm-inset-cinder dark:border-none hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] hover:scale-[1.025] active:scale-100 focus:scale-[1.025] focus:text-[#6c5cfb] dark:focus:text-[#6c5cfb] text-gray-700 dark:text-white/85"
        href="/sean-stanley-resume.pdf"
        download
      >
        View Full Résumé
        <FaExternalLinkSquareAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
      </a>
    </motion.section>
  );
}
