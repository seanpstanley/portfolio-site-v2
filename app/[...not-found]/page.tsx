"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-12 md:my-16 ">
      <div className="flex items-start w-fit lg:mt-0 mb-3.5 font-thin text-5xl dark:text-white/90">
        <TypeAnimation
          sequence={[1000, "404", 500, "404."]}
          wrapper="h3"
          speed={1}
        />
      </div>
      <p className="!leading-normal text-lg text-start text-gray-700 dark:text-white/70 lg:max-w-sm mb-7 lg:mb-0">
        Nothing to see here!
      </p>

      <Link
        className="font-bold text-gray-900 dark:text-white/90  hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] transition-colors motion-reduce:transition-none"
        href="/"
      >
        Go back home.
      </Link>
    </div>
  );
}
