import React from "react";
import { Input } from "@shadcn/ui";

function SearchBar({ onSearch }) {
  return (
    <Input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full"
    />
  );
}

export default SearchBar;
