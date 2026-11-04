"use client";

import { useRef } from "react";

import toast from "react-hot-toast";

import { sendEmail } from "@/actions/sendEmail";
import Section from "@/components/Section";
import SubmitButton from "@/components/SubmitButton";
import { socials } from "@/lib/data";

const fieldLabel = "label text-ink";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Section name="Contact" threshold={0.5}>
      <form
        ref={formRef}
        className="pad flex flex-col gap-5 rounded-3xl px-6 py-7 sm:px-9 sm:py-8"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          formRef.current?.reset();
          toast.success("Your message is on its way!");
        }}
      >
        <p className="m-0 text-[17px] leading-relaxed text-ink-2">
          Use the form below, or contact me directly at{" "}
          <a className="inline-link" href={`mailto:${socials.email}`}>
            {socials.email}
          </a>
          .
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-[18px]">
          <div className="flex flex-col gap-2">
            <label className={fieldLabel} htmlFor="senderName">
              Name
            </label>
            <input
              className="field"
              id="senderName"
              name="senderName"
              type="text"
              autoComplete="name"
              placeholder="What's your name?"
              required
              maxLength={500}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={fieldLabel} htmlFor="senderEmail">
              Email address
            </label>
            <input
              className="field"
              id="senderEmail"
              name="senderEmail"
              type="email"
              autoComplete="email"
              placeholder="Where can I reach you?"
              required
              maxLength={500}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className={fieldLabel} htmlFor="message">
            Message
          </label>
          <textarea
            className="field min-h-36 resize-y"
            id="message"
            name="message"
            rows={6}
            placeholder="What would you like to say?"
            required
            maxLength={5000}
          />
        </div>
        <SubmitButton />
      </form>
    </Section>
  );
}
