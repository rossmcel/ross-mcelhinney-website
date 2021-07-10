//
import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

interface SliderViewProps {
  totalSlides: number;
}

export const SliderView: React.FC<SliderViewProps> = ({
  children,
  totalSlides,
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={5}
      totalSlides={totalSlides}
      orientation="horizontal"
      isPlaying={true}
    >
      <Center>
        <Flex direction="row" minH="15rem">
          <Box mr="5rem" mt="auto" mb="auto">
            <ButtonBack>
              <ArrowBackIcon />
            </ButtonBack>
          </Box>
          <Slider>
            <Box minW="50rem" minH="18rem" pt="1rem" textAlign="center">
              {children}
            </Box>
          </Slider>
          <Box ml="5rem" mt="auto" mb="auto">
            <ButtonNext>
              <ArrowForwardIcon />
            </ButtonNext>
          </Box>
        </Flex>
      </Center>
    </CarouselProvider>
  );
};

export default SliderView;
