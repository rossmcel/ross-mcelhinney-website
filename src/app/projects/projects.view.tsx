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

  const project1Content = (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
      <LaptopDisplay screenImage={HomePageRecording} />
    </ScrollAnimation>
  );

  const project2Content = (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
      <LaptopDisplay screenImage={HomePageRecording} />
    </ScrollAnimation>
  );

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
          <LeftRightImageText
            heading="Personal Website"
            subheading="React JS, TypeScript, JavaScript"
            nonTextContent={project1Content}
            leftAligned={true}
          >
            <Text m="1rem">
              A clean, functional, and responsive web application created with
              modern technologies such as React and TypeScript.
            </Text>
            <Text m="1rem">
              My aim with this project is to both provide an easily accessible
              tool for displaying helpful information about me, as well as to
              showcase my JavaScript/TypeScript development skills.
            </Text>
            <Text m="1rem">
              Throughout every step of this project I continuously pushed the
              limit of what I could do through applying creative solutions to
              challenging problems. Such a problem was the creation of the
              interactive email, phone, and LinkedIn Icons seen on the{" "}
              <a href="/contact" style={{ color: "blue" }}>
                Contact Me
              </a>{" "}
              page. By creating these icons, I discovered a lot about animation
              in React as well as about the extensive amount of helpful npm
              packages.
            </Text>
            <Text m="1rem">
              Although this was not a group project, I developed with
              collaboration in mind through the use of readable and structured
              code, effective seperation of components, strong documentation and
              my use of Git.
            </Text>
            <a href="https://github.com/rossmcel">
              <Button bgColor="blue" color="white" fontSize="sm" ml="1rem">
                See the GitHub Repo{" "}
                <ExitToAppIcon style={{ marginLeft: "0.5rem" }} />
              </Button>
            </a>
          </LeftRightImageText>
          <LeftRightImageText
            heading="Web Application Template"
            subheading="PHP, JavaScript, MySQL, HTML, CSS"
            nonTextContent={project2Content}
            leftAligned={false}
          >
            <Text m="1rem">
              This project was my first venture into backend technologies. The
              project stemmed from my desire to add a feature to a 1st Year Web
              Development assignment that was outside the scope of the class.
            </Text>
            <Text m="1rem">
              Through the use of primarily PHP and MySql, I created a
              functioning web application capable of storing, sorting and
              displaying user entered data in many different forms.
            </Text>
            <Text m="1rem">
              The project was driven by my interest in and desire to learn more
              about programming. It furthered my development skill greatly and
              has provided me with a helpful codebase that provides real-world
              examples of the use of different technologies.
            </Text>
            <a href="https://github.com/rossmcel">
              <Button bgColor="blue" color="white" fontSize="sm" ml="1rem">
                See the GitHub Repo{" "}
                <ExitToAppIcon style={{ marginLeft: "0.5rem" }} />
              </Button>
            </a>
          </LeftRightImageText>
        </Box>
      ) : (
        <Box minW="100%" minH="40rem" maxH="40rem">
          <SearchDisplay>
            <LeftRightImageText
              heading="Web Application Template"
              subheading="PHP, JavaScript, MySQL, HTML, CSS"
              nonTextContent={project2Content}
              leftAligned={true}
            >
              <Text m="1rem">
                This project was my first venture into backend technologies. The
                project stemmed from my desire to add a feature to a 1st Year
                Web Development assignment that was outside the scope of the
                class.
              </Text>
              <Text m="1rem">
                Through the use of primarily PHP and MySql, I created a
                functioning web application capable of storing, sorting and
                displaying user entered data in many different forms.
              </Text>
              <Text m="1rem">
                The project was driven by my interest in and desire to learn
                more about programming. It furthered my development skill
                greatly and has provided me with a helpful codebase that
                provides real-world examples of the use of different
                technologies.
              </Text>
              <a href="https://github.com/rossmcel">
                <Button bgColor="blue" color="white" fontSize="sm" ml="1rem">
                  See the GitHub Repo{" "}
                  <ExitToAppIcon style={{ marginLeft: "0.5rem" }} />
                </Button>
              </a>
            </LeftRightImageText>
            <LeftRightImageText
              heading="Web Application Template"
              subheading="PHP, JavaScript, MySQL, HTML, CSS"
              nonTextContent={project2Content}
              leftAligned={true}
            >
              <Text m="1rem">
                This project was my first venture into backend technologies. The
                project stemmed from my desire to add a feature to a 1st Year
                Web Development assignment that was outside the scope of the
                class.
              </Text>
              <Text m="1rem">
                Through the use of primarily PHP and MySql, I created a
                functioning web application capable of storing, sorting and
                displaying user entered data in many different forms.
              </Text>
              <Text m="1rem">
                The project was driven by my interest in and desire to learn
                more about programming. It furthered my development skill
                greatly and has provided me with a helpful codebase that
                provides real-world examples of the use of different
                technologies.
              </Text>
              <a href="https://github.com/rossmcel">
                <Button bgColor="blue" color="white" fontSize="sm" ml="1rem">
                  See the GitHub Repo{" "}
                  <ExitToAppIcon style={{ marginLeft: "0.5rem" }} />
                </Button>
              </a>
            </LeftRightImageText>
          </SearchDisplay>
        </Box>
      )}
    </Box>
  );
};

export default ProjectsView;
