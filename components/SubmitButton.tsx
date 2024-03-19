import React from "react";
import { BiMailSend } from "react-icons/bi";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center lowercase justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition disabled:scale-100 disabled:bg-opacity-65 dark:bg-white/10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <BiMailSend className="text-lg opacity-70 transition group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
