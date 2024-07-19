import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import type { SectionName } from "@/lib/types";

// select active section based on scrolling
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
      //look into better way to do this
      window.history.replaceState(null, "", `#${sectionName.toLowerCase()}`);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

// return necessary data for rendering clock and calendar
export function useDate() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      const degrees = 6;

      setHours(date.getHours() * 30 + date.getMinutes() / 12 + 180);
      setMinutes(date.getMinutes() * degrees + 180);
      setSeconds(date.getSeconds() * degrees + 180);
    }, 1000);

    // clean up the timer when component unmounts
    return () => clearInterval(timer);
  }, [date, seconds]);

  return {
    date,
    hours,
    minutes,
    seconds,
  };
}
