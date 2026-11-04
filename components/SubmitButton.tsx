"use client";

import { useFormStatus } from "react-dom";
import { LuArrowRight } from "react-icons/lu";

// status light + send key. Must render inside the <form>.
export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2.5" role="status" aria-live="polite">
        <span className="led" data-on={pending} aria-hidden="true" />
        <span className="label">{pending ? "sending…" : "ready to send"}</span>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bubble bubble-fill h-[54px] gap-2.5 rounded-full px-7 text-base font-semibold"
      >
        {pending ? "Sending" : "Send message"}
        <LuArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
