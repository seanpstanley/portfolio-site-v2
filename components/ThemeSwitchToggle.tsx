import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { IoSunny, IoMoon } from "react-icons/io5";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="focus relative hidden w-fit cursor-pointer items-center rounded-full text-gray-700 transition-colors focus-within:text-[#6c5cfb] hover:text-[#6c5cfb] motion-reduce:transition-none dark:text-white/70 dark:focus-within:text-[#6c5cfb] dark:hover:text-[#6c5cfb] lg:inline-flex">
      <input
        id="dark-toggle"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light" ? false : true}
        className="peer sr-only"
      />
      <label htmlFor="dark-toggle" className="sr-only">
        Toggle Dark Mode
      </label>
      <span className="absolute left-2.5">
        <AccessibleIcon label="Moon">
          <IoMoon />
        </AccessibleIcon>
      </span>
      <span className="absolute right-2 text-lg">
        <AccessibleIcon label="Sun">
          <IoSunny />
        </AccessibleIcon>
      </span>
      <div className="h-9 w-16 rounded-full nm-inset-pattens-blue-sm after:absolute after:left-1 after:top-3.5 after:size-7 after:rounded-full after:transition-all after:duration-300 after:ease-in-out after:content-[''] after:nm-flat-pattens-blue-sm peer-checked:after:translate-x-full after:motion-reduce:transition-none dark:nm-inset-cinder-sm after:dark:nm-flat-cinder-sm" />
    </label>
  );
}
