import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    // <h2 className="text-3xl font-medium mb-8 text-start lg:hidden">
    <h2 className="text-2xl font-medium mb-4 -mx-4  text-start lg:hidden sticky top-0 z-20 w-screen py-4 px-4 bg-pattens-blue/70 dark:bg-cinder/70 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      {children}
    </h2>
  );
}
