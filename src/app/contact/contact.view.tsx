import React from "react";
import { Box } from "@chakra-ui/react";
import DynamicTitleSection from "../../shared/components/dynamic-title-section/dynamicTitleSection";
import { AnimatedEmailIcon } from "../../shared/components/animated-email-icon";

export const ContactView: React.FC = () => {
  return (
    <Box overflow="hidden" minH="130rem" mt="2rem">
      <DynamicTitleSection />
      <AnimatedEmailIcon />
    </Box>
  );
};

export default ContactView;
