/**
 * The AMC A-List disclaimer at the end of the About section. The `*` after
 * the A-List bit links here.
 */
export default function Disclaimer() {
  return (
    <small
      id="disclaimer"
      className="block scroll-mt-28 text-xs leading-relaxed text-ink-3 lg:scroll-mt-14"
    >
      <span className="font-bold text-ink">*</span> The use of brand names
      and/or any mention or listing of specific commercial products or services
      herein is solely for educational purposes and does not imply endorsement
      by AMC Theatres or their partners, nor discrimination against similar
      brands, products or services not mentioned.
    </small>
  );
}
