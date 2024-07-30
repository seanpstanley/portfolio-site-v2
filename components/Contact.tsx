"use client";

import React, { useRef } from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { IoSend } from "react-icons/io5";

import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "@/components/SectionHeading";
import SubmitButton from "@/components/SubmitButton";
import { useTheme } from "@/context/ThemeContextProvider";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.85);

  const formRef = useRef<HTMLFormElement>(null);

  const { theme } = useTheme();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-0 lg:scroll-mt-24 w-full text-start px-2 lg:px-0 mb-4 md:mb-8 lg:mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-600 dark:text-white/60 text-start">
        use the form below, or contact me directly at{" "}
        <a
          className="underline text-gray-700 dark:text-white/70 hover:text-[#6c5cfb] dark:hover:text-[#6c5cfb] focus-visible::text-[#6c5cfb] transition-colors motion-reduce:transition-none"
          href="mailto:seans09comp@gmail.com"
        >
          seans09comp@gmail.com
        </a>
      </p>

      <form
        ref={formRef}
        className="mt-3 flex flex-col text-start"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error, {
              style: {
                background: theme === "light" ? "#e3eaf4" : "#1f2427",
                boxShadow:
                  theme === "light"
                    ? "0.2em 0.2em calc(0.2em * 2) #a2bbdb, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #f6f8fb"
                    : "0.2em 0.2em calc(0.2em * 2) #191c1e, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #242a2d",
                color: theme === "light" ? "#374151" : "rgba(255,255,255,0.7)",
              },
              iconTheme: {
                primary: "#6c5cfb",
                secondary: "#fff",
              },
              ariaProps: {
                role: "status",
                "aria-live": "polite",
              },
            });
            return;
          }

          // clear the form after successful submission
          formRef.current?.reset();

          toast.success("Your message is on its way!", {
            style: {
              background: theme === "light" ? "#e3eaf4" : "#1f2427",
              boxShadow:
                theme === "light"
                  ? "0.2em 0.2em calc(0.2em * 2) #a2bbdb, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #f6f8fb"
                  : "0.2em 0.2em calc(0.2em * 2) #191c1e, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #242a2d",
              color: theme === "light" ? "#374151" : "rgba(255,255,255,0.7)",
            },
            iconTheme: {
              primary: "#6c5cfb",
              secondary: "#fff",
            },
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
        }}
      >
        <label className="text-lg" htmlFor="senderName">
          Name
        </label>
        <input
          className="h-14 px-4 mt-1 mb-4 rounded-lg nm-inset-pattens-blue-sm dark:nm-inset-cinder-sm dark:placeholder:text-white/50 transition dark:text-white/90"
          name="senderName"
          placeholder="what's your name?"
          required
          type="text"
          autoComplete="name"
          maxLength={500}
          id="senderName"
        />

        <label className="text-lg" htmlFor="senderEmail">
          Email Address
        </label>
        <input
          className="h-14 px-4 mt-1 mb-4 rounded-lg nm-inset-pattens-blue-sm dark:nm-inset-cinder-sm dark:placeholder:text-white/50 transition dark:text-white/90"
          name="senderEmail"
          type="email"
          placeholder="where can i reach you?"
          required
          maxLength={500}
          id="senderEmail"
        />

        <label className="text-lg" htmlFor="message">
          Message
        </label>
        <textarea
          className="h-60 mt-1 mb-4 min-h-14 rounded-lg nm-inset-pattens-blue-sm dark:nm-inset-cinder-sm p-4 dark:placeholder:text-white/50 transition dark:text-white/90"
          name="message"
          placeholder="what would you like to say?"
          required
          maxLength={5000}
          id="message"
        />
        <SubmitButton className="self-end mt-1">
          Submit
          <IoSend className="ml-2 transition-transform group-hover:translate-x-1" />
        </SubmitButton>
      </form>
    </motion.section>
  );
}
