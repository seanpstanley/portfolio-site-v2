import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import ThemeContextProvider from "@/context/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sean | Project Portfolio",
  description:
    "A responsive portfolio website showcasing my experience and a few of my personal projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="lowercase !scroll-smooth">
      <body
        className={`${inter.className} sm:bg-gradient-to-tl bg-gradient-to-t from-gray-50 sm:to-indigo-100 to-indigo-50 text-gray-950 relative pt-20 sm:pt-32 dark:sm:bg-gradient-to-tl dark:bg-gradient-to-t dark:from-gray-900 dark:to-slate-800 dark:text-gray-50 dark:text-opacity-90 transition-colors`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div> */}
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#524f72]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitchButton />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
