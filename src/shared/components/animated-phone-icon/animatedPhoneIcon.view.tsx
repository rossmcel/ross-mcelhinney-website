import React, { useState } from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CallIcon from "@material-ui/icons/Call";
import Tooltip from "@material-ui/core/Tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const AnimatedPhoneIconView: React.FC = () => {
  const value = "+353877145473";
  const [copied, setCopied] = useState(false);
  const [
    {
      backgroundColor1,
      backgroundColor2,
      backgroundColor3,
      backgroundColor4,
      backgroundColor5,
      backgroundColor6,
      backgroundColor7,
      marginTop,
      color,
    },
    set,
  ] = useSpring(() => ({
    backgroundColor1: "white",
    backgroundColor2: "white",
    backgroundColor3: "white",
    backgroundColor4: "white",
    backgroundColor5: "white",
    backgroundColor6: "white",
    backgroundColor7: "white",
    marginTop: "2rem",
    color: "white",
  }));
  return (
    <button
      onMouseEnter={() =>
        set({
          backgroundColor1: "lightblue",
          backgroundColor2: "lightblue",
          backgroundColor3: "#77fc9d",
          backgroundColor4: "blue",
          backgroundColor5: "green",
          backgroundColor6: "black",
          backgroundColor7: "grey",
          marginTop: "0rem",
          color: "black",
        })
      }
      onMouseLeave={() =>
        set({
          backgroundColor1: "white",
          backgroundColor2: "white",
          backgroundColor3: "white",
          backgroundColor4: "white",
          backgroundColor5: "white",
          backgroundColor6: "white",
          backgroundColor7: "white",
          marginTop: "2rem",
          color: "white",
        })
      }
    >
      <Flex
        direction="column"
        w="15rem"
        h="50rem"
        position="absolute"
        mt="-13rem"
      >
        <animated.div
          style={{
            marginTop,
            color,
            width: "15rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "-8rem",
            height: "13rem",
          }}
        >
          <Heading fontSize="1.8rem">
            +353 87 714 5473
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
              href="tel:+353877145473"
              color="grey"
              style={{ marginLeft: "0.5rem" }}
            >
              <Tooltip title="Call Me">
                <CallIcon />
              </Tooltip>
            </a>
          </Heading>
        </animated.div>
        <animated.div
          style={{
            marginTop,
            width: "7.1rem",
            height: "13rem",
            marginLeft: "auto",
            marginRight: "auto",
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
                backgroundColor: backgroundColor6,
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
                backgroundColor: backgroundColor6,
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
                backgroundColor: backgroundColor4,
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
            <animated.div
              style={{
                backgroundColor: backgroundColor6,
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
                backgroundColor: backgroundColor1,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor7,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
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
            <animated.div
              style={{
                backgroundColor: backgroundColor7,
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
                backgroundColor: backgroundColor4,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor5,
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
            <animated.div
              style={{
                backgroundColor: backgroundColor2,
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
                backgroundColor: backgroundColor4,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor4,
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
            <animated.div
              style={{
                backgroundColor: backgroundColor6,
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
                backgroundColor: backgroundColor7,
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
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor6,
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
            <animated.div
              style={{
                backgroundColor: backgroundColor3,
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
                backgroundColor: backgroundColor6,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor5,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
                marginRight: "4%",
              }}
            ></animated.div>
            <animated.div
              style={{
                backgroundColor: backgroundColor7,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
              }}
            ></animated.div>
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
            <animated.div
              style={{
                backgroundColor: backgroundColor6,
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
                backgroundColor: backgroundColor7,
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
                backgroundColor: backgroundColor4,
                height: "1.2rem",
                width: "22%",
                border: "0.1em solid rgba(168, 168, 168, .2)",
                borderRadius: "0.3rem",
              }}
            ></animated.div>
          </Flex>
        </animated.div>
      </Flex>
    </button>
  );
};

export default AnimatedPhoneIconView;
