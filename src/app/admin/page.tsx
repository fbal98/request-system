"use client";
import React, { useState } from "react";
import Sidebar from "~/components/Sidebar";

const requests = [
  { id: 1, title: "Request 1", description: "Description of request 1" },
  { id: 2, title: "Request 2", description: "Description of request 2" },
  // Add more requests as needed
];

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
      <div className="w-1/3 rounded-lg bg-white p-4 shadow-md">
        {selectedRequest ? (
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="text-2xl font-bold">{selectedRequest.title}</h2>
            <p>{selectedRequest.description}</p>
            {/* Add more details of the request as needed */}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            Select a request to view its details
          </div>
        )}
      </div>
    </div>
  );
}
