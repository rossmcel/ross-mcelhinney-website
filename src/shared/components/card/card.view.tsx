// Component that renders a card

import React from 'react';
import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react';

interface CardViewProps {
  title: string;
  image: string;
  text: string;
  margin: number;
  padding: number;
  caption: string;
  width: number;
}

export const CardView: React.FC<CardViewProps> = ({ title, image, text, margin, padding, caption, width }) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      mt={{
        base: `${margin + 1}rem`,
        sm: `${margin + 2}rem`,
        md: `${margin + 2}rem`,
      }}
      mb={{
        base: `${margin + 1}rem`,
        sm: `${margin + 2}rem`,
        md: `${margin + 5}rem`,
      }}
      boxSize={{ base: 'none', lg: '80%' }}
      textAlign={{ base: 'justify', lg: 'left' }}
    >
      <Heading as="h4" size={caption} letterSpacing="-.1rem" mb="1.6rem">
        {title}
      </Heading>
      <Flex
        direction="column"
        align="center"
        pl={`${padding + 2}rem`}
        pr={`${padding + 2}rem`}
        minH="15rem"
        maxH="15rem"
        justify="space-between"
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '1px',
          },
          '&::-webkit-scrollbar-track': {
            width: '0px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '2px',
          },
        }}
      >
        <Box size="20%">
          <Image src={image} />
        </Box>
        <Flex maxW={{ base: 'none', md: `${width}rem`, lg: 'none' }}>
          <Text>{text}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardView;
