"use client";

import { MotionConfig } from "motion/react";

import ActiveSectionProvider from "@/context/ActiveSectionProvider";

/** Props for {@link Providers}. */
interface ProvidersProps {
  /** The app. */
  children: React.ReactNode;
}

/**
 * App-wide client providers: the active-section tracker, and a Motion config
 * that respects the OS "reduce motion" setting in every motion component.
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </MotionConfig>
  );
}
