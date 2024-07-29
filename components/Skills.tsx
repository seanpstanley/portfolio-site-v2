"use client";

import SectionHeading from "@/components/SectionHeading";
import SkillsList from "@/components/SkillsList";
import SkillsPolarChart from "@/components/SkillsChart";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.8);

  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-0 lg:scroll-mt-24 mb-16 md:mb-24 lg:mb-32 px-2 lg:px-0 max-w-4xl text-center"
    >
      <SectionHeading>Skills</SectionHeading>
      {/* <SkillsChart /> */}
      <SkillsList />
    </section>
  );
}
