import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export interface FooterQuotesInterface {
  [index: number]: { quote: string; source: string; year: number };
}
