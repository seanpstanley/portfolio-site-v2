import React from "react";

import Date from "@/components/Date";
import Time from "@/components/Time";

export default function DateAndTime() {
  return (
    <div className="flex gap-3 text-gray-500">
      <Date />
      <Time />
    </div>
  );
}
