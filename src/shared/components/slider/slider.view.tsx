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
        <Flex
          direction="row"
          minH={{ base: "28rem", md: "25rem", lg: "17rem" }}
        >
          <Box
            mr={{ base: "0.3rem", sm: "2rem", md: "5rem" }}
            mt="auto"
            mb="auto"
          >
            <ButtonBack>
              <ArrowBackIcon />
            </ButtonBack>
          </Box>
          <Slider>
            <Box
              minW={{ base: "20rem", sm: "25rem", md: "30rem", lg: "45rem" }}
              mt="auto"
              mb="auto"
              pt="1rem"
              textAlign="center"
            >
              {children}
            </Box>
          </Slider>
          <Box
            ml={{ base: "0.5rem", sm: "2rem", md: "5rem" }}
            mt="auto"
            mb="auto"
          >
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
