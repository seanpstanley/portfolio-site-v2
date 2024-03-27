"use client";

import React from "react";

import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import TimeAndDate from "@/components/TimeAndDate";

export default function Header() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <TimeAndDate />
    </>
  );
}
