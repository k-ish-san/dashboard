// src/pages/Dashboard.tsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import RecentFilingsTable from "../components/RecentFilingsTable";
import { dummyFilings } from "../data/dummyFilings";
import { FolderCog, FolderClock, FolderCheck } from 'lucide-react'; // Ensure these are installed: npm install lucide-react

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-[16rem]">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="p-6 bg-gray-100 flex-1">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Adjusted icon size to w-10 h-10 (a common good size for summary cards) */}
            <SummaryCard title="Filings Pending" count={3} icon={<FolderCog className="w-10 h-10" />}/>
            <SummaryCard title="Awaiting Approval" count={4} icon={<FolderClock className="w-10 h-10" />} />
            <SummaryCard title="Completed Filings" count={12} icon={<FolderCheck className="w-10 h-10" />} />
          </div>

          {/* Recent Filings Table */}
          {/* Added some top margin for the heading to space it from summary cards */}
          <h2 className="text-3xl font-semibold text-gray-700 mb-2 mt-8">Recent Filings</h2>
          <RecentFilingsTable filings={dummyFilings} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;