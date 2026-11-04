"use server";

import React from "react";

import { Resend } from "resend";

import ContactFormEmail from "@/email/ContactFormEmail";
import { socials } from "@/lib/data";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

// deliberately loose: the browser already checks format, this just rejects junk
const EMAIL_PATTERN = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

// strip anything that could break out of a quoted email display name
const toDisplayName = (name: string) =>
  name
    .replace(/[\r\n"<>\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);

export const sendEmail = async (
  formData: FormData,
): Promise<{ error?: string }> => {
  // honeypot: hidden from people, but bots fill in every field. Pretend it
  // worked so they don't retry.
  if (formData.get("company")) {
    return {};
  }

  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // server-side validation
  if (!validateString(senderName, 500) || !toDisplayName(senderName)) {
    return { error: "Please add your name." };
  }
  if (
    !validateString(senderEmail, 500) ||
    !EMAIL_PATTERN.test(senderEmail.trim())
  ) {
    return { error: "That email address doesn't look right." };
  }
  if (!validateString(message, 5000) || !message.trim()) {
    return { error: "Please add a message." };
  }

  const name = toDisplayName(senderName);
  const email = senderEmail.trim();

  const { error } = await resend.emails.send({
    from: `"${name} via portfolio" <contact@seanpstanley.dev>`,
    to: socials.email,
    subject: `New message from ${name}`,
    replyTo: email,
    react: React.createElement(ContactFormEmail, {
      senderName: name,
      senderEmail: email,
      message: message.trim(),
    }),
  });

  if (error) {
    // details stay in the server logs; visitors get something actionable
    console.error("Contact form send failed:", getErrorMessage(error));
    return {
      error: `Couldn't send your message. Please try again, or email ${socials.email}.`,
    };
  }

  return {};
};
