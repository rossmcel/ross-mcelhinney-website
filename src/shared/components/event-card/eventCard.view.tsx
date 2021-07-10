// Component that renders x number of sections aligned vertically

import React from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";

interface EventCardViewProps {
  title: string;
  date: string;
  text: string;
  buttonLink: string;
  buttonText: string;
  imagesTitle: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  textWidth: number;
  headingSize: string;
  dateMargin: number;
}

export const EventCardView: React.FC<EventCardViewProps> = ({
  title,
  date,
  text,
  buttonLink,
  buttonText,
  imagesTitle,
  image1 = undefined,
  image2 = undefined,
  image3 = undefined,
  image4 = undefined,
  textWidth,
  headingSize,
  dateMargin,
}) => {
  return (
    <Flex
      direction="row"
      mt={{ base: "2rem", sm: "2rem" }}
      mb={{ base: "2rem", sm: "2rem" }}
      pb={{ base: "1rem", sm: "none" }}
      borderBottom={{ base: "1px lightgrey solid", sm: "none" }}
    >
      <Flex direction="column" minW="70%" mr="5%">
        <Flex direction="row" mb="1rem">
          <Heading as="h5" size={headingSize} letterSpacing="-.1rem" mr="1rem">
            {title}
          </Heading>
          <Text size="md" mt={`${dateMargin}rem`}>
            {date}
          </Text>
        </Flex>
        <Flex direction="column" maxW={`${textWidth}rem`}>
          <Text mb="1rem">{text}</Text>
          <a href={buttonLink}>
            <Button
              bg="blue"
              color="white"
              w={{ base: "80%", sm: "40%" }}
              _hover={{ bg: "#3f47c4" }}
            >
              {buttonText}
            </Button>
          </a>
        </Flex>
      </Flex>

      <Flex direction="column" ml="auto">
        <Heading as="h6" size="md" letterSpacing="-.1rem" alignSelf="right">
          {imagesTitle}
        </Heading>
        <Flex direction="row" mt={{ base: "2.5rem", sm: "1rem" }}>
          <Center>
            <Box boxSize={{ base: "48px", sm: "64px" }}>
              <Image src={image1} />
            </Box>
            <Box boxSize={{ base: "48px", sm: "64px" }}>
              <Image src={image2} />
            </Box>
          </Center>
        </Flex>
        <Flex direction="row">
          <Center>
            <Box boxSize={{ base: "48px", sm: "64px" }}>
              <Image src={image3} />
            </Box>
            <Box boxSize={{ base: "48px", sm: "64px" }}>
              <Image src={image4} />
            </Box>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventCardView;
