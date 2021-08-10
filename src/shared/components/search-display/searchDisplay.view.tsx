import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

interface SearchDisplayViewProps {
  children: React.ReactNode;
}

export const SearchDisplayView: React.FC<SearchDisplayViewProps> = ({
  children,
}) => {
  // List of selectable tags
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "PHP", label: "PHP" },
    { value: "MySQL", label: "MySQL" },
  ];

  // current tags hook
  const [tags, setTags] = useState(["JavaScript"]);

  // handle logic for actions made on the list of tags by the user (add new tag/remove tag/clear all tags ect.)
  const handleInputChange = (inputValue: any, { action }: any) => {
    // differentiate between different actions performed by the user on the 'Select' component
    switch (action) {
      case "input-change":
        return;
      case "select-option":
        // completely clear the tags array
        // .splice 2nd parameter = 0 because .splice() returns an array with the deleted elements
        setTags((tags) => tags.splice(0, 0));

        // find the property name of the inputValue object
        var keyName = "whatever";
        for (var name in inputValue[0]) {
          keyName = name;
        }
        // loop through the inputValue array and add it to the tags array
        for (let i = 0; i < inputValue.length; i++) {
          console.log(inputValue[i][keyName]);
          setTags((tags) => tags.concat(inputValue[i][keyName]));
          console.log(tags);
        }

        return;
      case "remove-value":
        // exact same process as 'select-option'
        setTags((tags) => tags.splice(0, 0));

        var keyName = "whatever";
        for (var name in inputValue[0]) {
          keyName = name;
        }
        for (let i = 0; i < inputValue.length; i++) {
          console.log(inputValue[i][keyName]);
          setTags((tags) => tags.concat(inputValue[i][keyName]));
          console.log(tags);
        }

        return;
      // If x on the right side of the 'Select' component is clicked
      case "clear":
        // completely clear tags array
        setTags((tags) => tags.splice(0, 0));
        return;
      case "menu-close":
        return;
      default:
        return;
    }
  };

  const animatedComponents = makeAnimated();

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
      <Box minW="100%" maxW="100%" minH="8rem" maxH="5rem">
        <Flex direction="row" minW="72%" maxW="72%" ml="auto" mr="auto">
          <Flex
            minW="100%"
            maxW="100%"
            mt="3rem"
            border="1px solid grey"
            borderRadius="0.5rem"
          >
            <Box minW="100%">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={options[0]}
                isMulti
                isClearable
                options={options}
                onInputChange={handleInputChange}
                onChange={handleInputChange}
              />
            </Box>
            {tags}
          </Flex>
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
