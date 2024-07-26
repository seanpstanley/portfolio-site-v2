"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import Intro from "@/components/Intro";
import LinkIconButton from "@/components/LinkIconButton";
import SidebarNavbar from "@/components/SidebarNavbar";
import ThemeSwitchToggle from "@/components/ThemeSwitchToggle";

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col gap-y-4 lg:justify-between py-12 md:py-16 lg:py-20">
      <div>
        <Intro />

        <SidebarNavbar />
      </div>
      <motion.div
        className="flex justify-start px-2 md:px-0 lg:justify-between lg:max-w-xs"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <ThemeSwitchToggle />
        <div className="flex gap-3">
          <LinkIconButton
            link="https://www.linkedin.com/in/seanpstanley/"
            icon={<FaLinkedin />}
          />
          <LinkIconButton
            link="https://github.com/seanpstanley"
            icon={<FaGithub />}
          />
        </div>
      </motion.div>
    </header>
  );
}
