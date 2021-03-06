import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

interface LeftRightImageTextViewProps {
  heading: string;
  subheading: string;
  nonTextContent: React.ReactNode;
  children: React.ReactNode;
  leftAligned: boolean;
}

export const LeftRightImageTextView: React.FC<LeftRightImageTextViewProps> = ({
  heading,
  subheading,
  nonTextContent,
  children,
  leftAligned,
}) => {
  return (
    <Box>
      {leftAligned ? (
        <Flex
          direction="column"
          mt="5rem"
          minW="90%"
          minH="10rem"
          ml="5%"
          mr="5%"
        >
          <Heading as="h3" size="lg" letterSpacing="-.1rem">
            {heading}
          </Heading>

          <Text color="grey" fontSize="lg">
            {subheading}
          </Text>
          <Flex
            direction={{ base: "column", lg: "row" }}
            mt="1rem"
            minW="100%"
            minH="100%"
          >
            {nonTextContent}
            <Box
              minW={{ base: "95%", lg: "60%" }}
              maxW={{ base: "95%", lg: "60%" }}
              ml={{ base: "auto", lg: "initial" }}
              mr={{ base: "auto", lg: "initial" }}
            >
              {children}
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Flex
          direction="column"
          mt="5rem"
          minW="90%"
          minH="10rem"
          ml="5%"
          mr="5%"
        >
          <Box ml={{ base: "5%", lg: "60%" }}>
            <Heading as="h3" size="lg" letterSpacing="-.1rem">
              {heading}
            </Heading>
            <Text color="grey" fontSize="lg">
              {subheading}
            </Text>
          </Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            display={{ base: "grid", lg: "initial" }}
            mt="1rem"
            minW="100%"
            minH="100%"
          >
            <Box
              gridRow={{ base: "2", lg: "none" }}
              gridColumn={{ base: "1", lg: "none" }}
              minW={{ base: "95%", lg: "60%" }}
              maxW={{ base: "95%", lg: "60%" }}
              ml={{ base: "auto", lg: "initial" }}
              mr={{ base: "auto", lg: "initial" }}
            >
              {children}
            </Box>
            <Box
              display={{ base: "block", lg: "none" }}
              gridRow="1"
              gridColumn="1"
            >
              {nonTextContent}
            </Box>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default LeftRightImageTextView;
