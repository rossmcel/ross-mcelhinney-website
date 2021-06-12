// Component that renders max of 3 fully bordered sections aligned horizontally

import React from 'react';
import { Box, Flex, Image, Heading } from '@chakra-ui/react';

interface ImageCaptionViewProps {
  image: string;
  title: string;
}

export const ImageCaptionView: React.FC<ImageCaptionViewProps> = ({ image, title }) => {
  return (
    <Flex
      direction="column"
      align="center"
      pl="2rem"
      pr="2rem"
      textAlign="center"
      mt={{ base: '1rem', md: '15rem' }}
      mb={{ base: '1rem', md: '15rem' }}
      justify="space-between"
    >
      <Box minH="60%" boxSize="40%" mb={{ base: '1rem', md: '5rem' }}>
        <Image src={image} />
      </Box>
      <Heading as="h4" fontSize="lg" maxW="80%">
        {title}
      </Heading>
    </Flex>
  );
};

export default ImageCaptionView;
