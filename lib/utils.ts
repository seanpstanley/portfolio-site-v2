import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// combo of tailwind merge and clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// fade up into place, staggered by index (used with motion's whileInView)
export const fadeUpVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * index, duration: 0.4, ease: [0.3, 0.7, 0.4, 1] as const },
  }),
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
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      romanNumeral += numeral;
      num -= value;
    }
  }
  return romanNumeral;
};

// "01", "02", ...
export const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);

// server-side validation for email contents in contact
export const validateString = (
  value: unknown,
  maxLength: number,
): value is string => {
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
