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
    <Box minW="50%" maxW="50%" display="grid" border="1px black solid">
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
