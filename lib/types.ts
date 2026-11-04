import type { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export interface ExternalLink {
  href: string;
  label: string;
}

export interface Experience {
  kind: "work" | "research";
  title: string;
  org: string;
  date: string;
  description: string;
  tags: string[];
}

export interface FeaturedProject {
  title: string;
  subtitle: string;
  status: string;
  description: string;
  tags: string[];
  live?: ExternalLink;
  code?: ExternalLink;
}

export type ProjectCategory = "web" | "research";

export interface Project {
  mono: string;
  kind: string;
  category: ProjectCategory;
  title: string;
  description: string;
  tags: string[];
  live?: ExternalLink;
  code?: ExternalLink;
}

export interface SkillGroup {
  name: string;
  color: string;
  items: string[];
}

export interface FooterQuotesInterface {
  [index: number]: { quote: string; source: string; year: number };
}
