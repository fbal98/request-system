"use client";
import React, { useState } from "react";
import RequestForm from "./EmployeeForm";

export default function Employee() {
  const admins = [
    { id: "1", name: "Admin 1" },
    { id: "2", name: "Admin 2" },
  ];

  const handleFormSubmit = (request: {
    title: string;
    description: string;
    adminId: string;
    priority?: string;
    attachments?: File[];
  }) => {
    // Handle form submission logic here
    console.log("Request submitted:", request);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <RequestForm admins={admins} onSubmit={handleFormSubmit} />
    </div>
  );
}
