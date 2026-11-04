"use client";

import { useFormStatus } from "react-dom";
import { LuArrowRight } from "react-icons/lu";

/** Props for {@link SubmitButton}. */
interface SubmitButtonProps {
  /** Every required field is filled in and valid. Turns the status light green. */
  ready: boolean;
}

/**
 * The contact form's status light, status text, and send key. Reads the
 * pending state from the enclosing form, so it must render inside a `<form>`.
 */
export default function SubmitButton({ ready }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const status = pending
    ? "sending…"
    : ready
      ? "ready to send"
      : "fill in all fields";

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div
        className="flex items-center gap-2.5"
        role="status"
        aria-live="polite"
      >
        <span
          className="led data-[pending=true]:animate-pulse motion-reduce:animate-none"
          data-on={pending || ready}
          data-tone={!pending && ready ? "ok" : undefined}
          data-pending={pending}
          aria-hidden="true"
        />
        <span className="label">{status}</span>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bubble h-[54px] gap-2.5 rounded-full px-7 text-base font-semibold bubble-fill"
      >
        {pending ? "Sending" : "Send message"}
        <LuArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
