/* 
NOTE: This component must be within another element (e.g. with in a <Box> or <Flex> ect.)
*/
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Laptop from "../../../../laptop2.jpg";

interface LaptopDisplayViewProps {
  screenImage: string;
}

export const LaptopDisplayView: React.FC<LaptopDisplayViewProps> = ({
  screenImage,
}) => {
  return (
    <Box minW="100%" maxW="100%" display="grid">
      <Box w="100%" h="100%" gridColumn="1" gridRow="1">
        <Image src={Laptop} />
      </Box>
      <Box
        w="53.5%"
        ml="23.7%"
        mr="21.5%"
        mt="10%"
        h="60%"
        gridColumn="1"
        gridRow="1"
      >
        <Box w="100%" h="100%" overflow="hidden">
          <Image src={screenImage} />
        </Box>
      </Box>
    </Box>
  );
};

export default LaptopDisplayView;
