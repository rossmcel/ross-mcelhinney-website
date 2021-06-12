// Component that renders max of 3 fully bordered sections aligned horizontally

import React from 'react';
import { Flex, Center } from '@chakra-ui/react';

export const HorizontalListBorderedView: React.FC = ({ children }) => {
  return (
    <Center>
      <Flex
        bg="transparent"
        color="black"
        maxW={{ base: 'none', md: '85rem' }}
        overflowX="scroll"
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
        direction={{ base: 'column', xl: 'row' }}
      >
        {children}
      </Flex>
    </Center>
  );
};

export default HorizontalListBorderedView;
