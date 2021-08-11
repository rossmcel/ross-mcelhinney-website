/*
**** How This Component Works ****

The component takes 2 props - 'children' and 'originalComponentTags'
  'children' prop - This prop acts like a typical 'children' prop, however each prop
  is associated with a value in the Object that is passed in the 'originalComponentTags' prop.
    For example: originalComponentTags[0] is associated with the 1st prop passed, 
    originalComponentTags[1] is associated with the 2nd prop passed ect.
    NOTE: Individual props are defined like so:
      <Box>
      </Box>
      <Box>
      </Box>
      This is 2 props, however:
      <Box>
        <Box>
        </Box>
        <Box>
        </Box>
      </Box>
      is one prop

  'originalComponentTags' prop - This prop must be a JSON Object that is an array. It must have
  a property called 'tags' in each array object that contains a list of tags under the name 'tagName'
    For example: 
    JSON_Array_Object_Name: [
      {
        tags: [
          { tagName: "React" },
          { tagName: "JavaScript" },
          { tagName: "TypeScript" },
        ],
      },
      {
        tags: [
          { tagName: "PHP" },
          { tagName: "JavaScript" },
          { tagName: "MySQL" },
          { tagName: "HTML" },
          { tagName: "CSS" },
        ],
      },
    ],
  
  
*/
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

interface SearchDisplayViewProps {
  children: React.ReactNode;
  originalComponentTags: any;
}

export const SearchDisplayView: React.FC<SearchDisplayViewProps> = ({
  children,
  originalComponentTags,
}) => {
  // List of selectable tags
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "PHP", label: "PHP" },
    { value: "MySQL", label: "MySQL" },
    { value: "Git", label: "Git" },
    { value: "HTML", label: "HTML" },
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
          setTags((tags) => tags.concat(inputValue[i][keyName]));
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
          setTags((tags) => tags.concat(inputValue[i][keyName]));
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

  // array to hold the children props that have tags matching the currently selected tags
  let display = new Array();
  // loop through the tags of each of the children props
  for (let i = 0; i < originalComponentTags.length; i++) {
    for (let j = 0; j < originalComponentTags[i].tags.length; j++) {
      // if any of this children prop's tags match the currently selected tags
      if (tags.includes(originalComponentTags[i].tags[j].tagName)) {
        // add this children prop to the list of props to be displayed
        display.push(i);
        break;
      }
    }
  }

  // seperate the children prop into individual props
  const childrenArray = React.Children.toArray(children);
  // array to hold the final list of individual children props to be displayed
  let finalChildrenArray = new Array();
  for (let i = 0; i < display.length; i++) {
    finalChildrenArray.push(childrenArray[display[i]]);
  }

  const animatedComponents = makeAnimated();

  return (
    <Flex
      direction="column"
      minW={{ base: "90%", sm: "60%" }}
      maxW={{ base: "90%", sm: "60%" }}
      ml="auto"
      mr="auto"
      minH={{ base: "40rem", md: "40rem" }}
      maxH={{ base: "42rem", md: "46rem" }}
      border="1px solid lightgrey"
      borderRadius="0.5rem"
    >
      <Flex
        minW="100%"
        maxW="100%"
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
      </Flex>

      <Box
        minW="100%"
        maxW="100%"
        minH="36rem"
        maxH={{ md: "42rem" }}
        borderTop="1px solid lightgrey"
        overflow="scroll"
        paddingBottom="4rem"
      >
        {finalChildrenArray}
      </Box>
    </Flex>
  );
};

export default SearchDisplayView;
