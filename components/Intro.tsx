"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
// import { BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { LiaLinkedin } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";

// import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import LinkIconButton from "@/components/LinkIconButton";
import { useSectionInView } from "@/lib/hooks";
import alienDance from "@/public/alien-dance-transparent.gif";
import seanPortrait from "@/public/logos/sean-pixelated-512.png";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 lg:mt-20 max-w-[72rem] text-center scroll-mt-20 sm:scroll-mt-[100rem]"
    >
      <div className="flex lg:flex-row lg:gap-6 flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="relative group shrink-0"
        >
          <Image
            src={seanPortrait}
            alt="Sean Stanley portrait"
            quality="95"
            priority
            className="h-36 w-36 lg:h-72 lg:w-72 lg:ml-4 rounded-full object-cover border-4 border-white dark:border-opacity-40 shadow-xl"
          />
          <Image
            src={alienDance}
            alt="Sean Stanley portrait"
            unoptimized
            quality="95"
            priority
            className="h-14 w-14 object-cover hidden group-hover:block absolute -bottom-1 lg:right-4 right-0 text-4xl"
          />
        </motion.div>
        <div className="flex flex-col items-center">
          <motion.div
            className="flex w-[11.353rem] items-start mt-8 sm:w-[18.164rem] sm:mb-4 mb-3 lg:mt-0 text-3xl font-bold sm:text-5xl"
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
            className="mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.125,
            }}
          >
            I'm a <span className="font-bold">frontend developer</span> who
            likes stuff that looks good. currently doing{" "}
            <span className="italic">top secret</span> software engineering at{" "}
            <span className="font-bold">CAE USA</span>.
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
            }}
          >
            {/* <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack">
          Download Resume
          <HiDownload className="opacity-60 group-hover:animate-bounce transition" />
        </a> */}
            <a
              className="group bg-gray-900 dark:bg-white/10 text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-100 transition"
              href="/Sean-Stanley-Resume.pdf"
              download
            >
              Download Resume
              <HiDownload className="opacity-60 text-xl group-hover:animate-bounce transition" />
            </a>
            <div className="flex gap-2">
              <LinkIconButton
                link="https://www.linkedin.com/in/seanpstanley/"
                icon={<LiaLinkedin />}
                size="32"
              />
              <LinkIconButton
                link="https://github.com/seanpstanley"
                icon={<FaGithub />}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
