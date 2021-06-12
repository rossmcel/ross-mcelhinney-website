import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { VerticalList } from "../../shared/components/vertical-list";
import { EventCard } from "../../shared/components/event-card";

export const ProjectsView: React.FC = () => {
  return (
    <Box overflow="hidden">
      <Box
        display={{ base: "block", md: "initial" }}
        w="95%"
        border={{ base: "1px solid lightgrey", md: "none" }}
        borderRadius="lg"
        marginX="2.5%"
      >
        <Center mt={{ base: "1.5rem", md: "5rem" }}>
          <Heading as="h3" size="lg" letterSpacing="-.1rem">
            My Projects
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
            buttonText="GitHub Repo"
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
            buttonText="GitHub Repo"
            imagesTitle="Tech"
            image1="https://i.ibb.co/7YyXpYV/javasript.png"
            image2="https://i.ibb.co/m9M2ZK2/react.png"
          />
          <EventCard
            title="Flutter Workshop"
            date="20/3/2021"
            text="Lorem ipsum......"
            buttonLink="#whatever"
            buttonText="GitHub Repo"
            imagesTitle="Tech"
            image1="https://i.ibb.co/CM22HLR/flutter.png"
            image2="https://i.ibb.co/Dz90jhx/flutter2.png"
          />
        </VerticalList>
      </Box>
    </Box>
  );
};

export default ProjectsView;
