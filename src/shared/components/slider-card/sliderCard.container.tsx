import React from "react";
import { SliderCardView } from "./sliderCard.view";

interface SliderCardProps {
  index: number;
  title: string;
  date: string;
  text: string;
  buttonLink: string;
  buttonText: string;
  imagesTitle: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export const SliderCard: React.FC<SliderCardProps> = ({
  index,
  title,
  date,
  text,
  buttonLink,
  buttonText,
  imagesTitle,
  image1 = undefined,
  image2 = undefined,
  image3 = undefined,
  image4 = undefined,
}) => {
  return (
    <SliderCardView
      index={index}
      title={title}
      date={date}
      text={text}
      buttonLink={buttonLink}
      buttonText={buttonText}
      imagesTitle={imagesTitle}
      image1={image1}
      image2={image2}
      image3={image3}
      image4={image4}
    />
  );
};

export default SliderCard;
