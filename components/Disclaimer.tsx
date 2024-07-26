import { useSectionInView } from "@/lib/hooks";

export default function Disclaimer() {
  const { ref } = useSectionInView("About");

  return (
    <small
      id="disclaimer"
      ref={ref}
      className="block text-xs leading-relaxed text-gray-500 scroll-mt-12 lg:scroll-mt-24"
    >
      <span className="font-bold text-gray-900 dark:text-white/90">*</span> The
      use of brand names and/or any mention or listing of specific commercial
      products or services herein is solely for educational purposes and does
      not imply endorsement by AMC Theatres or their partners, nor
      discrimination against similar brands, products or services not mentioned.
    </small>
  );
}
