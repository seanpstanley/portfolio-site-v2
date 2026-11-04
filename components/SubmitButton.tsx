"use client";

import { useFormStatus } from "react-dom";
import { LuArrowRight } from "react-icons/lu";

interface SubmitButtonProps {
  // every required field is filled in and valid
  ready: boolean;
}

// status light + send key. Must render inside the <form>.
export default function SubmitButton({ ready }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const status = pending ? "sending…" : ready ? "ready to send" : "fill in all fields";

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2.5" role="status" aria-live="polite">
        <span
          className="led data-[pending=true]:animate-pulse motion-reduce:animate-none"
          data-on={pending || ready}
          data-tone={pending ? undefined : "ok"}
          data-pending={pending}
          aria-hidden="true"
        />
        <span className="label">{status}</span>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bubble bubble-fill h-[54px] gap-2.5 rounded-full px-7 text-base font-semibold"
      >
        {pending ? "Sending" : "Send message"}
        <LuArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
