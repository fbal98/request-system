import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/ui";

function DashboardOverview({ stats }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Pending Requests: {stats.pending}</p>
        <p>Average Response Time: {stats.avgResponseTime}</p>
      </CardContent>
    </Card>
  );
}

export default DashboardOverview;
