"use client";
import React from "react";

function AssignAdmin({ admins, onAssign }) {
  return (
    <div className="rounded bg-white p-4 shadow">
      <select
        onChange={(e) => onAssign(e.target.value)}
        className="w-full rounded border p-2"
      >
        {admins.map((admin) => (
          <option key={admin.id} value={admin.id}>
            {admin.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AssignAdmin;
