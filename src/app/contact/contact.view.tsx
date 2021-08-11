import React from "react";
import { Box, Flex, Heading, Center, Image } from "@chakra-ui/react";
import { AnimatedEmailIcon } from "../../shared/components/animated-email-icon";
import { AnimatedPhoneIcon } from "../../shared/components/animated-phone-icon";
import { AnimatedLinkedinIcon } from "../../shared/components/animated-linkedin-icon";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import PhoneInTalkTwoToneIcon from "@material-ui/icons/PhoneInTalkTwoTone";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import LinkedInIcon from "../../linkedin-icon.png";
import Tooltip from "@material-ui/core/Tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const ContactView: React.FC = () => {
  return (
    <Box overflow="hidden" minH={{ base: "40rem", lg: "50rem" }} mt="2rem">
      <Heading size="xl" mb="3rem" textAlign="center">
        Contact Me
      </Heading>
      <Flex
        direction="row"
        mt="5rem"
        ml="auto"
        mr="auto"
        display={{ base: "none", lg: "grid" }}
        maxWidth="70rem"
      >
        <Flex
          mr="-2rem"
          gridRow="1"
          gridColumn="1"
          ml={{ base: "-2rem", xl: "-7rem" }}
        >
          <AnimatedEmailIcon />
        </Flex>
        <Flex
          ml={{ base: "-10rem", xl: "initial" }}
          mr={{ base: "3rem", xl: "13rem" }}
          gridRow="1"
          gridColumn="2"
        >
          <AnimatedPhoneIcon />
        </Flex>
        <Flex
          ml={{ base: "-10rem", xl: "initial" }}
          mr="6rem"
          gridRow="1"
          gridColumn="3"
        >
          <AnimatedLinkedinIcon />
        </Flex>
      </Flex>

      <Center display={{ base: "block", lg: "none" }}>
        <Flex direction="column">
          <Center>
            <DraftsTwoToneIcon fontSize="large" />
          </Center>
          <Center mt="1rem">
            <Flex direction="row">
              <Heading fontSize="lg" mr="1rem">
                rossmcelhinney123@gmail.com
              </Heading>
              <CopyToClipboard text="rossmcelhinney123@gmail.com">
                <button>
                  <Tooltip title="Copy to Clipboard">
                    <FileCopyOutlinedIcon />
                  </Tooltip>
                </button>
              </CopyToClipboard>
              <a href="mailto:rossmcelhinney123@gmail.com" color="grey">
                <Tooltip title="Email Me">
                  <EmailIcon />
                </Tooltip>
              </a>
            </Flex>
          </Center>

          <Center mt="3rem">
            <PhoneInTalkTwoToneIcon fontSize="large" />
          </Center>
          <Center mt="1rem">
            <Flex direction="row">
              <Heading fontSize="lg" mr="1rem">
                +353877145473
              </Heading>
              <CopyToClipboard text={"+353877145473"}>
                <button>
                  <Tooltip title="Copy to Clipboard">
                    <FileCopyOutlinedIcon />
                  </Tooltip>
                </button>
              </CopyToClipboard>
              <a href="tel:+353877145473" color="grey">
                <Tooltip title="Call Me">
                  <CallIcon />
                </Tooltip>
              </a>
            </Flex>
          </Center>

          <Center mt="3rem">
            <Box maxW="56px">
              <Image src={LinkedInIcon} />
            </Box>
          </Center>
          <Center mt="1rem">
            <Flex direction="row">
              <Heading fontSize="lg" mr="1rem">
                LinkedIn
              </Heading>
              <a
                href="https://www.linkedin.com/in/ross-mcelhinney"
                color="grey"
              >
                <Tooltip title="Visit My LinkedIn Profile">
                  <ExitToAppOutlinedIcon />
                </Tooltip>
              </a>
            </Flex>
          </Center>
        </Flex>
      </Center>
    </Box>
  );
};

export default ContactView;
