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
import { Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface SliderCardViewProps {
  index: number;
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
}

export const SliderCardView: React.FC<SliderCardViewProps> = ({
  index,
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
}) => {
  return (
    <Slide index={index}>
      <Flex
        direction="row"
        ml="1rem"
        mr="1rem"
        mt={{ base: "1rem", sm: "1rem" }}
        mb={{ base: "1rem", sm: "1rem" }}
        py="1rem"
        px="2rem"
        border="1px lightgrey solid"
        borderRadius="1rem"
      >
        <Flex direction="column" minW="70%" ml="0%" mr="5%" textAlign="left">
          <Flex direction="column" mb="1rem">
            <Heading as="h5" size="lg" letterSpacing="-.1rem" mr="1rem">
              {title}
            </Heading>
            <Text size="md">{date}</Text>
          </Flex>
          <Flex direction="column" maxW="30rem">
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

        <Flex direction="column" ml="auto" textAlign="left">
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
    </Slide>
  );
};

export default SliderCardView;
