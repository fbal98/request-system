"use client";
import React, { useState } from "react";
import RequestForm from "./EmployeeForm";
import { api } from "~/trpc/react";

export default function Employee() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createRequest = api.request.create.useMutation({
    onSuccess: () => {
      setIsLoading(false);
      setSuccess(true);
    },
    onError: (error) => {
      setError(error.message);
      setIsLoading(false);
    },
  });
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
    setIsLoading(true);
    createRequest.mutate({
      title: request.title,
      description: request.description,
      userId: 1,
      priority: request.priority as "low" | "medium" | "high",
      // attachments: request.attachments,
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <RequestForm
        admins={admins}
        onSubmit={handleFormSubmit}
        isLoading={isLoading}
        success={success}
        error={error}
      />
    </div>
  );
}
