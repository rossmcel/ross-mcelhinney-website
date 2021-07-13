import React from "react";
import { Box, Center, Heading, Text, Flex, background } from "@chakra-ui/react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const DynamicTitleSection: React.FC = () => {
  return (
    <Box>
      <Box
        minH="30rem"
        minw="80%"
        maxW="80%"
        ml="10%"
        bgColor="lightpink"
        position="relative"
        zIndex="-3"
        overflow="hidden"
      >
        <Box
          position="absolute"
          ml="40%"
          mr="auto"
          mt="12%"
          minW="20%"
          minH="10rem"
          maxW="20%"
          maxH="10rem"
          border="2px solid white"
          borderRadius="2rem"
          pl="1rem"
        >
          <Box>
            <ScrollAnimation
              duration={2}
              animateIn="animate__fadeIn"
              initiallyVisible={false}
            >
              <Heading color="white" as="h3" size="2xl">
                email
              </Heading>
            </ScrollAnimation>
          </Box>
          <Box>
            <ScrollAnimation
              delay={2000}
              duration={2}
              animateIn="animate__fadeIn"
              initiallyVisible={false}
            >
              <Heading color="white" as="h3" size="2xl">
                linkedin
              </Heading>
            </ScrollAnimation>
          </Box>
          <Box>
            <ScrollAnimation
              delay={4000}
              duration={2}
              animateIn="animate__fadeIn"
              initiallyVisible={false}
            >
              <Heading color="white" as="h3" size="2xl">
                mobile
              </Heading>
            </ScrollAnimation>
          </Box>
        </Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="25rem"
          minW="25rem"
          maxH="25rem"
          maxW="25rem"
          bgColor="#3A75F7"
          ml="-6rem"
          mt="-8rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-2"
          borderRadius="100%"
          minH="100rem"
          minW="100rem"
          maxH="100rem"
          maxW="100rem"
          bgColor="#00784c"
          ml="-40rem"
          mt="7rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="100rem"
          minW="100rem"
          maxH="100rem"
          maxW="100rem"
          bgColor="#00784c"
          ml="60rem"
          mt="-30rem"
          border="1px solid darkgrey"
          opacity="0.7"
        ></Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="15rem"
          minW="15rem"
          maxH="15rem"
          maxW="15rem"
          bgColor="#1CE581"
          ml="25rem"
          mt="5rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="60rem"
          minW="60rem"
          maxH="60rem"
          maxW="60rem"
          bgColor="lightgreen"
          ml="40rem"
          mt="-55rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="10rem"
          minW="10rem"
          maxH="10rem"
          maxW="10rem"
          bgColor="#0019D4"
          ml="-1rem"
          mt="-2rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="25rem"
          minW="25rem"
          maxH="25rem"
          maxW="25rem"
          bgColor="#56caf5"
          ml="85rem"
          mt="5rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-2"
          borderRadius="100%"
          minH="95rem"
          minW="95rem"
          maxH="95rem"
          maxW="95rem"
          bgColor="#56caf5"
          ml="25rem"
          mt="-15rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="45rem"
          minW="45rem"
          maxH="45rem"
          maxW="45rem"
          bgColor="#4747d6"
          ml="40rem"
          mt="20rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          minH="45rem"
          minW="45rem"
          maxH="45rem"
          maxW="45rem"
          bgColor="#56caf5"
          ml="-2rem"
          mt="27rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
        <Box
          position="absolute"
          zIndex="-3"
          borderRadius="100%"
          minH="75rem"
          minW="75rem"
          maxH="75rem"
          maxW="75rem"
          bgColor="#05f09a"
          ml="-8rem"
          mt="-48rem"
          border="1px solid darkgrey"
          opacity="0.4"
        ></Box>
      </Box>
    </Box>
  );
};

export default DynamicTitleSection;
