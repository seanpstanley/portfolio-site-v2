import NavKeys from "@/components/NavKeys";

// phones: section keys docked at the bottom, within thumb reach
export default function MobileDock() {
  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-3 bottom-[max(14px,env(safe-area-inset-bottom))] z-40 lg:hidden"
    >
      <div className="sheet mx-auto max-w-md rounded-3xl">
        <NavKeys variant="dock" />
      </div>
    </nav>
  );
}
