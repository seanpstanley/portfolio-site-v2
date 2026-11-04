import NavKeys from "@/components/NavKeys";

/*
  Phones: section keys docked at the bottom, within thumb reach.
  The dock gets a tight shadow instead of the panel's wide one: iOS Safari
  clips large blurred shadows on fixed elements to a hard-edged rectangle.
*/
export default function MobileDock() {
  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-3 bottom-[max(14px,env(safe-area-inset-bottom))] z-40 lg:hidden"
    >
      <div className="sheet mx-auto max-w-md rounded-3xl shadow-[0_6px_14px_-4px_var(--amb),0_1px_2px_var(--contact)]">
        <NavKeys variant="dock" />
      </div>
    </nav>
  );
}
