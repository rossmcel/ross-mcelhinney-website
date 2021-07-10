import React from "react";
import { SliderView } from "./slider.view";

interface SliderProps {
  totalSlides: number;
}

export const Slider: React.FC<SliderProps> = ({ children, totalSlides }) => (
  <SliderView totalSlides={totalSlides}>{children}</SliderView>
);

export default Slider;
