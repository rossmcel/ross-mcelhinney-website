import React from "react";
import { Box } from "@chakra-ui/react";
import DynamicTitleSection from "../../shared/components/dynamic-title-section/dynamicTitleSection";

export const ContactView: React.FC = () => {
  return (
    <Box overflow="hidden" minH="130rem" mt="2rem">
      <DynamicTitleSection />
    </Box>
  );
};

export default ContactView;
