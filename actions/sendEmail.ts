"use server";

import React from "react";

import { Resend } from "resend";

import ContactFormEmail from "@/email/ContactFormEmail";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // server-side validation
  if (!validateString(senderName, 500)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // connect my domain to this, look up how to do it in docs
    data = await resend.emails.send({
      from: `${senderName} from Portfolio Contact Form <onboarding@resend.dev>`,
      to: "seans09comp@gmail.com",
      subject: "Someone reached out to you!",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
