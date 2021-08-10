import React from "react";
import SearchDisplayView from "./searchDisplay.view";

interface SearchDisplayProps {
  children: React.ReactNode;
  originalComponentTags: any;
}

export const SearchDisplay: React.FC<SearchDisplayProps> = ({
  children,
  originalComponentTags,
}) => {
  return (
    <SearchDisplayView originalComponentTags={originalComponentTags}>
      {children}
    </SearchDisplayView>
  );
};

export default SearchDisplay;
