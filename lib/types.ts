import type { projectFilters, sections } from "@/lib/data";

/** Name of a page section, e.g. "About". */
export type SectionName = (typeof sections)[number]["name"];

/** A link that opens in a new tab. */
export interface ExternalLink {
  /** Destination URL. */
  href: string;
  /** Accessible name, including that it opens in a new tab. */
  label: string;
}

/** A role in the Experience section. */
export interface ExperienceEntry {
  /** Whether this was a job or research; sets the icon and accent color. */
  kind: "work" | "research";
  /** Job title, e.g. "Software Engineer I". */
  title: string;
  /** Company or institution. */
  org: string;
  /** Date range as displayed, e.g. "Jun 2021 — Aug 2024". */
  date: string;
  /** One-paragraph summary of the role. */
  description: string;
  /** Technologies and practices used, in display order. */
  tags: string[];
}

/** The project highlighted at the top of the Projects section. */
export interface FeaturedProject {
  /** Project name. */
  title: string;
  /** One-line tagline shown on the LCD panel. */
  subtitle: string;
  /** Development status shown next to the status light. */
  status: string;
  /** One-paragraph summary. */
  description: string;
  /** Technologies used, in display order. */
  tags: string[];
  /** Live site link. The "Open" button is hidden when omitted. */
  live?: ExternalLink;
  /** Source code link. */
  code?: ExternalLink;
}

/** Category a project is filtered under. */
export type ProjectCategory = Exclude<
  (typeof projectFilters)[number]["value"],
  "all"
>;

/** A project card in the Projects grid. */
export interface Project {
  /** Two-letter dot-matrix monogram shown on the card's badge, e.g. "hd". */
  monogram: string;
  /** Short descriptor shown above the title, e.g. "web app". */
  label: string;
  /** Which filter tab the project appears under. */
  category: ProjectCategory;
  /** Project name. */
  title: string;
  /** Summary, clamped to three lines on the card. */
  description: string;
  /** Technologies used, in display order. The first three are shown. */
  tags: string[];
  /** Live site link. The ↗ key is hidden when omitted. */
  live?: ExternalLink;
  /** Source code link. The "gh" key is hidden when omitted. */
  code?: ExternalLink;
}

/** A row of skills in the Skills section. */
export interface SkillGroup {
  /** Legend shown beside the group, e.g. "languages". */
  name: string;
  /** CSS color for the legend swatch, usually a theme token. */
  color: string;
  /** Skills in the group, in display order. */
  items: string[];
}

/** A movie or show quote for the footer. */
export interface FooterQuote {
  /** The quote itself, without surrounding quotation marks. */
  quote: string;
  /** Title of the movie or show. */
  source: string;
  /** Release year. */
  year: number;
}
