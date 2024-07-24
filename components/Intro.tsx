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
import seanPortrait from "@/public/sean-portrait.png";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 text-center scroll-mt-20 sm:scroll-mt-[100rem] px-2"
    >
      <div className="flex lg:flex-row flex-col items-center lg:gap-10">
        <motion.div
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
            className="size-36 lg:size-80 rounded-full object-cover nm-flat-pattens-blue-lg dark:nm-flat-cinder-xl transition-colors"
          />
          <Image
            src={alienDance}
            alt="A small, animated green alien dancing near the bottom right corner of my portrait photo."
            unoptimized
            quality="95"
            priority
            className="hidden group-hover:block absolute -bottom-0.5 lg:-bottom-1.5 right-1.5 lg:right-2.5 h-10 w-10 lg:h-20 lg:w-20 object-cover text-4xl"
          />
        </motion.div>
        <div className="flex flex-col items-center lg:items-start">
          <motion.div
            className="flex items-start w-[12rem] sm:w-[23.84rem] mt-8 lg:mt-0 mb-3.5 font-thin text-4xl sm:text-7xl"
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
            className="mb-8 font-medium !leading-[1.5] text-2xl sm:text-4xl text-center lg:text-start"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 font-medium text-lg"
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
            {/* <a
              className="group flex items-center gap-2 px-7 py-3 rounded-full text-white bg-gray-900 dark:bg-white/10 focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-100 transition"
              href="/sean-stanley-resume.pdf"
              download
            >
              Download Resume
              <HiDownload className="opacity-60 text-xl group-hover:animate-bounce transition" />
            </a> */}
            <a
              className="group relative lowercase nm-flat-pattens-blue dark:nm-flat-cinder-lg inline-flex items-center justify-center  px-7 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full group hover:nm-flat-pattens-blue-sm dark:hover:nm-flat-cinder active:nm-inset-pattens-blue dark:active:nm-inset-cinder disabled:scale-100 disabled:hover:nm-inset-pattens-blue dark:disabled:hover:nm-inset-cinder disabled:nm-inset-pattens-blue dark:disabled:nm-inset-cinder dark:border-none hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] hover:scale-[1.025] active:scale-100 text-gray-700 dark:text-white/85"
              href="/sean-stanley-resume.pdf"
              download
            >
              Download Resume
              <HiDownload className="group-hover:animate-bounce transition-transform ml-2" />
            </a>
            {/* <a
              className="group relative lowercase nm-flat-pattens-blue dark:nm-flat-cinder-lg inline-flex items-center justify-center  px-7 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full group hover:nm-flat-pattens-blue-sm dark:hover:nm-flat-cinder active:nm-inset-pattens-blue dark:active:nm-inset-cinder disabled:scale-100 disabled:hover:nm-inset-pattens-blue dark:disabled:hover:nm-inset-cinder disabled:nm-inset-pattens-blue dark:disabled:nm-inset-cinder dark:border-none hover:text-[#6c5cfb] hover:scale-105 active:scale-100"
              href="/sean-stanley-resume.pdf"
              download
            >
              <span className="absolute flex items-center justify-center w-full h-full text-gray-700 dark:text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Download Resume
                <HiDownload className="group-hover:animate-bounce transition" />
              </span>
              <span className="invisible">Download Resume</span>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#6c5cfb] group-hover:translate-x-0 ease text-xl">
                <HiDownload className="group-hover:animate-bounce transition" />
              </span>
            </a> */}
            <div className="flex gap-3">
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
