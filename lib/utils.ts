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

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

// convert number to roman numerals (used for year in footer)
export const romanize = (num: number) => {
  if (isNaN(num)) {
    return "";
  }
  let romanNumeral = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      romanNumeral += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return romanNumeral;
};

// takes in a url and returns just what's between the www. and the .com (host name)
export const getHostName = (url: string) => {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === "string" &&
    match[2].length > 0
  ) {
    var hostname = match[2].split(".");
    return hostname[0];
  } else {
    return null;
  }
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
