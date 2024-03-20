import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import type { SectionName } from "@/lib/types";

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
