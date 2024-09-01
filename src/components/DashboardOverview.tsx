import React from "react";

function DashboardOverview({ stats }) {
  return (
    <div className="rounded bg-white p-4 shadow">
      <h2 className="mb-2 text-xl font-semibold">Dashboard Overview</h2>
      <p>Pending Requests: {stats.pending}</p>
      <p>Average Response Time: {stats.avgResponseTime}</p>
    </div>
  );
}

export default DashboardOverview;
