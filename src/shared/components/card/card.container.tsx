/* mt = margin top
mb = margin bottom
pl = padding left
pr = padding right
hs = header size, pass a string value (md, lg, xl ect.)
tW = width of text - should not be larger than 35

Base value is 0, this displays with the initial values. Each value is = value + original value
*/

import React from 'react';
import { CardView } from './card.view';
import { Sizes } from '../../../design/types';

interface CardProps {
  title: string;
  image: string;
  text: string;
  margin?: Sizes;
  padding?: Sizes;
  caption?: string;
  width?: Sizes;
}

export const Card: React.FC<CardProps> = ({
  title,
  image,
  text,
  margin = Sizes.BASE,
  padding = Sizes.BASE,
  caption = 'lg',
  width = Sizes.BASE,
}) => {
  // define Sizes
  let marginSize = 1;
  switch (margin) {
    case Sizes.BASE:
      marginSize = 1;
      break;
    case Sizes.XSMALL:
      marginSize = 2;
      break;
    case Sizes.SMALL:
      marginSize = 3;
      break;
    case Sizes.MEDIUM:
      marginSize = 4;
      break;
    case Sizes.LARGE:
      marginSize = 6;
      break;
    case Sizes.XL:
      marginSize = 8;
      break;
    default:
      break;
  }

  let paddingSize = 1;
  switch (padding) {
    case Sizes.BASE:
      paddingSize = 1;
      break;
    case Sizes.XSMALL:
      paddingSize = 1;
      break;
    case Sizes.SMALL:
      paddingSize = 1;
      break;
    case Sizes.MEDIUM:
      paddingSize = 4;
      break;
    case Sizes.LARGE:
      paddingSize = 8;
      break;
    case Sizes.XL:
      paddingSize = 10;
      break;
    default:
      break;
  }

  let widthSize = 1;
  switch (width) {
    case Sizes.BASE:
      widthSize = 45;
      break;
    case Sizes.XSMALL:
      widthSize = 35;
      break;
    case Sizes.SMALL:
      widthSize = 45;
      break;
    case Sizes.MEDIUM:
      widthSize = 60;
      break;
    case Sizes.LARGE:
      widthSize = 75;
      break;
    case Sizes.XL:
      widthSize = 85;
      break;
    default:
      break;
  }

  return (
    <CardView
      title={title}
      image={image}
      text={text}
      margin={marginSize}
      padding={paddingSize}
      caption={caption}
      width={widthSize}
    />
  );
};

export default Card;
