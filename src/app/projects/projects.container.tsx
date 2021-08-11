import React from "react";
import { Box, Center, Heading, Text, Flex, Button } from "@chakra-ui/react";
import ProjectsView from "./projects.view";
import ScrollAnimation from "react-animate-on-scroll";
import HomePageRecording from "../../homePageRecordingMid.gif";
import { LaptopDisplay } from "../../shared/components/device-displays/laptop-display";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const ProjectsContainer: React.FC = () => {
  const project1Content = (
    <Box>
      <LaptopDisplay screenImage={HomePageRecording} />
    </Box>
  );

  const project1Text = (
    <Box>
      <Text m="1rem">
        A clean, functional, and responsive web application created with modern
        technologies such as React and TypeScript.
      </Text>
      <Text m="1rem">
        My aim with this project is to both provide an easily accessible tool
        for displaying helpful information about me, as well as to showcase my
        JavaScript/TypeScript development skills.
      </Text>
      <Text m="1rem">
        Throughout every step of this project I continuously pushed the limit of
        what I could do through applying creative solutions to challenging
        problems. Such a problem was the creation of the interactive email,
        phone, and LinkedIn Icons seen on the{" "}
        <a href="/contact" style={{ color: "blue" }}>
          Contact Me
        </a>{" "}
        page. By creating these icons, I discovered a lot about animation in
        React as well as about the extensive amount of helpful npm packages.
      </Text>
      <Text m="1rem">
        Although this was not a group project, I developed with collaboration in
        mind through the use of readable and structured code, effective
        seperation of components, strong documentation and my use of Git.
      </Text>
      <a href="https://github.com/rossmcel">
        <Button bgColor="blue" color="white" fontSize="sm" ml="1rem">
          See the GitHub Repo <ExitToAppIcon style={{ marginLeft: "0.5rem" }} />
        </Button>
      </a>
    </Box>
  );

  const project2Content = (
    <Box>
      <LaptopDisplay screenImage={HomePageRecording} />
    </Box>
  );

  const project2Text = (
    <Box>
      <Text m="1rem">
        This project was my first venture into backend technologies. The project
        stemmed from my desire to add a feature to a 1st Year Web Development
        assignment that was outside the scope of the class.
      </Text>
      <Text m="1rem">
        Through the use of primarily PHP and MySql, I created a functioning web
        application capable of storing, sorting and displaying user entered data
        in many different forms.
      </Text>
      <Text m="1rem">
        The project was driven by my interest in and desire to learn more about
        programming. It furthered my development skill greatly and has provided
        me with a helpful codebase that provides real-world examples of the use
        of different technologies.
      </Text>
      <a href="https://github.com/rossmcel">
        <Button bgColor="blue" color="white" fontSize="sm" ml="1rem">
          See the GitHub Repo <ExitToAppIcon style={{ marginLeft: "0.5rem" }} />
        </Button>
      </a>
    </Box>
  );
  const projectData = {
    projects: [
      {
        projectHeading: "Personal Website",
        projectSubHeading: "React JS, TypeScript, JavaScript",
        nonTextContent: project1Content,
        leftAligned: true,
        textContent: project1Text,
        tags: [
          { tagName: "React" },
          { tagName: "JavaScript" },
          { tagName: "TypeScript" },
        ],
      },
      {
        projectHeading: "Web Application Template",
        projectSubHeading: "PHP, JavaScript, MySQL, HTML, CSS",
        nonTextContent: project2Content,
        leftAligned: false,
        textContent: project2Text,
        tags: [
          { tagName: "PHP" },
          { tagName: "JavaScript" },
          { tagName: "MySQL" },
          { tagName: "HTML" },
          { tagName: "CSS" },
        ],
      },
    ],
  };
  return <ProjectsView projectData={projectData} />;
};

export default ProjectsContainer;
