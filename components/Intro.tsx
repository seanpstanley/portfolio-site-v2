"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import { useSectionInView } from "@/lib/hooks";
// import alienDance from "@/public/alien-dance-transparent.gif";
// import seanPortrait from "@/public/sean-portrait.png";

export default function Intro() {
  // const { ref } = useSectionInView("About");
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="text-center px-2 md:px-0 ">
      <div className="flex lg:flex-row flex-col items-start lg:items-center lg:gap-7">
        {/* <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="relative group shrink-0"
        >
          <Image
            src={seanPortrait}
            alt="A portrait of me."
            quality="95"
            priority
            className="size-20 rounded-full object-cover nm-flat-pattens-blue-lg dark:nm-flat-cinder-xl transition-colors"
          />
          <Image
            src={alienDance}
            alt="A small, animated, green alien dancing near the bottom right corner of my portrait photo."
            unoptimized
            quality="95"
            priority
            className="hidden group-hover:block absolute -bottom-0.5 lg:-bottom-1.5 right-1.5 lg:right-2.5 h-10 w-10 lg:h-20 lg:w-20 object-cover text-4xl"
          />
        </motion.div> */}
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
