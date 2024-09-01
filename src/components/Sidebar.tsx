"use client";
import React, { useState } from "react";
import {
  FaInbox,
  FaTasks,
  FaCheck,
  FaTrash,
  FaArchive,
  FaBan,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [identity, setIdentity] = useState("Admin");
  const [selectedButton, setSelectedButton] = useState("Inbox");

  const identities = ["Masoud Alrawahi", "Admin", "HR", "Finance"];

  return (
    <div className="flex h-full w-64 flex-col rounded-lg bg-white p-4 shadow-md">
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
      <div className="flex-1">
        <button
          className={`mb-2 flex w-full items-center rounded-md p-2 text-left hover:bg-gray-200 ${
            selectedButton === "Inbox" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setSelectedButton("Inbox")}
        >
          <FaInbox className="mr-2" /> Inbox
        </button>
        <button
          className={`mb-2 flex w-full items-center rounded-md p-2 text-left hover:bg-gray-200 ${
            selectedButton === "Progress" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setSelectedButton("Progress")}
        >
          <FaTasks className="mr-2" /> Progress
        </button>
        <button
          className={`mb-2 flex w-full items-center rounded-md p-2 text-left hover:bg-gray-200 ${
            selectedButton === "Done" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setSelectedButton("Done")}
        >
          <FaCheck className="mr-2" /> Done
        </button>
        <button
          className={`mb-2 flex w-full items-center rounded-md p-2 text-left hover:bg-gray-200 ${
            selectedButton === "Deleted/Cancelled" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setSelectedButton("Deleted/Cancelled")}
        >
          <FaTrash className="mr-2" /> Deleted/Cancelled
        </button>
        <button
          className={`mb-2 flex w-full items-center rounded-md p-2 text-left hover:bg-gray-200 ${
            selectedButton === "Archived" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setSelectedButton("Archived")}
        >
          <FaArchive className="mr-2" /> Archived
        </button>
        <button
          className={`mb-2 flex w-full items-center rounded-md p-2 text-left hover:bg-gray-200 ${
            selectedButton === "Won't be Solved" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setSelectedButton("Won't be Solved")}
        >
          <FaBan className="mr-2" /> Won't be Solved
        </button>
      </div>
      <div className="mt-auto">
        <button className="flex w-full items-center rounded-md bg-white p-2 text-left hover:bg-gray-200">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
