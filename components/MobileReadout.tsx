import SectionReadout from "@/components/SectionReadout";

// phones: the section screen pinned to the top under frosted glass
export default function MobileReadout() {
  return (
    <div className="sticky top-0 z-30 bg-glass px-4 py-3 backdrop-blur-md sm:px-8 lg:hidden">
      <SectionReadout size="sm" />
    </div>
  );
}
