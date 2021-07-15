import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { AnimatedEmailIcon } from "../../shared/components/animated-email-icon";
import { AnimatedPhoneIcon } from "../../shared/components/animated-phone-icon";
import { AnimatedLinkedinIcon } from "../../shared/components/animated-linkedin-icon";

export const ContactView: React.FC = () => {
  return (
    <Box overflow="hidden" minH="50rem" mt="2rem">
      <Heading size="xl" mb="3rem" textAlign="center">
        Contact Me
      </Heading>
      <Flex
        direction="row"
        mt="5rem"
        ml="auto"
        mr="auto"
        display="grid"
        maxWidth="70rem"
      >
        <Flex mr="-2rem" gridRow="1" gridColumn="1" ml="-7rem">
          <AnimatedEmailIcon />
        </Flex>
        <Flex mr="13rem" gridRow="1" gridColumn="2">
          <AnimatedPhoneIcon />
        </Flex>
        <Flex mr="6rem" gridRow="1" gridColumn="3">
          <AnimatedLinkedinIcon />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactView;
