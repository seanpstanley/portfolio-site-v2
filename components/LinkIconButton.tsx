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
        "size-14 nm-convex-pattens-blue dark:nm-convex-cinder hover:nm-convex-pattens-blue-sm dark:hover:nm-convex-cinder-sm active:nm-concave-pattens-blue-sm dark:active:nm-concave-cinder-sm text-gray-800 hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] flex items-center justify-center rounded-full focus-visible:scale-105 focus-visible:text-[#6c5cfb] dark:focus-visible:text-[#6c5cfb] hover:scale-105 active:scale-100 transition cursor-pointer dark:text-white/80",
        className
      )}
      href={link}
      aria-label={
        accessibilityText
          ? accessibilityText
          : `My ${getHostName(link)} page (opens in a new tab)`
      }
      target="_blank"
      rel="noreferrer noopener"
    >
      <IconContext.Provider value={{ size: `${size}` }}>
        {icon}
      </IconContext.Provider>
    </a>
  );
}
