import React from "react";
import Sidebar from "./Sidebar"; // Adjust path as needed
import Header from "./Header";   // Your dynamic header
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col md:ml-64 flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 h-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
