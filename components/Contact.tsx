"use client";

import React from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "@/components/SectionHeading";
import SubmitButton from "@/components/SubmitButton";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.85);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-20 mb-20 px-2 sm:px-0 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-gray-700 dark:text-white/80">
        use the form below, or contact me directly at{" "}
        <a className="underline" href="mailto:sean.pj.stanley@gmail.com">
          sean.pj.stanley@gmail.com
        </a>
      </p>

      <form
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
          // look into aria labels// making site accessible
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
          placeholder="where can I reach you?"
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
