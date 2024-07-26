"use client";

import React, { useRef } from "react";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import LinkIconButton from "@/components/LinkIconButton";
import TechTags from "@/components/TechTags";
import { fadeUpAnimationVariants } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  links: {
    deployment: { link: string; accessibilityText: string } | null;
    github: { link: string; accessibilityText: string } | null;
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
      <section className="card pt-5 pb-6 px-6 rounded-lg overflow-hidden max-w-xl ">
        <div className="flex flex-col h-full">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col mb-4 sm:mb-0">
              <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/60">
                {description}
              </p>
            </div>
            <div className="flex flex-col flex-shrink-0 sm:items-center sm:ml-10">
              <Image
                src={image}
                alt={`Logo for ${title}, a project that I worked on.`}
                quality={95}
                className="hidden sm:block h-36 w-36 mb-3.5 object-cover rounded-full nm-flat-pattens-blue-lg dark:nm-flat-cinder-xl transition"
              />
              <div className="hidden sm:flex sm:gap-3">
                {deployment && (
                  <LinkIconButton
                    link={deployment.link}
                    accessibilityText={deployment.accessibilityText}
                    icon={<FaExternalLinkSquareAlt />}
                  />
                )}
                {github && (
                  <LinkIconButton
                    link={github.link}
                    accessibilityText={github.accessibilityText}
                    icon={<FaGithub />}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end gap-2 mt-4">
            <TechTags tags={tags} />
            <div className="sm:hidden flex flex-col items-end	gap-3">
              {deployment && (
                <LinkIconButton
                  link={deployment.link}
                  accessibilityText={deployment.accessibilityText}
                  icon={<FaExternalLinkSquareAlt />}
                />
              )}
              {github && (
                <LinkIconButton
                  link={github.link}
                  accessibilityText={github.accessibilityText}
                  icon={<FaGithub />}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
