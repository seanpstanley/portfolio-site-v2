"use client";

import React from "react";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}