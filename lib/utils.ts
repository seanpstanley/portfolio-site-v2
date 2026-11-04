import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names (clsx syntax) and resolves Tailwind conflicts, so later
 * classes win.
 *
 * @example
 * cn("px-2", isActive && "bg-signal", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Motion variants: fade up into place, staggered by the `custom` index.
 * Used with `whileInView`.
 */
export const fadeUpVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
      duration: 0.4,
      ease: [0.3, 0.7, 0.4, 1] as const,
    },
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

/**
 * Converts a number to Roman numerals, e.g. 2026 → "MMXXVI". Returns an
 * empty string for `NaN`.
 */
export const romanize = (num: number): string => {
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

/** Pads a number to two digits: 1 → "01". */
export const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);

/**
 * Checks that a form value is a non-empty string no longer than `maxLength`.
 * Used for server-side validation of the contact form.
 */
export const validateString = (
  value: unknown,
  maxLength: number,
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

/**
 * Gets a readable message from anything thrown or returned as an error:
 * an `Error`, an object with a `message`, or a string.
 */
export const getErrorMessage = (error: unknown): string => {
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
