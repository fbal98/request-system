"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [identity, setIdentity] = useState("Admin");

  const identities = ["Admin", "HR", "Finance", "Masoud Alrawahi"];

  return (
    <div className="h-full w-64 rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4">
        <select
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        >
          {identities.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button className="mb-2 block w-full rounded-md bg-white p-2 text-left shadow-md hover:bg-gray-200">
          Inbox
        </button>
        <button className="mb-2 block w-full rounded-md bg-white p-2 text-left shadow-md hover:bg-gray-200">
          Progress
        </button>
        <button className="mb-2 block w-full rounded-md bg-white p-2 text-left shadow-md hover:bg-gray-200">
          Done
        </button>
        <button className="mb-2 block w-full rounded-md bg-white p-2 text-left shadow-md hover:bg-gray-200">
          Deleted/Cancelled
        </button>
        <button className="mb-2 block w-full rounded-md bg-white p-2 text-left shadow-md hover:bg-gray-200">
          Archived
        </button>
        <button className="mb-2 block w-full rounded-md bg-white p-2 text-left shadow-md hover:bg-gray-200">
          Won't be Solved
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
