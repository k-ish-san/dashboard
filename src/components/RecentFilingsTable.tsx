import React from "react";

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
        return "text-blue-700 bg-blue-100 px-3 py-1 rounded-full text-xs font-semibold";
      case "Completed":
        // Use a strong green for completed
        return "text-green-700 bg-green-100 px-3 py-1 rounded-full text-xs font-semibold";
      default:
        // Fallback for any other unexpected status
        return "text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold";
    }
  };

  return (
    <div className="overflow-x-auto bg-white shadow rounded-xl mt-6">
      <table className="w-full table-auto text-left">
        <thead>
          {/* Header row styling: background, text size, and color */}
          <tr className="bg-gray-200/80 text-sm text-gray-700 uppercase "> {/* Increased text-gray shade, added uppercase */}
            <th className="p-3">Filing ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Status</th>
            <th className="p-3">Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {filings.map((f) => (
            <tr key={f.id} className="border-t border-gray-200 hover:bg-gray-50"> {/* Added border-gray-200 for clarity */}
              {/* Body cell styling: default text color for most cells */}
              <td className="p-3 font-medium text-gray-800">{f.id}</td> {/* Slightly darker for ID */}
              <td className="p-3 text-gray-700">{f.customer}</td> {/* Default body text color */}
              <td className="p-3">
                {/* Apply conditional status color here */}
                <span className={getStatusColorClass(f.status)}>
                  {f.status}
                </span>
              </td>
              <td className="p-3 text-gray-700">{f.submittedAt}</td> {/* Default body text color */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentFilingsTable;