import React from "react";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  ref?: string;
  className?: string;
}

export default function SubmitButton({
  children,
  className,
  ref,
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus();
  // const pending = true;

  return (
    <button
      className={cn(
        "relative lowercase nm-flat-pattens-blue dark:nm-flat-cinder-lg inline-flex items-center justify-center h-12 w-28 overflow-hidden font-medium transition duration-300 ease-out rounded-full group hover:nm-flat-pattens-blue-sm dark:hover:nm-flat-cinder active:nm-inset-pattens-blue dark:active:nm-inset-cinder disabled:scale-100 disabled:hover:nm-inset-pattens-blue dark:disabled:hover:nm-inset-cinder disabled:nm-inset-pattens-blue dark:disabled:nm-inset-cinder dark:border-none hover:text-[#6c5cfb] hover:scale-105 active:scale-100 text-gray-700 dark:text-white/85 dark:hover:text-[#6c5cfb]",
        className
      )}
      type={pending ? "button" : "submit"}
      disabled={pending}
      aria-disabled={pending}
      ref={ref}
      {...props}
    >
      {pending ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="size-5 text-gray-400 animate-spin dark:text-white/50 fill-[#6c5cfb]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Submitting</span>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>

    //   <button
    //     className={cn(
    //       "relative lowercase nm-flat-pattens-blue dark:nm-flat-cinder-lg inline-flex items-center justify-center h-12 w-28 overflow-hidden font-medium transition duration-300 ease-out rounded-full group active:scale-90 active:nm-flat-pattens-blue-sm dark:active:nm-inset-cinder-sm disabled:scale-90 disabled:bg-opacity-65 dark:bg-white/10 dark:border-none",
    //       className
    //     )}
    //     type={pending ? "button" : "submit"}
    //     disabled={pending}
    //     aria-disabled={pending}
    //     ref={ref}
    //     {...props}
    //   >
    //     <span
    //       className={cn(
    //         "absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#6c5cfb] group-hover:translate-x-0 ease text-xl",
    //         pending && "hidden"
    //       )}
    //     >
    //       <BiMailSend />
    //     </span>
    //     {pending ? (
    // <div role="status">
    //   <svg
    //     aria-hidden="true"
    //     className="size-5 text-gray-400 animate-spin dark:text-white/50 dark:fill-white fill-[#6c5cfb]"
    //     viewBox="0 0 100 101"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    //       fill="currentColor"
    //     />
    //     <path
    //       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    //       fill="currentFill"
    //     />
    //   </svg>
    //   <span className="sr-only">Submitting</span>
    // </div>
    //     ) : (
    //       <>
    //         <span className="absolute flex items-center justify-center w-full h-full text-gray-700 dark:text-white transition-all duration-300 transform group-hover:translate-x-full ease">
    //           {children}
    //         </span>
    //         <span className="invisible">{children}</span>
    //       </>
    //     )}
    //   </button>
  );
}
