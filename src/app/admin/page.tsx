"use client";
import React, { useState } from "react";
import Sidebar from "~/components/Sidebar";

const requests = [
  {
    id: 1,
    title: "Request 1",
    description: "Description of request 1",
    priority: "high",
  },
  {
    id: 2,
    title: "Request 2",
    description: "Description of request 2",
    priority: "medium",
  },
  // Add more requests as needed
];

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return (
        <span className="rounded bg-red-500 px-2 py-1 text-white">High</span>
      );
    case "medium":
      return (
        <span className="rounded bg-yellow-500 px-2 py-1 text-white">
          Medium
        </span>
      );
    case "low":
      return (
        <span className="rounded bg-green-500 px-2 py-1 text-white">Low</span>
      );
    default:
      return null;
  }
};

export default function AdminPage() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <div className="flex h-screen gap-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 p-4">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white p-4 shadow-md">
        <div className="flex-1 overflow-y-auto">
          {requests.map((request) => (
            <div
              key={request.id}
              className="mb-4 cursor-pointer rounded-lg bg-white p-4 shadow-md hover:bg-gray-100"
              onClick={() => setSelectedRequest(request)}
            >
              <h2 className="text-xl font-bold">{request.title}</h2>
              <p>{request.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-1/3 flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
        {selectedRequest ? (
          <>
            {/* Requester Info */}
            <div className="rounded-lg bg-gray-100 p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/40?text=Person"
                    alt="Avatar"
                    className="mr-4 h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="text-lg font-bold">Firas Al Kharusi</p>
                    <p className="text-sm text-gray-600">
                      {selectedRequest.title}
                    </p>
                  </div>
                </div>
                <div>{getPriorityBadge(selectedRequest.priority)}</div>
              </div>
            </div>
            {/* Request Description */}
            <div className="flex-1 overflow-y-auto rounded-lg bg-gray-100 p-4 shadow-md">
              <p>{selectedRequest.description}</p>
            </div>
            {/* Attachments */}
            <div className="rounded-lg bg-gray-100 p-4 shadow-md">
              <p>No attachments</p>
            </div>
            {/* Actions */}
            <div className="rounded-lg bg-gray-100 p-4 shadow-md">
              <p>Actions to be added...</p>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            Select a request to view its details
          </div>
        )}
      </div>
    </div>
  );
}
