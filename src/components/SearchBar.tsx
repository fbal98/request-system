import React from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full rounded border p-2"
    />
  );
}

export default SearchBar;
