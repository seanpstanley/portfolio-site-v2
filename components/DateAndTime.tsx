import React from "react";

import { motion } from "framer-motion";

import Date from "@/components/Date";
import Time from "@/components/Time";

export default function DateAndTime() {
  return (
    <motion.div
      className="flex gap-3 text-gray-500"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15,
      }}
    >
      <Date />
      <Time />
    </motion.div>
  );
}
