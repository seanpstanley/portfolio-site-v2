import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export const metadata = { title: "Not found | Sean Stanley" };

/** The 404 page, styled as an error readout. */
export default function NotFound() {
  return (
    <main id="main" className="flex flex-col gap-6">
      <div className="rounded-3xl p-2 well">
        <div className="flex min-h-[260px] flex-col justify-between rounded-[18px] px-6 py-5 lcd">
          <div className="flex items-center justify-between">
            <span className="label text-lcd-dim">error</span>
            <span className="led" aria-hidden="true" />
          </div>
          <h1 className="m-0 dot text-[96px] text-signal">404</h1>
          <p className="m-0 font-mono text-sm text-lcd-ink">
            Nothing to see here!
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="bubble h-[52px] gap-2.5 self-start rounded-full px-[22px] text-[15px] font-semibold"
      >
        <LuArrowLeft className="size-4" aria-hidden="true" />
        Go back home
      </Link>
    </main>
  );
}
