// src/pages/Dashboard.tsx
import React from "react";
import SummaryCard from "../components/SummaryCard";
import RecentFilingsTable from "../components/RecentFilingsTable";
import { dummyFilings } from "../data/dummyFilings";
import { FolderCog, FolderClock, FolderCheck } from 'lucide-react';

const Dashboard: React.FC = () => {
  const pendingCount = dummyFilings.filter(f => f.status === "Pending").length;
  const awaitingCount = dummyFilings.filter(f => f.status === "Awaiting Approval").length;
  const completedCount = dummyFilings.filter(f => f.status === "Completed").length;

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <SummaryCard title="Filings Pending" count={pendingCount} icon={<FolderCog className="w-10 h-10" />} />
        <SummaryCard title="Awaiting Approval" count={awaitingCount} icon={<FolderClock className="w-10 h-10" />} />
        <SummaryCard title="Completed Filings" count={completedCount} icon={<FolderCheck className="w-10 h-10" />} />
      </div>

      <h2 className="text-3xl font-semibold text-gray-700 mb-2 mt-8">Recent Filings</h2>
      <RecentFilingsTable filings={dummyFilings} />
    </div>
  );
};

export default Dashboard;
