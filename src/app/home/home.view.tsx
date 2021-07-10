import React from "react";
import { Box, Center, Heading, Button, Text } from "@chakra-ui/react";
import { ImageText } from "../../shared/components/image-text";
import { Slider } from "../../shared/components/slider";
import { SliderCard } from "../../shared/components/slider-card";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export const Home: React.FC = () => {
  return (
    <Box overflow="hidden">
      <ImageText
        image="https://i.ibb.co/zsy29Dw/linkedin-Profile.jpg"
        title="About Me"
        titleImage="blank.png"
        text1="Hello, my name is Ross McElhinney, welcome to my website!"
        text2="I am a 20 year old Computer Science Student at Technological University Dublin, graduating in 2023"
        buttonLink="mailto:rossmcelhinney123@gmail.com"
        buttonText="Contact Me"
        button2Link="https://github.com/rossmcel"
        button2Text="GitHub"
        button3Link="https://www.linkedin.com/in/ross-mcelhinney/"
        button3Text="LinkedIn"
      />

      <Box>
        <Center
          mt={{ base: "1.5rem", md: "5rem" }}
          mb={{ base: "1.5rem", md: "2rem" }}
        >
          <Heading as="h3" size="lg" letterSpacing="-.1rem">
            My Projects
          </Heading>
        </Center>
        <Slider totalSlides={3}>
          <SliderCard
            index={0}
            title="Web Dev Workshop"
            date="15/3/2021"
            text="Lorem ipsum......"
            buttonLink="#whatever"
            buttonText="See More"
            imagesTitle="Tech"
            image1="https://i.ibb.co/7YyXpYV/javasript.png"
            image2="https://i.ibb.co/m9M2ZK2/react.png"
          />
          <SliderCard
            index={1}
            title="Web Dev Workshop"
            date="15/3/2021"
            text="Lorem ipsum......"
            buttonLink="#whatever"
            buttonText="See More"
            imagesTitle="Tech"
            image1="https://i.ibb.co/7YyXpYV/javasript.png"
            image2="https://i.ibb.co/m9M2ZK2/react.png"
            image3="https://i.ibb.co/8NjQkG5/tenserflow.png"
            image4="https://i.ibb.co/MDMnL5f/python.png"
          />
          <SliderCard
            index={2}
            title="Web Dev Workshop"
            date="15/3/2021"
            text="Lorem ipsum......"
            buttonLink="#whatever"
            buttonText="See More"
            imagesTitle="Tech"
            image1="https://i.ibb.co/7YyXpYV/javasript.png"
            image2="https://i.ibb.co/m9M2ZK2/react.png"
          />
        </Slider>
        <Center
          mt={{ base: "0.5rem", md: "-1rem" }}
          mb={{ base: "0.5rem", md: "1rem" }}
        >
          <Button
            bg="lightgrey"
            color="black"
            w={{ base: "20%", sm: "10%" }}
            _hover={{ bg: "#3f47c4" }}
          >
            <Text mr="0.2rem">See All</Text> <ArrowRightAltIcon />
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Home;
