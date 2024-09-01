import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

type Admin = {
  id: string;
  name: string;
};

type RequestFormProps = {
  admins: Admin[];
  onSubmit: (request: {
    title: string;
    description: string;
    adminId: string;
    priority?: string;
    attachments?: File[];
  }) => void;
  isLoading: boolean;
  success: boolean;
  error: string;
};

export default function RequestForm({
  admins,
  onSubmit,
  isLoading,
  success,
  error,
}: RequestFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adminId, setAdminId] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [attachments, setAttachments] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAttachments(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, adminId, priority, attachments });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl space-y-4 rounded-md bg-white/90 p-6 shadow-lg"
    >
      <h1 className="mb-4 text-center text-2xl font-bold">Submit a Request</h1>
      {success && (
        <p className="text-center text-green-500">
          Request submitted successfully!
        </p>
      )}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a brief title for your request"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide detailed information about your request"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Admin</label>
        <select
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Admin</option>
          {admins.map((admin) => (
            <option key={admin.id} value={admin.id}>
              {admin.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Priority (optional)
        </label>
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high")
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Attachments (optional)
        </label>
        <div
          {...getRootProps()}
          className={`mt-1 flex w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed px-3 py-2 text-sm ${
            isDragActive ? "border-indigo-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        {attachments.length > 0 && (
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
            {attachments.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isLoading
            ? "cursor-not-allowed bg-indigo-400"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isLoading ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
