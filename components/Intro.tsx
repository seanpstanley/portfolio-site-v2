"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
// import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
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
      className="mb-28 max-w-[50rem] text-center sm:mb-44 scroll-mt-[5rem] sm:scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center mb-3 sm:mb-8 flex-col sm:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="relative group"
        >
          <Image
            src={seanPortrait}
            alt="Sean Stanley portrait"
            quality="95"
            priority
            className="h-36 w-36 rounded-full object-cover border-4 border-white dark:border-white dark:border-opacity-40 shadow-xl"
          />
          <Image
            src={alienDance}
            alt="Sean Stanley portrait"
            quality="95"
            priority
            className="h-14 w-14 object-cover hidden group-hover:block absolute -bottom-1 -right-2 text-4xl"
          />
        </motion.div>
        <motion.div
          className="flex w-[11.353rem] items-start ml-0 mt-8 sm:w-[18.164rem] sm:ml-8 sm:mt-0 text-3xl font-bold sm:text-5xl"
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
      </div>
      <motion.h2
        className="mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm a <span className="font-bold">frontend developer</span> who likes
        stuff that looks good. currently doing{" "}
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
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-100 transition"
          href="/Sean-Stanley-Resume.pdf"
          download
        >
          Download Resume
          <HiDownload className="opacity-60 text-xl group-hover:animate-bounce transition" />
        </a>
        <div className="flex gap-2">
          <LinkIconButton
            link="https://www.linkedin.com/in/seanpstanley/"
            icon={<FaLinkedin />}
          />
          <LinkIconButton
            link="https://github.com/seanpstanley"
            icon={<FaGithubSquare />}
          />
        </div>
      </motion.div>
      {/* <div className="bg-gray-200 my-28 h-28 w-1 rounded-full hidden sm:block"></div> */}
    </section>
  );
}
