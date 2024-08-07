"use client";

import React, { useRef } from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "@/components/SectionHeading";
import SubmitButton from "@/components/SubmitButton";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.85);

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-10 sm:scroll-mt-28 mb-20 w-[min(100%,38rem)] text-center px-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 dark:text-white/80">
        use the form below, or contact me directly at{" "}
        <a className="underline" href="mailto:seans09comp@gmail.com">
          seans09comp@gmail.com
        </a>
      </p>

      <form
        ref={formRef}
        className="mt-4 flex flex-col text-start"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error, {
              style: {
                border: "1px solid #ff5733",
              },
            });
            return;
          }

          // clear the form after successful submission
          formRef.current?.reset();

          toast.success("Your message is on its way!", {
            style: {
              border: "1px solid #c1e1c1",
            },
          });
        }}
      >
        <label className="text-lg" htmlFor="senderName">
          Name
        </label>
        <input
          className="h-14 px-4 mt-1 mb-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition dark:text-black"
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
          className="h-14 px-4 mt-1 mb-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition dark:text-black"
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
          className="h-60 mt-1 mb-4 min-h-14 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition dark:text-black"
          name="message"
          placeholder="what would you like to say?"
          required
          maxLength={5000}
          id="message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
