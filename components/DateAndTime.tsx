import React from "react";

import { motion } from "framer-motion";

import Date from "@/components/Date";
import Time from "@/components/Time";

export default function DateAndTime() {
  return (
    <motion.div
      className="hidden md:flex md:flex-col gap-3 text-gray-500 items-center"
      // initial={{ y: -100, x: "-50%", opacity: 0 }}
      // animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <Date />
      <Time />
    </motion.div>
  );
}
