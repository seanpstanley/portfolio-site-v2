"use client";

import React, { useRef } from "react";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

import LinkIconButton from "@/components/LinkIconButton";
import TechTags from "@/components/TechTags";
import { fadeUpAnimationVariants } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  links: {
    deployment?: string | null;
    github?: string | null;
  };
}

export default function Project({
  title,
  description,
  tags,
  image,
  links,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { deployment, github } = links;

  return (
    <motion.div
      ref={ref}
      className="group"
      variants={fadeUpAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <section className="card pt-5 pb-6 px-5 sm:px-10 sm:pt-10 max-w-[34rem] rounded-lg overflow-hidden sm:h-[24rem]">
        <div className="flex flex-col h-full">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col mb-4 sm:mb-0">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:ml-6 flex-shrink-0 sm:items-center">
              <Image
                src={image}
                alt="Project I worked on"
                quality={95}
                className="h-36 w-36 rounded-full hidden sm:block mb-3 object-cover border-2 border-black/10 dark:border-white dark:border-opacity-40"
              />
              <div className="hidden sm:flex sm:gap-2">
                {deployment && (
                  <LinkIconButton link={deployment} icon={<LuExternalLink />} />
                )}
                {github && <LinkIconButton link={github} icon={<FaGithub />} />}
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-2 justify-between items-end	sm:mt-auto">
            <TechTags tags={tags} />
            <div className="sm:hidden items-end	flex flex-col gap-2">
              {deployment && (
                <LinkIconButton link={deployment} icon={<LuExternalLink />} />
              )}
              {github && <LinkIconButton link={github} icon={<FaGithub />} />}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
