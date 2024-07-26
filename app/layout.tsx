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
        className={`${nunito.className} bg-[#e3eaf4] text-gray-900 relative min-h-screen px-4 md:px-14 lg:px-28 dark:bg-cinder dark:text-white/90 transition-colors mx-auto max-w-screen-xl`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="lg:flex lg:justify-between gap-6">
              <Sidebar />
              <div className="flex flex-col items-center lg:w-1/2">
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
