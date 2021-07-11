import React from "react";
import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
import ScrollAnimation from "react-animate-on-scroll";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ProjectsView: React.FC = () => {
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
            Here you can see some projects that I have created
          </Text>
          <Text fontSize="lg" textAlign="justify">
            My aim with these Projects is to both improve and expand my
            programming skills and to provide solutions to interesting problems
            I have come across in the world
          </Text>
        </Flex>
      </Center>
      <Flex mt="5rem" minW="90%" minH="10rem" ml="5%" mr="5%">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
          <Box minW="40%" minH="100%" ml="0%" mr="auto">
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {codeString}
            </SyntaxHighlighter>
          </Box>
        </ScrollAnimation>
        <Box minW="60%">
          <Text m="1rem">This is a test</Text>
        </Box>
      </Flex>

      <Flex mt="5rem" minW="90%" minH="10rem" ml="5%" mr="5%">
        <Box minW="60%">
          <Text m="1rem">This is a test</Text>
        </Box>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
          <Box minW="40%" minH="10rem" ml="auto" mr="0%">
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {codeString}
            </SyntaxHighlighter>
          </Box>
        </ScrollAnimation>
      </Flex>
      <Flex mt="5rem" minW="90%" minH="10rem" ml="5%" mr="5%">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
          <Box minW="40%" minH="10rem" ml="0%" mr="auto">
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {codeString}
            </SyntaxHighlighter>
          </Box>
        </ScrollAnimation>
        <Box minW="60%">
          <Text m="1rem">This is a test</Text>
        </Box>
      </Flex>
      <Flex mt="5rem" minW="90%" minH="10rem" ml="5%" mr="5%">
        <Box minW="60%">
          <Text m="1rem">This is a test</Text>
        </Box>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
          <Box minW="40%" minH="10rem" ml="auto" mr="0%">
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {codeString}
            </SyntaxHighlighter>
          </Box>
        </ScrollAnimation>
      </Flex>
    </Box>
  );
};

export default ProjectsView;
