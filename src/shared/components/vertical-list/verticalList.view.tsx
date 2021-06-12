// Component that renders x number of sections aligned vertically

import React from 'react';
import { Flex, Center } from '@chakra-ui/react';

export const VerticalListView: React.FC = ({ children }) => {
  return (
    <Center>
      <Flex bg="transparent" color="black" maxW="100rem" direction="column" p="2rem">
        {children}
      </Flex>
    </Center>
  );
};

export default VerticalListView;
