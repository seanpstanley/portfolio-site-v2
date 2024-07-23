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
      className="scroll-mt-10 sm:scroll-mt-28 mb-28 px-2"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
