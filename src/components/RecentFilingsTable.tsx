import React from "react";
import '../index.css'
export interface Filing {
  id: string;
  customer: string;
  status: "Pending" | "Awaiting Approval" | "Completed"; // Make status type specific
  submittedAt: string;
}

interface RecentFilingsTableProps {
  filings: Filing[];
}

const RecentFilingsTable: React.FC<RecentFilingsTableProps> = ({ filings }) => {
  if (!filings.length) {
    return <p className="text-gray-500 p-4">No recent filings.</p>; // Added padding for better display
  }

  // Helper function to get color class based on status
  const getStatusColorClass = (status: Filing['status']): string => {
    switch (status) {
      case "Pending":
        // Use a vibrant yellow for pending, with a light background for readability
        return "text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full text-xs font-semibold";
      case "Awaiting Approval":
        // Use a clear blue for awaiting approval
        return "text-blue-700 bg-blue-100 px-3 py-1 rounded-full truncate overflow-hidden whitespace-wrap text-xs font-semibold";
      case "Completed":
        // Use a strong green for completed
        return "text-green-700 bg-green-100 px-3 py-1 rounded-full text-xs font-semibold";
      default:
        // Fallback for any other unexpected status
        return "text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold";
    }
  };

 return (
  <div className="bg-gray-100 shadow rounded-xl mt-6">
    {/* Wrapper for horizontal and vertical scroll */}
    <div className="overflow-auto max-h-[450px] shadow-gray-400 shadow-sm rounded-xl thin-scrollbar"> {/* Set max height to enable vertical scroll */}
      <table className="min-w-full table-auto text-left">
        <thead className="sticky top-0 bg-gray-300 z-10"> {/* Sticky header */}
          <tr className="text-sm text-gray-700 uppercase">
            <th className="p-3 border-x-2 border-gray-400">Filing ID</th>
            <th className="p-3 border-x-2 border-gray-400">Customer</th>
            <th className="p-3 border-x-2 border-gray-400">Status</th>
            <th className="p-3 border-x-2 border-gray-400">Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {filings.map((f) => (
            <tr key={f.id} className="border-t border-gray-200 hover:bg-gray-200">
              <td className="p-3 border-2 border-gray-400 font-medium text-gray-800">{f.id}</td>
              <td className="p-3 border-2 border-gray-400 text-gray-700">{f.customer}</td>
              <td className="p-3 border-2 border-gray-400">
                <span className={getStatusColorClass(f.status)}>
                  {f.status}
                </span>
              </td>
              <td className="p-3 border-2 border-gray-400 text-gray-700">{f.submittedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default RecentFilingsTable;