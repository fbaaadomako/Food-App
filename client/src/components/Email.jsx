import React from 'react';
import {
  Body,
  Html,
  Container,
  Tailwind,
  Head,
  Heading,
  Img,
  Button,
  Text,
} from '@react-email/components';

const Email = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto mx-auto font-sans">
          <Img />
          <Container className="p-8 rounded-lg shadow-lg">
            <Heading className="text-xl pt-4"> Hello there👋 </Heading>
            <Text className="text-lg font-medium text-gray-700">
              Thank you for joining us on this exciting journey at Food Friendly App! We are thrilled to have you as part of our community and look forward to sharing the latest news, updates, and allergen-friendly recipes with you.
              <br />
              <br />
              In this newsletter, we aim to keep you informed about everything happening in the world of allergen-friendly cuisine, including:
              <br />
              <br />
              1. Special Events and Promotions
              <br />
              2. Allergen-Friendly Tips and Resources
              <br />
              3. User Spotlight
              <br />
              4. App Updates
            </Text>
            <Button className="bg-purple-700 text-white font-bold px-4 py-6 rounded-md">Link to further information</Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
