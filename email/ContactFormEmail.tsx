import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({
  message,
  senderEmail,
}: // style this more based on react email docs?
ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Someone reached out to you!</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                A new message for you from your contact form.
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Reply to this message at: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
