"use client";

import React from "react";

import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 lg:mb-0 text-start text-gray-700 dark:text-white/70 leading-relaxted scroll-mt-10 lg:scroll-mt-[100rem] px-2 lg:px-0 flex flex-col"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-4">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an{" "}
        <a
          className="font-medium text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb]"
          href="https://us.mullenlowe.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="advertising agency (opens in a new tab)"
        >
          advertising agency
        </a>
        ,{" "}
        <a
          className="font-medium text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb]"
          href="https://starry.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="start-up (opens in a new tab)"
        >
          start-up
        </a>
        , a{" "}
        <a
          className="font-medium text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb]"
          href="https://www.apple.com/apple-music/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="huge corporation (opens in a new tab)"
        >
          huge corporation
        </a>
        , and a
        <a
          className="font-medium text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb]"
          href="https://upstatement.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="digital product studio (opens in a new tab)"
        >
          digital product studio
        </a>
        .
      </p>
      <p className="mb-4">
        Currently, I'm main focus these days is building accessible user
        interfaces for our customers at{" "}
        <a
          className="font-medium text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb]"
          href="https://www.klaviyo.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Klaviyo (opens in a new tab)"
        >
          Klaviyo
        </a>
        . I most enjoy building software in the sweet spot where design and
        engineering meet — things that look good but are also built well under
        the hood. In my free time, I've also released an{" "}
        <a
          className="font-medium text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb]"
          href="https://www.newline.co/courses/build-a-spotify-connected-app"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="online video course (opens in a new tab)"
        >
          online video course
        </a>{" "}
        that covers everything you need to know to build a web app with the
        Spotify API.
      </p>
      <p>
        Outside of I’m not at the computer, I’m usually rock climbing, reading,
        hanging out with my wife and two cats, or running around Hyrule
        searching for{" "}
        <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
          <span className="sr-only">Korok seeds</span>
          <span
            className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            K
          </span>
          <span
            className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            r
          </span>
          <span
            className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            k
          </span>
          <span
            className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
            aria-hidden="true"
          >
            &nbsp;
          </span>
          <span
            className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            s
          </span>
          <span
            className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
            aria-hidden="true"
          >
            d
          </span>
          <span
            className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            s
          </span>
        </span>
        .
      </p>
    </motion.section>
  );
}
