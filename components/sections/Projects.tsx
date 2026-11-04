"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";

import Section from "@/components/Section";
import TechTags from "@/components/TechTags";
import { featuredProject, projectFilters, projects } from "@/lib/data";
import type {
  FeaturedProject as FeaturedProjectData,
  Project,
} from "@/lib/types";
import { cn } from "@/lib/utils";

/** A filter tab's value: a project category, or "all". */
type Filter = (typeof projectFilters)[number]["value"];

// Shared styles for the round link keys on project cards.
const roundKey = "bubble size-11 flex-none rounded-full";

/** Props for {@link ProjectLinks}. */
interface ProjectLinksProps {
  /** The project whose live and source links to show. */
  project: Pick<Project, "live" | "code">;
}

/** The round ↗ (live site) and "gh" (source) keys on a project card. */
function ProjectLinks({ project }: ProjectLinksProps) {
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

/** Props for {@link FeaturedProject}. */
interface FeaturedProjectProps {
  /** The project to feature. */
  project: FeaturedProjectData;
}

/**
 * The featured project card: an LCD panel with the name and status light,
 * then the description, tags, and an "Open" button.
 */
function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="flex flex-wrap gap-6 rounded-3xl p-[18px] pad">
      <div className="flex min-h-[240px] flex-[1_1_260px] rounded-[18px] p-[7px] well">
        <div className="flex flex-1 flex-col justify-between rounded-[13px] px-5 py-[18px] lcd">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <span className="label text-lcd-dim">featured</span>
            <span className="flex items-center gap-2">
              <span className="label text-lcd-dim">{project.status}</span>
              <span className="led" aria-hidden="true" />
            </span>
          </div>
          <span className="dot text-[64px] leading-[0.9]" aria-hidden="true">
            {project.title.toLowerCase()}
          </span>
          <span className="font-mono text-[11.5px] text-lcd-dim">
            {project.subtitle.toLowerCase()}
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3.5 pt-3 pr-2.5 pb-2">
        <h3 className="m-0 text-[26px] font-semibold tracking-[-0.015em]">
          {project.title}
          <span className="sr-only">
            {" "}
            — {project.subtitle}, {project.status}
          </span>
        </h3>
        <p className="m-0 text-[15.5px] leading-[1.65] text-pretty text-ink-2">
          {project.description}
        </p>
        <TechTags tags={project.tags} max={5} />
        <div className="mt-auto flex gap-3 pt-1.5">
          {project.live && (
            <a
              className="bubble h-[50px] gap-2.5 rounded-full px-[22px] text-[15px] font-semibold bubble-fill"
              href={project.live.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={project.live.label}
            >
              Open {project.title}
              <LuArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Props for {@link ProjectFilter}. */
interface ProjectFilterProps {
  /** The selected filter. */
  value: Filter;
  /** Called with the filter the visitor picks. */
  onChange: (value: Filter) => void;
}

/**
 * The all / web / research toggle above the project grid. One bubble slides
 * to whichever filter is selected.
 */
function ProjectFilter({ value, onChange }: ProjectFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects"
      className="inline-flex gap-1 self-start rounded-full p-1 well"
    >
      {projectFilters.map((filter) => {
        const active = filter.value === value;
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(filter.value)}
            className={cn(
              "relative h-10 cursor-pointer rounded-full px-[18px] label transition-colors",
              active ? "text-ink" : "hover:text-ink",
            )}
          >
            {/* One bubble that slides to whichever filter is active. */}
            {active && (
              <motion.span
                layoutId="project-filter-bubble"
                aria-hidden="true"
                className="absolute inset-0 keycap rounded-full"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * The Projects section: the featured project, then a filterable grid of
 * project cards.
 */
export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section name="Projects">
      <FeaturedProject project={featuredProject} />
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
        <ProjectFilter value={filter} onChange={setFilter} />
        <p className="m-0 label" aria-live="polite">
          {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <motion.ul
        layout
        className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6 p-0"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((project) => (
            <motion.li
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3.5 rounded-3xl p-6 pad"
            >
              <div className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex size-[52px] flex-none items-center justify-center rounded-full well"
                >
                  <span className="dot text-[18px]">{project.monogram}</span>
                </span>
                <div className="flex min-w-0 flex-col gap-[3px]">
                  <span className="label">{project.label}</span>
                  <h3 className="m-0 text-lg font-semibold tracking-[-0.01em]">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="m-0 clamp-3 text-[15px] leading-[1.6] text-ink-2">
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
