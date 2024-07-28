import { IoSunny, IoMoon } from "react-icons/io5";

import { useTheme } from "@/context/ThemeContextProvider";

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative cursor-pointer items-center w-fit rounded-full text-gray-700 hover:text-[#6c5cfb] focus-visible:text-[#6c5cfb] dark:focus-visible:text-[#6c5cfb] dark:text-white/70 dark:hover:text-[#6c5cfb] transition-colors motion-reduce:transition-none hidden lg:inline-flex">
      <input
        id="dark-toggle"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light" ? false : true}
        className="peer sr-only"
      />
      <label htmlFor="dark-toggle" className="hidden">
        Toggle Dark Mode
      </label>
      <span className="absolute left-2.5">
        <IoMoon />
      </span>
      <span className="absolute right-2 text-lg">
        <IoSunny />
      </span>
      <div className="peer h-9 w-16 rounded-full nm-inset-pattens-blue-sm dark:nm-inset-cinder-sm after:absolute after:left-1 after:top-3.5 after:size-7 after:rounded-full after:nm-flat-pattens-blue-sm after:dark:nm-flat-cinder-sm after:transition-all after:motion-reduce:transition-none after:content-[''] peer-checked:after:translate-x-full after:duration-300 after:ease-in-out" />
    </label>
  );
}
