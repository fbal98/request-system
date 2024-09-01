import React from "react";
import { Select, SelectItem } from "@shadcn/ui";

function FilterSort({ onFilterChange, onSortChange }) {
  return (
    <div className="flex space-x-4">
      <Select
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full"
      >
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="completed">Completed</SelectItem>
      </Select>
      <Select onChange={(e) => onSortChange(e.target.value)} className="w-full">
        <SelectItem value="urgency">Urgency</SelectItem>
        <SelectItem value="date">Date</SelectItem>
      </Select>
    </div>
  );
}

export default FilterSort;
