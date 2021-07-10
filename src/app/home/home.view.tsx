import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { ImageText } from "../../shared/components/image-text";
import { HorizontalList } from "../../shared/components/horizontal-list";
import { Card } from "../../shared/components/card";
import { HorizontalListBordered } from "../../shared/components/horizontal-list-bordered";
import { ImageCaption } from "../../shared/components/image-caption";
import { VerticalList } from "../../shared/components/vertical-list";
import { EventCard } from "../../shared/components/event-card";
import { Slider } from "../../shared/components/slider";
import { SliderCard } from "../../shared/components/slider-card";

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
      </Box>

      <Box
        display={{ base: "block", md: "initial" }}
        w="95%"
        border={{ base: "1px solid lightgrey", md: "none" }}
        borderRadius="lg"
        marginX="2.5%"
      >
        <Center mt={{ base: "1.5rem", md: "5rem" }}>
          <Heading as="h3" size="lg" letterSpacing="-.1rem">
            Our Core Technologies
          </Heading>
        </Center>
        <HorizontalListBordered>
          <ImageCaption
            image="https://i.ibb.co/N12WrGM/mobile-Dev.png"
            title="Mobile Development"
          />
          <ImageCaption
            image="https://i.ibb.co/6NnW5LZ/webDev.png"
            title="Web Development"
          />
          <ImageCaption
            image="https://i.ibb.co/C5dSPPQ/machine-Learning.png"
            title="Machine Learning"
          />
        </HorizontalListBordered>
      </Box>

      <Box
        display={{ base: "block", md: "initial" }}
        w="95%"
        border={{ base: "1px solid lightgrey", md: "none" }}
        borderRadius="lg"
        marginX="2.5%"
      >
        <Center mt={{ base: "1.5rem", md: "5rem" }}>
          <Heading as="h3" size="lg" letterSpacing="-.1rem">
            Upcoming Events
          </Heading>
        </Center>
        <VerticalList>
          <EventCard
            title="Tenserflow Workshop"
            date="3/3/2021"
            text="Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiubaseod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            buttonLink="https://discord.com"
            buttonText="Register Now"
            imagesTitle="Tech"
            image1="https://i.ibb.co/8NjQkG5/tenserflow.png"
            image2="https://i.ibb.co/MDMnL5f/python.png"
            image3="https://i.ibb.co/8NjQkG5/tenserflow.png"
            image4="https://i.ibb.co/MDMnL5f/python.png"
          />
          <EventCard
            title="Web Dev Workshop"
            date="15/3/2021"
            text="Lorem ipsum......"
            buttonLink="#whatever"
            buttonText="Register Now"
            imagesTitle="Tech"
            image1="https://i.ibb.co/7YyXpYV/javasript.png"
            image2="https://i.ibb.co/m9M2ZK2/react.png"
          />
          <EventCard
            title="Flutter Workshop"
            date="20/3/2021"
            text="Lorem ipsum......"
            buttonLink="#whatever"
            buttonText="Register Now"
            imagesTitle="Tech"
            image1="https://i.ibb.co/CM22HLR/flutter.png"
            image2="https://i.ibb.co/Dz90jhx/flutter2.png"
          />
        </VerticalList>
      </Box>
    </Box>
  );
};

export default Home;
