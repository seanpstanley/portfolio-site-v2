// fade in from bottom animation for projects, skills, etc.
export const fadeUpAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// hamburger menu --> x animations
export const hamburgerAnimationVariants = {
  top: {
    open: {
      rotate: "45deg",
      top: ["35%", "50%"],
    },
    closed: {
      rotate: "0deg",
      top: ["50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: "-45deg",
      opacity: 0,
    },
    closed: {
      rotate: "0deg",
      opacity: 100,
    },
  },
  bottom: {
    open: {
      rotate: "-45deg",
      bottom: ["35%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: "0deg",
      bottom: ["50%", "35%"],
    },
  },
};

// server-side validation for email contents in contact
export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

// retrieve message string from various error structures
export const getErrorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
