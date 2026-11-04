import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ControlPanel from "@/components/ControlPanel";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import MobileReadout from "@/components/MobileReadout";
import Providers from "@/components/Providers";
import { themeInitScript } from "@/lib/theme-script";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const doto = Doto({ subsets: ["latin"], variable: "--font-doto" });

const description =
  "Sean Stanley, frontend developer who likes stuff that looks good. Experience, web projects, and augmented reality research.";

export const metadata: Metadata = {
  metadataBase: new URL("https://seanpstanley.dev"),
  title: "Sean Stanley | Portfolio",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sean Stanley",
    title: "Sean Stanley | Portfolio",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Stanley | Portfolio",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4e3df" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1d20" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // the theme script adds .dark before hydration
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${doto.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-tile px-4 py-3 label text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        <Providers>
          <MobileReadout />
          <div className="mx-auto max-w-[1240px] px-4 pt-5 pb-36 sm:px-8 lg:flex lg:items-start lg:gap-14 lg:px-10 lg:pt-14 lg:pb-16">
            <ControlPanel />
            <div className="mt-12 min-w-0 flex-1 lg:mt-2">
              {children}
              <Footer />
            </div>
          </div>
          <MobileDock />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "var(--tile)",
                color: "var(--ink)",
                boxShadow:
                  "inset 0 1px 0 var(--rim), -7px -7px 18px var(--hi), 9px 12px 26px var(--amb-soft), 1px 2px 3px var(--contact)",
                borderRadius: "18px",
                padding: "12px 16px",
                fontWeight: 500,
              },
              success: { icon: <span className="led" data-tone="ok" /> },
              error: { icon: <span className="led" /> },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
