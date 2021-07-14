import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import DynamicTitleSection from "../../shared/components/dynamic-title-section/dynamicTitleSection";
import { AnimatedEmailIcon } from "../../shared/components/animated-email-icon";
import { AnimatedPhoneIcon } from "../../shared/components/animated-phone-icon";

export const ContactView: React.FC = () => {
  return (
    <Box overflow="hidden" minH="130rem" mt="2rem">
      <DynamicTitleSection />
      <Flex
        direction="row"
        mt="5rem"
        ml="auto"
        mr="auto"
        display="grid"
        maxWidth="70rem"
      >
        <Flex mr="5rem" gridRow="1" gridColumn="1" ml="0rem">
          <AnimatedEmailIcon />
        </Flex>
        <Flex mr="16rem" mt="-22rem" gridRow="1" gridColumn="2">
          <AnimatedPhoneIcon />
        </Flex>
        <Flex mt="-22rem" mr="7rem" gridRow="1" gridColumn="3">
          <AnimatedPhoneIcon />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactView;
