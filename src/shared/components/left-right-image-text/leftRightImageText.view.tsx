import React from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import ScrollAnimation from "react-animate-on-scroll";
import HomePageRecording from "../../../homePageRecordingMid.gif";
import { LaptopDisplay } from "../device-displays/laptop-display";

export const LeftRightImageTextView: React.FC = () => {
  return (
    <Box>
      <Flex
        direction="column"
        mt="5rem"
        minW="90%"
        minH="10rem"
        ml="5%"
        mr="5%"
      >
        <Heading as="h3" size="lg" letterSpacing="-.1rem">
          Personal Website
        </Heading>
        <Text color="grey" fontSize="lg">
          React JS, TypeScript, JavaScript
        </Text>
        <Flex direction="row" mt="1rem" minW="100%" minH="100%">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
            <LaptopDisplay screenImage={HomePageRecording} />
          </ScrollAnimation>
          <Box minW="60%">
            <Text m="1rem">This is a test</Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        mt="5rem"
        minW="90%"
        minH="10rem"
        ml="5%"
        mr="5%"
      >
        <Box ml="60%">
          <Heading as="h3" size="lg" letterSpacing="-.1rem">
            Web Application Template
          </Heading>
          <Text color="grey" fontSize="lg">
            PHP, JavaScript, MySQL, HTML, CSS
          </Text>
        </Box>
        <Flex direction="row" mt="1rem" minW="100%" minH="100%">
          <Box minW="60%">
            <Text m="1rem">This is a test</Text>
          </Box>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
            <LaptopDisplay screenImage={HomePageRecording} />
          </ScrollAnimation>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        mt="5rem"
        minW="90%"
        minH="10rem"
        ml="5%"
        mr="5%"
      >
        <Heading as="h3" size="lg" letterSpacing="-.1rem">
          My Projects
        </Heading>
        <Text color="grey" fontSize="lg">
          React JS, TypeScript
        </Text>
        <Flex direction="row" mt="1rem" minW="100%" minH="100%">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
            <LaptopDisplay screenImage={HomePageRecording} />
          </ScrollAnimation>
          <Box minW="60%">
            <Text m="1rem">This is a test</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        mt="5rem"
        minW="90%"
        minH="10rem"
        ml="5%"
        mr="5%"
      >
        <Box ml="60%">
          <Heading as="h3" size="lg" letterSpacing="-.1rem">
            My Projects
          </Heading>
          <Text color="grey" fontSize="lg">
            React JS, TypeScript
          </Text>
        </Box>
        <Flex direction="row" mt="1rem" minW="100%" minH="100%">
          <Box minW="60%">
            <Text m="1rem">This is a test</Text>
          </Box>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
            <LaptopDisplay screenImage={HomePageRecording} />
          </ScrollAnimation>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LeftRightImageTextView;
