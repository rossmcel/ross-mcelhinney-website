import React from "react";
import { Box, Center, Heading, Text, Flex, background } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";

export const AnimatedEmailIconView: React.FC = () => {
  const [{ y, backgroundColor, marginTop }, set] = useSpring(() => ({
    y: 100,
    backgroundColor: "white",
    marginTop: "14rem",
  }));
  return (
    <button
      onMouseEnter={() =>
        set({ y: 0, backgroundColor: "#90f5cf", marginTop: "9rem" })
      }
      onMouseLeave={() =>
        set({ y: 100, backgroundColor: "white", marginTop: "14rem" })
      }
    >
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
              border="3px solid rgba(144, 245, 207, .7)"
              transform="rotate(-135deg)"
              gridColumn="1"
              gridRow="1"
              position="relative"
              z-index="-3"
            ></Box>

            <animated.div
              style={{
                marginTop,
                backgroundColor,
                width: "8rem",
                height: "8rem",
                border: "3px solid rgba(144, 245, 207, .7)",
                gridColumn: 1,
                gridRow: 1,
                position: "absolute",
                zIndex: 0,
              }}
            ></animated.div>
          </Center>
        </Box>
        <Box
          minW="10rem"
          maxW="10rem"
          minH="6.5rem"
          maxH="6.5rem"
          mb="3.5rem"
          border="3px solid rgba(144, 245, 207, .7)"
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
            border="3px solid rgba(144, 245, 207, .7)"
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
            borderTop="3px solid rgba(144, 245, 207, .7)"
            borderRight="3px solid rgba(144, 245, 207, .7)"
            borderLeft="3px solid rgba(144, 245, 207, .7)"
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
    </button>
  );
};

export default AnimatedEmailIconView;
