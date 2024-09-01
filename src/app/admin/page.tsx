"use client";
import React, { useState } from "react";
import RequestInbox from "../../components/RequestInbox";
import RequestDetails from "../../components/RequestDetails";
import NotificationSystem from "../../components/NotificationSystem";
import FilterSort from "../../components/FilterSort";
import AssignAdmin from "../../components/AssignAdmin";
import StatusUpdate from "../../components/StatusUpdate";
import Comments from "../../components/Comments";
import SearchBar from "../../components/SearchBar";
import ExportData from "../../components/ExportData";
import DashboardOverview from "../../components/DashboardOverview";

function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [newRequest, setNewRequest] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("urgency");
  const [search, setSearch] = useState("");
  const [stats, setStats] = useState({ pending: 0, avgResponseTime: 0 });

  // ... other state and handlers ...

  return (
    <div className="space-y-4 p-4">
      <DashboardOverview stats={stats} />
      <NotificationSystem newRequest={newRequest} />
      <div className="flex space-x-4">
        <SearchBar onSearch={setSearch} />
        <FilterSort onFilterChange={setFilter} onSortChange={setSort} />
      </div>
      <RequestInbox requests={requests} />
      {selectedRequest && (
        <RequestDetails
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
      <div className="grid grid-cols-2 gap-4">
        <AssignAdmin admins={[]} onAssign={() => {}} />
        <StatusUpdate status="pending" onUpdate={() => {}} />
      </div>
      <Comments comments={[]} onAddComment={() => {}} />
      <ExportData onExport={() => {}} />
    </div>
  );
}

export default AdminDashboard;
