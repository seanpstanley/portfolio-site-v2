"use client";

import { MotionConfig } from "motion/react";

import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // respect the OS "reduce motion" setting for every motion component
    <MotionConfig reducedMotion="user">
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </MotionConfig>
  );
}
