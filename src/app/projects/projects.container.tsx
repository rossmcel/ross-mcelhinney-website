import React from "react";
import { Box, Center, Heading, Text, Flex, Button } from "@chakra-ui/react";
import ProjectsView from "./projects.view";
import ScrollAnimation from "react-animate-on-scroll";
import HomePageRecording from "../../homePageRecordingMid.gif";
import { LaptopDisplay } from "../../shared/components/device-displays/laptop-display";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const ProjectsContainer: React.FC = () => {
  return <ProjectsView />;
};

export default ProjectsContainer;
