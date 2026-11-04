"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";

import Section from "@/components/Section";
import TechTags from "@/components/TechTags";
import { featuredProject, projectFilters, projectsData } from "@/lib/data";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

type Filter = (typeof projectFilters)[number]["value"];

const roundKey = "bubble size-11 flex-none rounded-full";

function ProjectLinks({ project }: { project: Pick<Project, "live" | "code"> }) {
  return (
    <div className="flex flex-none gap-2.5">
      {project.live && (
        <a
          className={roundKey}
          href={project.live.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={project.live.label}
        >
          <LuArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      )}
      {project.code && (
        <a
          className={cn(roundKey, "font-mono text-xs font-semibold")}
          href={project.code.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={project.code.label}
        >
          gh
        </a>
      )}
    </div>
  );
}

function FeaturedProject() {
  const project = featuredProject;
  return (
    <article className="pad flex flex-wrap gap-6 rounded-3xl p-[18px]">
      <div className="well flex min-h-[240px] flex-[1_1_260px] rounded-[18px] p-[7px]">
        <div className="lcd flex flex-1 flex-col justify-between rounded-[13px] px-5 py-[18px]">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <span className="label text-lcd-dim">featured</span>
            <span className="flex items-center gap-2">
              <span className="label text-lcd-dim">{project.status}</span>
              <span className="led" aria-hidden="true" />
            </span>
          </div>
          <span className="dot text-[64px] leading-[0.9]" aria-hidden="true">
            brewd
          </span>
          <span className="font-mono text-[11.5px] text-lcd-dim">
            {project.subtitle.toLowerCase()}
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3.5 pt-3 pr-2.5 pb-2">
        <h3 className="m-0 text-[26px] font-semibold tracking-[-0.015em]">
          {project.title}
          <span className="sr-only"> — {project.subtitle}, {project.status}</span>
        </h3>
        <p className="m-0 text-[15.5px] leading-[1.65] text-pretty text-ink-2">
          {project.description}
        </p>
        <TechTags tags={project.tags} max={5} />
        <div className="mt-auto flex gap-3 pt-1.5">
          {project.live && (
            <a
              className="bubble bubble-fill h-[50px] gap-2.5 rounded-full px-[22px] text-[15px] font-semibold"
              href={project.live.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={project.live.label}
            >
              Open Brewd
              <LuArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectFilter({
  value,
  onChange,
}: {
  value: Filter;
  onChange: (value: Filter) => void;
}) {
  return (
    <div role="group" aria-label="Filter projects" className="well inline-flex gap-1 self-start rounded-full p-1">
      {projectFilters.map((filter) => {
        const active = filter.value === value;
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(filter.value)}
            className={cn(
              "label h-10 rounded-full px-[18px] transition-colors",
              active ? "bubble text-ink hover:transform-none" : "cursor-pointer hover:text-ink",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown =
    filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <Section name="Projects" threshold={0.1}>
      <FeaturedProject />
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
        <ProjectFilter value={filter} onChange={setFilter} />
        <p className="label m-0" aria-live="polite">
          {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <motion.ul layout className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6 p-0">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((project) => (
            <motion.li
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="pad flex flex-col gap-3.5 rounded-3xl p-6"
            >
              <div className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="well flex size-[52px] flex-none items-center justify-center rounded-full"
                >
                  <span className="dot text-[18px]">{project.mono}</span>
                </span>
                <div className="flex min-w-0 flex-col gap-[3px]">
                  <span className="label">{project.kind}</span>
                  <h3 className="m-0 text-lg font-semibold tracking-[-0.01em]">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="clamp-3 m-0 text-[15px] leading-[1.6] text-ink-2">
                {project.description}
              </p>
              <div className="mt-auto flex items-end justify-between gap-3">
                <TechTags tags={project.tags} max={3} />
                <ProjectLinks project={project} />
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
