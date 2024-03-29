import React, { ReactElement } from "react";

import { IconType, IconContext } from "react-icons";

import { getHostName } from "@/lib/utils";

interface LinkIconButtonProps {
  link: string;
  accessibilityText?: string;
  icon: ReactElement<IconType>;
  size?: string;
}

export default function LinkIconButton({
  link,
  accessibilityText,
  icon,
  size = "24",
}: LinkIconButtonProps) {
  return (
    <a
      className={
        "bg-white w-14 h-14 text-gray-700 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 hover:text-gray-900 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-300 dark:border-white/40"
      }
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
