"use client";

import React from "react";

import Project from "@/components/Project";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.15);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-0 lg:scroll-mt-24 mb-16 md:mb-24 lg:mb-32 px-2 lg:px-0"
    >
      <SectionHeading>Projects</SectionHeading>
      <ol className="flex flex-wrap justify-center gap-6 group">
        {projectsData.map((project, index) => (
          <li key={index}>
            <Project {...project} />
          </li>
        ))}
      </ol>
    </section>
  );
}
