import React from "react";
import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const DynamicTitleSection: React.FC = () => {
  return (
    <Box>
      <Box ml="5rem">
        <ScrollAnimation
          duration={2}
          animateIn="animate__fadeIn"
          initiallyVisible={false}
        >
          <Heading color="pink">email</Heading>
        </ScrollAnimation>
      </Box>
      <Box ml="5rem">
        <ScrollAnimation
          delay={2000}
          duration={2}
          animateIn="animate__fadeIn"
          initiallyVisible={false}
        >
          <Heading color="lightgrey">linkedin</Heading>
        </ScrollAnimation>
      </Box>
    </Box>
  );
};

export default DynamicTitleSection;
