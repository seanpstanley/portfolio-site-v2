import React, { ReactElement } from "react";

import { IconType, IconContext } from "react-icons";

import { getHostName } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface LinkIconButtonProps {
  link: string;
  accessibilityText?: string;
  icon: ReactElement<IconType>;
  size?: string;
  className?: string;
}

export default function LinkIconButton({
  link,
  accessibilityText,
  icon,
  size = "24",
  className,
}: LinkIconButtonProps) {
  return (
    <a
      className={cn(
        "bg-white w-14 h-14 nm-convex-pattens-blue dark:nm-convex-gray-900-xs hover:nm-convex-pattens-blue-sm dark:hover:nm-convex-gray-900-sm active:nm-concave-pattens-blue-xs dark:active:nm-concave-gray-900-xs text-[#6c5cfb] flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 hover:text-gray-900 active:scale-100 transition cursor-pointer dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-300 dark:border-white/40",
        className
      )}
      href={link}
      aria-label={
        accessibilityText ? accessibilityText : `My ${getHostName(link)} page`
      }
    >
      <IconContext.Provider value={{ size: `${size}` }}>
        {icon}
      </IconContext.Provider>
    </a>
  );
}
