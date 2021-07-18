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
          <Box minW="60%" maxW="60%">
            <Text m="1rem">
              A clean, functional, and responsive web application created with
              modern technologies such as React and TypeScript.
            </Text>
            <Text m="1rem">
              My aim with this project is to both provide an easily accessible
              tool for displaying helpful information about me, as well as to
              showcase my JavaScript/TypeScript development skills.
            </Text>
            <Text m="1rem">
              Throughout every step of this project I continuously pushed the
              limit of what I could do through applying creative solutions to
              challenging problems. Such a problem was the creation of the
              interactive email, phone, and LinkedIn Icons seen on the{" "}
              <a href="/contact" style={{ color: "blue" }}>
                Contact Me
              </a>{" "}
              page. By creating these icons, I discovered a lot about animation
              in React as well as the extensive amount of helpful npm packages.
            </Text>
            <Text m="1rem">
              Although this was not a group project, I developed with
              collaboration in mind through the use of readable and structured
              code, effective seperation of components, strong documentation and
              my use of Git.
            </Text>
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
          <Box minW="60%" maxW="60%">
            <Text m="1rem">Web app</Text>
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
          <Box minW="60%" maxW="60%">
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
          <Box minW="60%" maxW="60%">
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
