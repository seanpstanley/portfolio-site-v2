"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  // const { ref } = useSectionInView("About");
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="text-center px-2 md:px-0 ">
      <div className="flex lg:flex-row flex-col items-start lg:items-center lg:gap-7">
        <div className="flex flex-col items-start">
          <motion.div
            className="flex items-start w-[15.85rem] lg:mt-0 mb-3.5 font-thin text-5xl dark:text-white/90"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <TypeAnimation
              sequence={["Hi,", 850, "Hi, I'm Sean."]}
              preRenderFirstString
              wrapper="h1"
              speed={1}
            />
          </motion.div>
          <motion.h2
            className="!leading-normal text-lg text-start text-gray-700 dark:text-white/70 lg:max-w-sm mb-7 lg:mb-0"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.125,
            }}
          >
            I'm a{" "}
            <span className="font-medium text-gray-900 dark:text-white/90">
              frontend developer
            </span>{" "}
            who likes stuff that looks good. currently doing{" "}
            <span className="italic text-gray-900 dark:text-white/90">
              top secret
            </span>{" "}
            software engineering at{" "}
            <span className="font-medium text-gray-900 dark:text-white/90">
              CAE USA
            </span>
            .
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
