"use client";

import { motion } from "motion/react";
import { LuArrowUpRight, LuBriefcase, LuFlaskConical } from "react-icons/lu";

import Section from "@/components/Section";
import TechTags from "@/components/TechTags";
import { experiencesData, resumeHref } from "@/lib/data";
import { fadeUpVariants } from "@/lib/utils";

// a recessed groove with a domed node per role, newest first
export default function Experience() {
  return (
    <Section name="Experience">
      <ol className="relative m-0 flex list-none flex-col gap-7 p-0">
        <li
          aria-hidden="true"
          className="well absolute top-6 bottom-6 left-[21px] hidden w-1.5 rounded-md sm:block"
        />
        {experiencesData.map((job, i) => {
          const Icon = job.kind === "work" ? LuBriefcase : LuFlaskConical;
          return (
            <motion.li
              key={`${job.org}-${job.title}`}
              className="relative flex items-start gap-[22px]"
              variants={fadeUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <span
                aria-hidden="true"
                className="keycap mt-[18px] hidden size-12 flex-none justify-center rounded-full sm:inline-flex"
              >
                <Icon
                  className="size-[18px]"
                  style={{ color: job.kind === "work" ? "var(--navy)" : "var(--tan)" }}
                />
              </span>
              <article className="pad flex min-w-0 flex-1 flex-col gap-3.5 rounded-3xl px-6 pt-6 pb-7 sm:px-[30px]">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2.5">
                  <div className="flex flex-col gap-1">
                    <span className="label flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full"
                        style={{ background: job.kind === "work" ? "var(--navy)" : "var(--tan)" }}
                      />
                      {job.kind}
                    </span>
                    <h3 className="m-0 text-[21px] font-semibold tracking-[-0.01em]">
                      {job.title}
                    </h3>
                    <span className="text-base text-ink-2">{job.org}</span>
                  </div>
                  <span className="lcd rounded-[9px] px-[11px] py-[7px] font-mono text-xs tracking-[0.04em] whitespace-nowrap lowercase">
                    {job.date}
                  </span>
                </div>
                <p className="m-0 text-[15.5px] leading-[1.65] text-pretty text-ink-2">
                  {job.description}
                </p>
                <TechTags tags={job.tags} />
              </article>
            </motion.li>
          );
        })}
      </ol>
      <div className="sm:pl-[70px]">
        <a
          className="bubble h-[52px] gap-2.5 rounded-full px-[22px] text-[15px] font-semibold"
          href={resumeHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View full résumé (opens in a new tab)"
        >
          View full résumé
          <LuArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
