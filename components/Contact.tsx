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

  const isLightMode = theme === "light";

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-4 w-full scroll-mt-0 px-2 text-start md:mb-8 lg:mb-12 lg:scroll-mt-24 lg:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-start text-gray-600 dark:text-white/60">
        use the form below, or contact me directly at{" "}
        <a
          className="focus rounded-sm text-gray-700 underline transition-colors hover:text-blue-genie focus-visible:text-blue-genie motion-reduce:transition-none dark:text-white/70 dark:hover:text-blue-genie dark:focus-visible:text-blue-genie"
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
                background: isLightMode ? "#e3eaf4" : "#1f2427",
                boxShadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                color: isLightMode ? "#374151" : "rgba(255,255,255,0.7)",
                border: isLightMode
                  ? "1px solid rgba(17,24,39,0.5)"
                  : "1px solid rgba(255,255,255,0.5)",
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
              background: isLightMode ? "#e3eaf4" : "#1f2427",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              color: isLightMode ? "#374151" : "rgba(255,255,255,0.7)",
              border: isLightMode
                ? "1px solid rgba(17,24,39,0.5)"
                : "1px solid rgba(255,255,255,0.5)",
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
          className="focus mb-4 mt-1 h-14 rounded-lg px-4 transition nm-inset-pattens-blue-sm motion-reduce:transition-none dark:text-white/90 dark:nm-inset-cinder-sm dark:placeholder:text-white/50"
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
          className="focus mb-4 mt-1 h-14 rounded-lg px-4 transition nm-inset-pattens-blue-sm motion-reduce:transition-none dark:text-white/90 dark:nm-inset-cinder-sm dark:placeholder:text-white/50"
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
          className="focus mb-4 mt-1 h-60 min-h-14 rounded-lg p-4 transition nm-inset-pattens-blue-sm motion-reduce:transition-none dark:text-white/90 dark:nm-inset-cinder-sm dark:placeholder:text-white/50"
          name="message"
          placeholder="what would you like to say?"
          required
          maxLength={5000}
          id="message"
        />
        <SubmitButton className="mt-1 self-end">
          Submit
          <IoSend className="ml-2 transition-transform group-hover:translate-x-1" />
        </SubmitButton>
      </form>
    </motion.section>
  );
}
