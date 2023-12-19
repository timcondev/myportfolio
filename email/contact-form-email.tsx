import React from 'react';
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
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      {/* <Tailwind> */}
      <Body style={{ backgroundColor: 'lightgray', color: 'black' }}>
        <Container>
          <Section
            style={{
              backgroundColor: 'white',
              border: '1px black',
              marginTop: '10',
              padding: '5',
            }}
          >
            <Heading style={{ color: 'rgb(59 130 246)' }}>
              You received the following message from the contact form
            </Heading>
            <Text style={{ color: 'blue' }}>{message}</Text>
            <Hr />
            <Text>The sender&apos;s email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
      {/* </Tailwind> */}
    </Html>
  );
}
