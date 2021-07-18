import React from "react";
import { LeftRightImageTextView } from "./leftRightImageText.view";

interface LeftRightImageTextProps {
  heading: string;
  subheading: string;
  nonTextContent: React.ReactNode;
  children: React.ReactNode;
  leftAligned: boolean;
}

export const LeftRightImageText: React.FC<LeftRightImageTextProps> = ({
  heading,
  subheading,
  nonTextContent,
  children,
  leftAligned,
}) => {
  return (
    <LeftRightImageTextView
      heading={heading}
      subheading={subheading}
      nonTextContent={nonTextContent}
      leftAligned={leftAligned}
    >
      {children}
    </LeftRightImageTextView>
  );
};

export default LeftRightImageText;
