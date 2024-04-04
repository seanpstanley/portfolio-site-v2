import React from "react";

import { motion } from "framer-motion";

import Date from "@/components/Date";
import Time from "@/components/Time";

export default function DateAndTime() {
  return (
    <motion.div
      className="hidden lg:flex gap-3 absolute top-6 left-[6.75rem] text-gray-500"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <Date />
      <Time />
    </motion.div>
  );
}
