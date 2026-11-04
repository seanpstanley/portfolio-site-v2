import { sections } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import { cn, pad2 } from "@/lib/utils";

/** Props for {@link Section}. */
interface SectionProps {
  /** Which section this is. Sets the id, the heading, and its number. */
  name: SectionName;
  /** Extra classes for the `<section>`. */
  className?: string;
  /** The section's content, below the heading. */
  children: React.ReactNode;
}

/**
 * A numbered content module: a "02 — experience" heading, a groove, then the
 * content. The id matches the nav link's hash, so the scroll spy can find it.
 *
 * @example
 * <Section name="Skills">…</Section>
 */
export default function Section({ name, className, children }: SectionProps) {
  const index = sections.findIndex((section) => section.name === name);
  const id = sections[index].hash.slice(1);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "flex scroll-mt-28 flex-col gap-[22px] lg:scroll-mt-14",
        className,
      )}
    >
      <div className="flex items-center gap-3.5">
        <h2 id={`${id}-heading`} className="m-0 label">
          {pad2(index + 1)} — {name.toLowerCase()}
        </h2>
        <div className="h-1 flex-1 rounded well" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}
