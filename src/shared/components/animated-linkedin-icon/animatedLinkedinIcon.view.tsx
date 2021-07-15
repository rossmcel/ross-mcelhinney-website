import React from "react";
import { Box, Center, Heading, Text, Flex, background } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";

export const AnimatedLinkedinIconView: React.FC = () => {
  const [{ y, marginTop, color }, set] = useSpring(() => ({
    y: 100,
    marginTop: "2rem",
    color: "white",
  }));
  return (
    <button
      onMouseEnter={() => set({ y: 0, marginTop: "0rem", color: "black" })}
      onMouseLeave={() => set({ y: 100, marginTop: "2rem", color: "white" })}
    >
      <Flex
        direction="column"
        w="25rem"
        h="20rem"
        position="absolute"
        mt="-8rem"
      >
        <animated.div
          style={{
            marginTop,
            color,
            width: "25rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "-9rem",
            height: "13rem",
          }}
        >
          <Heading fontSize="1.8rem">ross-mcelhinney</Heading>
        </animated.div>
        <animated.div
          style={{
            marginTop,
            backgroundColor: "blue",
            width: "8rem",
            height: "8rem",
            borderRadius: "1rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Heading color="white" fontSize="7rem">
            in
          </Heading>
        </animated.div>
      </Flex>
    </button>
  );
};

export default AnimatedLinkedinIconView;
