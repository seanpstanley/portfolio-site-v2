"use client";

import React from "react";

import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";

import Disclaimer from "@/components/Disclaimer";
import SectionHeading from "@/components/SectionHeading";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
// import alienDance from "@/public/alien-dance-transparent.gif";
// import seanPortrait from "@/public/sean-portrait.png";

export default function About() {
  const { ref } = useSectionInView("About");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mb-16 md:mb-24 lg:mb-0 text-start text-gray-700 dark:text-white/70 leading-relaxted scroll-mt-0 lg:scroll-mt-[100rem] px-2 lg:px-0 flex flex-col"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="relative group shrink-0"
      >
        {/* <Image
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
        /> */}
      </motion.div>
      <p className="mb-3">
        My first brush with coding was back in 2015. My Programming 1 teacher
        introduced basic programming concepts using MIT's{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://scratch.mit.edu/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Scratch (opens in a new tab)"
        >
          Scratch
        </a>
        . I was blown away. Combining my one true love&mdash;Lego&mdash;with
        computer software, something that was, in my 16 year-old mind at least,
        intrinsicly linked to video games? A stroke of genius. However, to my
        shock and horror, Scratch was not all there was. No, the truth was there
        was far, far more to programming than I had initially considered:
        languages. Not gonna lie, I was pretty bummed when I found out
        programming was mostly... words. And writing. I've more or less come
        around on it these days, but I sitll find myself longing for the tactile
        snap of block-based programming&mdash;something that partially inspired
        my{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://ieeexplore.ieee.org/document/9576344"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="honor's thesis (opens in a new tab)"
        >
          honor's thesis
        </a>{" "}
        in 2021.
      </p>
      <p className="mb-3">
        Nowadays, I try to keep the spirit of Scratch alive by building
        interfaces that emulate that satisfying feeling of playing with blocks,
        keeping a focus on UX and accessibility. My current project is{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://brewd.org/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Brewd (opens in a new tab)"
        >
          Brewd
        </a>
        , a coffee-rating application with a vintage flair, inspired by
        platforms like{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://letterboxd.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Letterboxd (opens in a new tab)"
        >
          Letterboxd
        </a>
        ,{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://backloggd.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Backloggd (opens in a new tab)"
        >
          Backloggd
        </a>
        , and{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://untappd.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Untappd (opens in a new tab)"
        >
          Untapped
        </a>
        .
      </p>
      <p className="mb-3">
        You may also find me at my home away from home: the cinema. With the
        power of AMC's{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://www.amctheatres.com/amcstubs/alist"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="AMC Stubs A-List&trade; (opens in a new tab)"
        >
          AMC Stubs A-List&trade;
        </a>
        , I'm able to see up to three movies every week, with no blackout dates.
        Other benefits include free size upgrades on concessions, free online
        ticket reservations, and priority lanes, all for the low-low price
        $19.95 per month (plus applicable local taxes). If you love movies, you
        can't go wrong with AMC's{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://www.amctheatres.com/amcstubs/alist"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="AMC Stubs A-List&trade; (opens in a new tab)"
        >
          AMC Stubs A-List&trade;
        </a>
        . Join AMC's{" "}
        <a
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="https://www.amctheatres.com/amcstubs/alist"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="AMC Stubs A-List&trade; (opens in a new tab)"
        >
          AMC Stubs A-List&trade;
        </a>{" "}
        today!
        <Link
          className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href={"#disclaimer"}
          onClick={() => {
            setActiveSection("Disclaimer");
            setTimeOfLastClick(Date.now());
          }}
        >
          *
        </Link>
      </p>
      <Disclaimer />
    </motion.section>
  );
}
