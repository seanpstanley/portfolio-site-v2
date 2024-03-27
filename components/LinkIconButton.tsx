import React, { ReactElement } from "react";

import { IconType, IconContext } from "react-icons";

interface LinkIconButtonProps {
  link: string;
  icon: ReactElement<IconType>;
  size?: string;
}

export default function LinkIconButton({
  link,
  icon,
  size = "24",
}: LinkIconButtonProps) {
  return (
    <>
      <a
        className={
          "bg-white w-14 h-14 text-gray-700 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 hover:text-gray-900 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-300 dark:border-white/40"
        }
        href={link}
        target="_blank"
      >
        <IconContext.Provider value={{ size: `${size}` }}>
          {icon}
        </IconContext.Provider>
      </a>
    </>
  );
}
