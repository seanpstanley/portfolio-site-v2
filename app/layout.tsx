import "@/app/globals.css";
import { Inter, Nunito_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import ThemeContextProvider from "@/context/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });

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
        className={`${nunito.className} bg-[#e3eaf4] text-gray-950 relative pt-20 dark:bg-cinder dark:text-gray-50/90 transition-colors max-w-screen-xl mx-auto`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="flex">
              <Sidebar />
              <div className="w-28"></div>
              <div className="flex flex-col items-center max-w-screen-lg mx-auto">
                <Header />
                {children}
                <Footer />
                <Toaster position="top-right" />
                <ThemeSwitchButton />
              </div>
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
