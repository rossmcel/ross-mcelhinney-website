import React from "react";
import LaptopDisplayView from "./laptopDisplay.view";

interface FooterProps {
  screenImage: string;
}

export const LaptopDisplay: React.FC<FooterProps> = ({ screenImage }) => {
  return <LaptopDisplayView screenImage={screenImage} />;
};

export default LaptopDisplay;
