import React from 'react';
import { Flex } from '@chakra-ui/react';
import { ImageCaptionView } from './ImageCaption.view';

interface ImageCaptionProps {
  image: string;
  title: string;
}

export const ImageCaption: React.FC<ImageCaptionProps> = ({ image, title }) => (
  <Flex
    direction="column"
    mt="2rem"
    mb={{ sm: '1rem', md: '5rem' }}
    border={{ sm: 'none', md: '3px blue solid' }}
    mr={{ sm: 'none', xl: '5rem' }}
    minW={{ sm: 'none', md: '25rem' }}
  >
    <ImageCaptionView image={image} title={title} />
  </Flex>
);

export default ImageCaption;
