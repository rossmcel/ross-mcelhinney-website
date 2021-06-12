// Component that renders an image on the left and text (header and body) on the right.

import React from "react";
import { Heading, Flex, Image, Text, Center, Button } from "@chakra-ui/react";

interface ImageTextViewProps {
  image: string;
  title: string;
  titleImage: string;
  text1: string;
  text2: string;
  buttonLink: string;
  buttonText: string;
  button2Link: string;
  button2Text: string;
  button3Link: string;
  button3Text: string;
}

export const ImageTextView: React.FC<ImageTextViewProps> = ({
  image,
  title,
  text1,
  text2,
  titleImage,
  buttonLink,
  buttonText,
  button2Link,
  button2Text,
  button3Link,
  button3Text,
}) => {
  return (
    <Flex bg="transparent" color="black" maxW="60rem">
      <Flex minW="30rem" maxW="50%" display={{ base: "none", md: "block" }}>
        <Image src={image} ml="45%" mt="15%" borderRadius="30%" />
      </Flex>
      <Flex
        direction="column"
        mt="1rem"
        maxW={{ base: "none", md: "50%" }}
        textAlign={{ base: "justify", md: "left" }}
        paddingX={{ base: "2.5rem", sm: "4rem", md: "none" }}
      >
        <Flex
          direction="row"
          mb="1.5rem"
          alignSelf={{ base: "center", md: "left" }}
        >
          <Heading as="h1" size="lg" letterSpacing="-.1rem">
            {title}
          </Heading>
        </Flex>
        {/* Max amount of 2 blocks of text */}
        <Text fontSize="lg" textAlign="justify">
          {text1}
        </Text>
        <Text fontSize="lg" mt="1rem" textAlign="left">
          {text2}
        </Text>
        <Center>
          <Flex direction="row">
            <a href={buttonLink}>
              <Button mt="1.8rem" _hover={{ bg: "lightblue" }} mr="1rem">
                {buttonText}
              </Button>
            </a>
            <a href={button2Link}>
              <Button mt="1.8rem" _hover={{ bg: "lightblue" }}>
                {button2Text}
              </Button>
            </a>
            <a href={button3Link}>
              <Button mt="1.8rem" _hover={{ bg: "lightblue" }} ml="1rem">
                {button3Text}
              </Button>
            </a>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
};

export default ImageTextView;
