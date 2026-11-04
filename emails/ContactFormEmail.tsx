import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

/** Props for {@link ContactFormEmail}. */
interface ContactFormEmailProps {
  /** The visitor's name, already sanitized for display. */
  senderName: string;
  /** The visitor's email address. Shown as a mailto link. */
  senderEmail: string;
  /** The message body. Line breaks are preserved. */
  message: string;
}

/**
 * The email I receive when someone submits the contact form.
 *
 * Uses colors from the site's "chalk" palette. Email clients don't do depth,
 * so it keeps the palette and type feel and leaves the shadows out.
 */
export default function ContactFormEmail({
  senderName,
  senderEmail,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{`${senderName}: ${message.slice(0, 80)}`}</Preview>
      <Tailwind>
        <Body className="m-0 bg-[#e4e3df] py-10 font-sans text-[#1b1b1f]">
          <Container className="max-w-[560px] rounded-[20px] bg-[#ebeae6] px-8 py-6">
            <Text className="m-0 font-mono text-[11px] tracking-[0.09em] text-[#5c5c64] uppercase">
              portfolio · contact form
            </Text>
            <Heading className="mt-3 mb-1 text-[22px] leading-tight font-semibold">
              {senderName} reached out
            </Heading>
            <Text className="mt-0 text-[15px] text-[#46464e]">
              <Link
                href={`mailto:${senderEmail}`}
                className="text-[#5b45e0] underline"
              >
                {senderEmail}
              </Link>
            </Text>
            <Section className="rounded-[14px] bg-[#dfddd8] px-5 py-1">
              <Text className="text-[15px] leading-[1.6] whitespace-pre-wrap">
                {message}
              </Text>
            </Section>
            <Hr className="my-5 border-[#cfccc5]" />
            <Text className="m-0 text-[13px] text-[#5c5c64]">
              Reply to this email to answer {senderName} directly.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
