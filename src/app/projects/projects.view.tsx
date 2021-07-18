import React, { useState } from "react";
import { Box, Center, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { LeftRightImageText } from "../../shared/components/left-right-image-text";
import AppsIcon from "@material-ui/icons/Apps";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Tooltip from "@material-ui/core/Tooltip";
import HomePageRecording from "../../homePageRecordingMid.gif";
import Laptop from "../../laptop2.jpg";

export const ProjectsView: React.FC = () => {
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
    <Box overflow="hidden" minH="130rem">
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
          <LeftRightImageText />
        </Box>
      ) : (
        <Heading>Not toggled</Heading>
      )}

      <Box w="20%" h="10%">
        <Image src={HomePageRecording} />
      </Box>
      <Box minW="50%" maxW="50%" display="grid" border="1px black solid">
        <Box w="100%" h="100%" gridColumn="1" gridRow="1">
          <Image src={Laptop} />
        </Box>
        <Box
          w="53.5%"
          ml="23.7%"
          mr="21.5%"
          mt="10%"
          h="60%"
          gridColumn="1"
          gridRow="1"
        >
          <Box w="100%" h="100%" overflow="hidden">
            <Image src={HomePageRecording} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsView;
