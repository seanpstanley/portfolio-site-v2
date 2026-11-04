"use client";

import { useRef, useState } from "react";

import toast from "react-hot-toast";

import { sendEmail } from "@/actions/sendEmail";
import Section from "@/components/Section";
import SubmitButton from "@/components/SubmitButton";
import { socials } from "@/lib/data";

// Shared styles for the field labels.
const fieldLabel = "label text-ink";

/**
 * The Contact section: a form that sends me an email through the
 * {@link sendEmail} server action, with a honeypot field for bots and a
 * status light that turns green once every field is valid.
 */
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  // Every required field is filled in and valid (drives the status light).
  const [ready, setReady] = useState(false);

  return (
    <Section name="Contact">
      <form
        ref={formRef}
        className="relative flex flex-col gap-5 rounded-3xl px-6 py-7 pad sm:px-9 sm:py-8"
        onInput={(event) => setReady(event.currentTarget.checkValidity())}
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          formRef.current?.reset();
          setReady(false);
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
        {/* Honeypot: off-screen and skipped by Tab and screen readers; bots fill it in. */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        >
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
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
            className="min-h-36 field resize-y"
            id="message"
            name="message"
            rows={6}
            placeholder="What would you like to say?"
            required
            maxLength={5000}
          />
        </div>
        <SubmitButton ready={ready} />
      </form>
    </Section>
  );
}
