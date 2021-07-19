import React from "react";
import SearchDisplayView from "./searchDisplay.view";

interface SearchDisplayProps {
  children: React.ReactNode;
}

export const SearchDisplay: React.FC<SearchDisplayProps> = ({ children }) => {
  return <SearchDisplayView>{children}</SearchDisplayView>;
};

export default SearchDisplay;
