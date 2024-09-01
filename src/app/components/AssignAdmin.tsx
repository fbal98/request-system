"use client";
import React from "react";
import { Card, CardContent, Select, SelectItem } from "@shadcn/ui";

function AssignAdmin({ admins, onAssign }) {
  return (
    <Card>
      <CardContent>
        <Select onChange={(e) => onAssign(e.target.value)} className="w-full">
          {admins.map((admin) => (
            <SelectItem key={admin.id} value={admin.id}>
              {admin.name}
            </SelectItem>
          ))}
        </Select>
      </CardContent>
    </Card>
  );
}

export default AssignAdmin;
