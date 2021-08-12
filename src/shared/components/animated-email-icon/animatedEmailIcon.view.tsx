import React, { useState } from "react";
import { Box, Center, Heading, Flex } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const AnimatedEmailIconView: React.FC = () => {
  const value = "rossmcelhinney123@gmail.com";
  const [copied, setCopied] = useState(false);

  const [{ backgroundColor, marginTop, color }, set] = useSpring(() => ({
    backgroundColor: "white",
    marginTop: "14rem",
    color: "white",
  }));
  return (
    <button
      onMouseEnter={() =>
        set({
          backgroundColor: "#90f5cf",
          marginTop: "9rem",
          color: "black",
        })
      }
      onMouseLeave={() =>
        set({
          backgroundColor: "white",
          marginTop: "14rem",
          color: "white",
        })
      }
    >
      <Flex direction="column" w="25rem" h="30rem" mt="-7rem">
        <animated.div
          style={{
            marginTop,
            color,
            width: "25rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "-9rem",
            height: "13rem",
            position: "relative",
          }}
        >
          <Heading fontSize="1.5rem">
            rossmcelhinney123@gmail.com
            <br></br>
            {copied ? (
              <animated.span style={{ color, fontSize: "1rem" }}>
                Copied.
              </animated.span>
            ) : null}
            <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
              <button>
                <Tooltip title="Copy to Clipboard">
                  <FileCopyOutlinedIcon />
                </Tooltip>
              </button>
            </CopyToClipboard>
            <a
              href="mailto:rossmcelhinney123@gmail.com"
              color="grey"
              style={{ marginLeft: "0.5rem" }}
            >
              <Tooltip title="Email Me">
                <EmailIcon />
              </Tooltip>
            </a>
          </Heading>
        </animated.div>
        <Flex
          direction="column"
          minW="10rem"
          maxW="10rem"
          minH="20rem"
          maxH="20rem"
          ml="auto"
          mr="auto"
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
                border="2px black solid"
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
                  border: "0.1em lightgrey solid",
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
            border="2px black solid"
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
              border="2px black solid"
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
              borderTop="2px black solid"
              borderRight="2px black solid"
              borderLeft="2px black solid"
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
      </Flex>
    </button>
  );
};

export default AnimatedEmailIconView;
