import React from "react";
import { Center } from "@chakra-ui/react";
import { ImageTextView } from "./imageText.view";

interface ImageTextProps {
  image: string;
  title: string;
  titleImage: string;
  text1: string;
  text2: string;
  buttonLink: string;
  buttonText: string;
  button2Link: string;
  button2Text: string;
  button3Link: string;
  button3Text: string;
}

export const ImageText: React.FC<ImageTextProps> = ({
  image,
  title,
  text1,
  text2,
  titleImage,
  buttonLink,
  buttonText,
  button2Link,
  button2Text,
  button3Link,
  button3Text,
}) => (
  <Center mt={{ base: "3rem", sm: "5rem" }} mb={{ base: "3rem", md: "none" }}>
    <ImageTextView
      image={image}
      title={title}
      titleImage={titleImage}
      text1={text1}
      text2={text2}
      buttonLink={buttonLink}
      buttonText={buttonText}
      button2Link={button2Link}
      button2Text={button2Text}
      button3Link={button3Link}
      button3Text={button3Text}
    />
  </Center>
);

export default ImageText;
