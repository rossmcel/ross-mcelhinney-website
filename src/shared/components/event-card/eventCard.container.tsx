import React from 'react';
import { EventCardView } from './eventCard.view';
import { Sizes } from '../../../design/types';

interface EventCardProps {
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
  textWidth?: Sizes;
  headingSize?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
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
  textWidth = Sizes.BASE,
  headingSize = 'md',
}) => {
  let widthSize = 1;
  switch (textWidth) {
    case Sizes.BASE:
      widthSize = 30;
      break;
    case Sizes.XSMALL:
      widthSize = 15;
      break;
    case Sizes.SMALL:
      widthSize = 20;
      break;
    case Sizes.MEDIUM:
      widthSize = 25;
      break;
    case Sizes.LARGE:
      widthSize = 35;
      break;
    case Sizes.XL:
      widthSize = 45;
      break;
    default:
      break;
  }

  // Used to align the date with the heading when the heading is customized
  let dateMargin = 0;
  if (headingSize !== 'md') {
    dateMargin = 0.5;
  }
  return (
    <EventCardView
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
      textWidth={widthSize}
      headingSize={headingSize}
      dateMargin={dateMargin}
    />
  );
};

export default EventCard;
