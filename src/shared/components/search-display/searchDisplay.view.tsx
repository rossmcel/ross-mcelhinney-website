import React, { useState } from "react";
import { Box, BreadcrumbLink, Flex } from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { handleInputChange } from "react-select/src/utils";
import { TagFacesSharp } from "@material-ui/icons";

interface SearchDisplayViewProps {
  children: React.ReactNode;
}

export const SearchDisplayView: React.FC<SearchDisplayViewProps> = ({
  children,
}) => {
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "PHP", label: "PHP" },
    { value: "MySQL", label: "MySQL" },
  ];

  //var tagsArr = new Array("JavaScript");

  const [tags, setTags] = useState(["JavaScript"]);

  const [isOpen, setIsOpen] = useState({});

  const handleInputChange = (inputValue: any, { action }: any) => {
    console.log("IV - " + inputValue);
    console.log("IV - " + inputValue[0]);

    //var keyNames = Object.keys(inputValue[0]);
    //console.log(keyNames);

    console.log("A - " + action);
    switch (action) {
      case "input-change":
        return;
      case "select-option":
        // .splice 2nd parameter = 0 because .splice() returns an array with the deleted elements
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
      case "remove-value":
        // .splice 2nd parameter = 0 because .splice() returns an array with the deleted elements
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
      case "clear":
        setTags((tags) => tags.splice(0, 0));
        return;
      case "menu-close":
        return;
      default:
        return;
    }
  };

  const handleChange = (selectedOption: any) => {
    //tagsArr.push(selectedOption[selectedOption.length - 1].value);

    console.log("------" + selectedOption[selectedOption.length - 1].value);
    if (isOpen == true) {
      console.log("OOOPPPPEEEENNN");
      if (tags.includes(selectedOption[selectedOption.length - 1].value)) {
        console.log("INCLUDES");

        let tempArr = new Array();
        for (let k = 0; k < selectedOption.length; k++) {
          tempArr.push(selectedOption[k].value);
        }
        console.log(tempArr);

        for (let i = 0; i < tags.length; i++) {
          if (tempArr.includes(tags[i])) {
            console.log(tags[i]);
            console.log("Yes");
          } else {
            console.log(tags[i]);
            console.log("No");
            setTags((tags) => tags.splice(i, 1));
            console.log(tags);
            break;
          }
          console.log("ffff" + tags);
        }

        console.log(tags);

        /*let location = tags.indexOf(
        selectedOption[selectedOption.length - 1].value
      );
      setTags((tags) => tags.splice(location, 1));*/
      } else {
        setTags((tags) =>
          tags.concat(selectedOption[selectedOption.length - 1].value)
        );
      }
    }

    //console.log(`Option selected:`, selectedOption[0].value);
    //console.log(selectedOption);
    //console.log("Tags is: " + tagsArr[1]);
  };

  const animatedComponents = makeAnimated();

  //console.log("oooooo" + tags);
  //const animatedComponents = makeAnimated();

  //console.log("test ---- :::::: " + tags[1]);

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
