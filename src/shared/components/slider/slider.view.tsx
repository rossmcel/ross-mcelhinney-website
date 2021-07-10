//
import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const SliderView: React.FC = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={5}
      totalSlides={3}
      orientation="horizontal"
      isPlaying={true}
    >
      <Center>
        <Flex direction="row" minH="15rem">
          <Box mr="5rem" mt="auto" mb="auto">
            <ButtonBack>Back</ButtonBack>
          </Box>
          <Slider>
            <Box
              minW="50rem"
              minH="15rem"
              pt="1rem"
              textAlign="center"
              bgColor="lightgrey"
            >
              <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
            </Box>
          </Slider>
          <Box ml="5rem" mt="auto" mb="auto">
            <ButtonNext>Next</ButtonNext>
          </Box>
        </Flex>
      </Center>
    </CarouselProvider>
  );
};

export default SliderView;
