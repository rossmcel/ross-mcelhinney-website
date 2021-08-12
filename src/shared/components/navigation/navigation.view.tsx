import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./menu-items.view";

export const NavigationView: React.FC = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX="1.5rem"
      paddingY={{ base: "0.5rem", sm: "1.5rem" }}
      borderBottom={{ base: "1px lightgrey solid", sm: "none" }}
      bg="transparent"
      color="black"
    >
      <Flex align="center" mr={5}>
        <NavLink to="/">
          <Heading as="h1" size="lg" letterSpacing="-.1rem">
            Ross McElhinney
          </Heading>
        </NavLink>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="black"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        flexDirection="row-reverse"
      >
        <MenuItems menuItemLink="/Contact">Contact Me</MenuItems>
        <MenuItems menuItemLink="/Projects">My Projects</MenuItems>
        <MenuItems menuItemLink="/">Home</MenuItems>
      </Box>
    </Flex>
  );
};

export default NavigationView;
