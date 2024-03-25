"use client";

import React from "react";

import Calendar from "@/components/Calendar";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";

export default function Header() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <Calendar />
    </>
  );
}
