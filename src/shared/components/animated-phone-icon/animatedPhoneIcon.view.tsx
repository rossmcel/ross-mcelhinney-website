import React from "react";
import { Box, Center, Heading, Text, Flex, background } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";

export const AnimatedPhoneIconView: React.FC = () => {
  const [
    { y, backgroundColor1, backgroundColor2, backgroundColor3, marginTop },
    set,
  ] = useSpring(() => ({
    y: 100,
    backgroundColor1: "white",
    backgroundColor2: "white",
    backgroundColor3: "white",
    marginTop: "7rem",
  }));
  return (
    <button
      onMouseEnter={() =>
        set({
          y: 0,
          backgroundColor1: "#90f5cf",
          backgroundColor2: "#f0bde4",
          backgroundColor3: "#77fc9d",
          marginTop: "0rem",
        })
      }
      onMouseLeave={() =>
        set({
          y: 100,
          backgroundColor1: "white",
          backgroundColor2: "white",
          backgroundColor3: "white",
          marginTop: "7rem",
        })
      }
    >
      <Box w="20rem" h="20rem" position="absolute">
        <animated.div
          style={{
            marginTop,
            width: "7.1rem",
            height: "13rem",
            marginLeft: "5rem",
            marginRight: "5rem",
            overflow: "hidden",
            borderTop: "6px solid black",
            borderBottom: "5px solid black",
            borderRight: "3px solid black",
            borderLeft: "3px solid black",
            borderRadius: "1rem",
          }}
        >
          <Flex
            mt="0.5rem"
            direction="row"
            minH="1.2rem"
            minW="85%"
            maxW="85%"
            ml="auto"
            mr="auto"
          >
            <animated.div
              style={{
                backgroundColor: backgroundColor1,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginLeft: "0.2%",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor2,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor3,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor1,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
              }}
            ></animated.div>
          </Flex>
          <Flex
            mt="0.5rem"
            direction="row"
            minH="1.2rem"
            minW="85%"
            maxW="85%"
            ml="auto"
            mr="auto"
          >
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              ml="0.2%"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
            ></Flex>
          </Flex>
          <Flex
            mt="0.5rem"
            direction="row"
            minH="1.2rem"
            minW="85%"
            maxW="85%"
            ml="auto"
            mr="auto"
          >
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              ml="0.2%"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
            ></Flex>
          </Flex>
          <Flex
            mt="0.5rem"
            direction="row"
            minH="1.2rem"
            minW="85%"
            maxW="85%"
            ml="auto"
            mr="auto"
          >
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              ml="0.2%"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
            ></Flex>
          </Flex>
          <Flex
            mt="0.5rem"
            direction="row"
            minH="1.2rem"
            minW="85%"
            maxW="85%"
            ml="auto"
            mr="auto"
          >
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              ml="0.2%"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
            ></Flex>
          </Flex>
          <Flex
            mt="0.5rem"
            direction="row"
            minH="1.2rem"
            minW="85%"
            maxW="85%"
            ml="auto"
            mr="auto"
          >
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              ml="0.2%"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              minW="22%"
              maxW="22%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
            ></Flex>
          </Flex>
          <Flex
            mt="0.4rem"
            direction="row"
            minH="1.6rem"
            minW="96%"
            maxW="96%"
            ml="auto"
            mr="auto"
            border="0.1em solid rgba(168, 168, 168, .2)"
            borderRadius="0.6rem"
            bgColor="#f5f5f5"
          >
            <Flex
              minH="1.2rem"
              maxH="1.2rem"
              mt="auto"
              mb="auto"
              minW="20.5%"
              maxW="20.5%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              ml="3%"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              maxH="1.2rem"
              mt="auto"
              mb="auto"
              minW="20.5%"
              maxW="20.5%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              maxH="1.2rem"
              mt="auto"
              mb="auto"
              minW="20.5%"
              maxW="20.5%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="4%"
            ></Flex>
            <Flex
              minH="1.2rem"
              maxH="1.2rem"
              mt="auto"
              mb="auto"
              minW="20.5%"
              maxW="20.5%"
              border="0.1em solid rgba(168, 168, 168, .2)"
              borderRadius="0.3rem"
              mr="3%"
            ></Flex>
          </Flex>
        </animated.div>
      </Box>
    </button>
  );
};

export default AnimatedPhoneIconView;
