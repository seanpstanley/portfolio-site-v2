"use client";

import React from "react";

import DateAndTime from "@/components/DateAndTime";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";

export default function Header() {
  return (
    <>
      {/* can i use a breakpoint in the {&& style?} */}
      <DesktopNavbar />
      <MobileNavbar />
      <DateAndTime />
    </>
  );
}
