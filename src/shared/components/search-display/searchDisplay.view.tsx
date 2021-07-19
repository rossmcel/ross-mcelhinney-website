import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface SearchDisplayViewProps {
  children: React.ReactNode;
}

export const SearchDisplayView: React.FC<SearchDisplayViewProps> = ({
  children,
}) => {
  return (
    <Flex
      direction="column"
      minW="60%"
      maxW="60%"
      ml="auto"
      mr="auto"
      minH="40rem"
      maxH="40rem"
      border="1px solid lightgrey"
      borderRadius="0.5rem"
    >
      <Box minW="100%" maxW="100%" minH="5rem" maxH="5rem">
        <Flex direction="row" minW="72%" maxW="72%" ml="auto" mr="auto">
          <Flex
            minW="60%"
            maxW="60%"
            minH="2rem"
            maxH="2rem"
            mt="1.5rem"
            mb="1.5rem"
            mr="2%"
            border="1px solid grey"
            borderRadius="0.5rem"
          ></Flex>
          <Flex
            minW="40%"
            maxW="40%"
            minH="2rem"
            maxH="2rem"
            mt="1.5rem"
            mb="1.5rem"
            border="1px solid grey"
            borderRadius="0.5rem"
          ></Flex>
        </Flex>
      </Box>
      <Box
        minW="100%"
        maxW="100%"
        minH="35rem"
        maxH="35rem"
        borderTop="1px solid lightgrey"
        overflow="scroll"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default SearchDisplayView;
