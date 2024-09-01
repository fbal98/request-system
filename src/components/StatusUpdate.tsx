import React from "react";

function StatusUpdate({ status, onUpdate }) {
  return (
    <div>
      <select value={status} onChange={(e) => onUpdate(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}

export default StatusUpdate;
