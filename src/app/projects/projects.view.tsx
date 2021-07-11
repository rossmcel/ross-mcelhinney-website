import React from "react";
import { Box } from "@chakra-ui/react";
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
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
        <Box mt="5rem" w="50rem" minH="10rem" ml="auto" mr="auto">
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
          </SyntaxHighlighter>
        </Box>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
        <Box mt="5rem" w="50rem" minH="10rem" ml="auto" mr="auto">
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
          </SyntaxHighlighter>
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
        <Box mt="5rem" w="50rem" minH="10rem" ml="auto" mr="auto">
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
          </SyntaxHighlighter>
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={5}>
        <Box mt="5rem" w="50rem" minH="10rem" ml="auto" mr="auto">
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
          </SyntaxHighlighter>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};

export default ProjectsView;
