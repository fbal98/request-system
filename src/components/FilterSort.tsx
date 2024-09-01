import React from "react";

function FilterSort({ onFilterChange, onSortChange }) {
  return (
    <div className="flex space-x-4">
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="rounded border p-2"
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded border p-2"
      >
        <option value="urgency">Urgency</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
}

export default FilterSort;
