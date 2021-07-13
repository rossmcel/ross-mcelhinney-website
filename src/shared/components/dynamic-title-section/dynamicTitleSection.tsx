import React from "react";
import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
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
      <Box>
        <Flex
          mt="5rem"
          minW="10rem"
          maxW="10rem"
          minH="10rem"
          maxH="10rem"
          ml="2rem"
          direction="column"
          overflow="hidden"
        >
          <Flex direction="row">
            <Box minW="10rem" maxW="10rem" minH="4rem" maxH="4rem" z-index="-1">
              <svg height="140" width="300">
                <polygon
                  points="80,0 0,64 160,64"
                  fill="none"
                  stroke="purple"
                  stroke-width="1"
                />
              </svg>
            </Box>
          </Flex>
          <Box
            minW="100%"
            maxW="100%"
            minH="6rem"
            maxH="6rem"
            border="1px solid grey"
            z-index="-1"
          >
            <Box>
              <svg height="176" width="300" z-index="2">
                <rect
                  width="120"
                  height="100"
                  fill="none"
                  stroke-width="1"
                  stroke="grey"
                  x="20"
                />
                <polygon
                  points="0,0 0,94 160,94"
                  fill="#56caf5"
                  stroke="purple"
                  stroke-width="1"
                  z-index="2"
                />
                <polygon
                  points="160,0 0,94 160,94"
                  fill="#56caf5"
                  stroke="purple"
                  stroke-width="1"
                  z-index="2"
                />
              </svg>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Flex
        direction="column"
        minW="10rem"
        maxW="10rem"
        minH="20rem"
        maxH="20rem"
        ml="5rem"
        mt="5rem"
        overflow="hidden"
      >
        <Box
          minW="10rem"
          maxW="10rem"
          minH="10rem"
          maxH="10rem"
          overflow="hidden"
          display="grid"
        >
          <Center minW="10rem" maxW="10rem" minH="10rem" maxH="10rem">
            {/** Diagonal of Square =  √2 × length of the side
             * So: If when sides of normal square = 10 the diagonal section == √2 x 10 == 14.1421356237, then
             * sides of rotated square == √2 x ? = 10 == √2 x 7.07106781187 = 10 == 7.07106781187
             */}
            <Box
              minW="7.1rem"
              maxW="7.1rem"
              minH="7.1rem"
              maxH="7.1rem"
              mt="10rem"
              border="1px solid black"
              transform="rotate(-135deg)"
              gridColumn="1"
              gridRow="1"
              position="relative"
              z-index="-3"
            ></Box>
            <Box
              minW="8rem"
              maxW="8rem"
              minH="8rem"
              maxH="8rem"
              mt="15rem"
              border="1px solid black"
              gridColumn="1"
              gridRow="1"
              position="absolute"
              z-index="-1"
              bgColor="white"
            ></Box>
          </Center>
        </Box>
        <Box
          minW="10rem"
          maxW="10rem"
          minH="6.5rem"
          maxH="6.5rem"
          mb="3.5rem"
          border="1px solid black"
          display="grid"
          overflow="hidden"
          z-index="-2"
        >
          <Box
            minW="12rem"
            maxW="12rem"
            minH="12rem"
            maxH="12rem"
            ml="2.2rem"
            mt="2.2rem"
            border="1px solid black"
            transform="rotate(-123deg)"
            gridColumn="1"
            gridRow="1"
            z-index="2"
            bgColor="white"
          ></Box>
          <Box
            minW="6rem"
            maxW="6rem"
            minH="6rem"
            maxH="6rem"
            borderBottom="hidden"
            borderTop="1px solid black"
            borderRight="1px solid black"
            borderLeft="1px solid black"
            transform="rotate(-57deg)"
            ml="-2.1rem"
            mt="1.05rem"
            gridColumn="1"
            gridRow="1"
            z-index="1"
            bgColor="white"
          ></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DynamicTitleSection;
