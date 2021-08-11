import React, { useState } from "react";
import { Box, Center, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { LeftRightImageText } from "../../shared/components/left-right-image-text";
import AppsIcon from "@material-ui/icons/Apps";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Tooltip from "@material-ui/core/Tooltip";
import ScrollAnimation from "react-animate-on-scroll";
import HomePageRecording from "../../homePageRecordingMid.gif";
import { LaptopDisplay } from "../../shared/components/device-displays/laptop-display";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { SearchDisplay } from "../../shared/components/search-display";

interface ProjectsViewProps {
  projectData: any;
}
export const ProjectsView: React.FC<ProjectsViewProps> = ({ projectData }) => {
  const handleChangeAll = () => {
    setViewDefaultToggled(false);
    setViewAllToggled(true);
  };
  const handleChangeDefault = () => {
    setViewDefaultToggled(true);
    setViewAllToggled(false);
  };
  const [toggleViewDefault, setViewDefaultToggled] = useState(true);
  const [toggleViewAll, setViewAllToggled] = useState(false);
  const codeString = `
  import { render, screen } from '@testing-library/react';
  import App from './App';

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  `;

  return (
    <Box overflow="hidden" minH="80rem">
      <Center
        mt={{ base: "1.5rem", md: "5rem" }}
        mb={{ base: "1.5rem", md: "2rem" }}
      >
        <Heading as="h3" size="xl" letterSpacing="-.1rem">
          My Projects
        </Heading>
      </Center>
      <Center>
        <Flex direction="column" maxW="40%">
          <Text fontSize="lg" textAlign="center" mb="0.7rem">
            Here you can see projects that I have created
          </Text>
          <Text fontSize="lg" textAlign="justify">
            My aim with these projects is to both improve and expand my
            programming skills & to provide solutions to interesting problems I
            have come across in the world
          </Text>
        </Flex>
      </Center>
      <Flex direction="column" ml="70%" mt="3rem" mb="3rem">
        <Center mb="0.3rem">
          <Text fontWeight="bold">Layout Type</Text>
        </Center>
        <Center>
          <button
            style={{ marginRight: "0.5rem" }}
            onClick={() => handleChangeDefault()}
          >
            <Tooltip title="Default">
              <CheckBoxOutlineBlankIcon />
            </Tooltip>
          </button>
          <button onClick={() => handleChangeAll()}>
            <Tooltip title="Show All">
              <AppsIcon />
            </Tooltip>
          </button>
        </Center>
      </Flex>

      {toggleViewAll ? (
        <Box>
          <LeftRightImageText
            heading={projectData.projects[0].projectHeading}
            subheading={projectData.projects[0].projectSubHeading}
            nonTextContent={projectData.projects[0].nonTextContent}
            leftAligned={projectData.projects[0].leftAligned}
          >
            {projectData.projects[0].textContent}
          </LeftRightImageText>
          <LeftRightImageText
            heading={projectData.projects[1].projectHeading}
            subheading={projectData.projects[1].projectSubHeading}
            nonTextContent={projectData.projects[1].nonTextContent}
            leftAligned={projectData.projects[1].leftAligned}
          >
            {projectData.projects[1].textContent}
          </LeftRightImageText>
        </Box>
      ) : (
        <Box minW="100%" minH="40rem" maxH="40rem">
          <SearchDisplay originalComponentTags={projectData.projects}>
            <LeftRightImageText
              heading={projectData.projects[0].projectHeading}
              subheading={projectData.projects[0].projectSubHeading}
              nonTextContent={projectData.projects[0].nonTextContent}
              leftAligned={true}
            >
              {projectData.projects[0].textContent}
            </LeftRightImageText>
            <LeftRightImageText
              heading={projectData.projects[1].projectHeading}
              subheading={projectData.projects[1].projectSubHeading}
              nonTextContent={projectData.projects[1].nonTextContent}
              leftAligned={true}
            >
              {projectData.projects[1].textContent}
            </LeftRightImageText>
          </SearchDisplay>
        </Box>
      )}
    </Box>
  );
};

export default ProjectsView;
