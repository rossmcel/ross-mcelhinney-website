// Component that renders max of 3 sections aligned horizontally and seperated by a single line.

import React from 'react';
import { Flex, Center } from '@chakra-ui/react';

export const HorizontalListView: React.FC = ({ children }) => {
  return (
    <Center>
      <Flex
        bg="transparent"
        color="black"
        maxW={{ base: 'none', lg: '85rem' }}
        maxH={{ base: 'none', lg: '50rem' }}
        direction={{ base: 'column', lg: 'row' }}
      >
        {children}
      </Flex>
    </Center>
  );
};

export default HorizontalListView;
