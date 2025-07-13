// src/data/dummyFilings.ts

import type { Filing } from "../components/RecentFilingsTable";

export const dummyFilings: Filing[] = [
  {
    id: "F001",
    customer: "ABC Logistics",
    status: "Pending",
    submittedAt: "2025-07-10",
  },
  {
    id: "F002",
    customer: "Global Shippers",
    status: "Awaiting Approval",
    submittedAt: "2025-07-11",
  },
  {
    id: "F003",
    customer: "Fast Freight",
    status: "Completed",
    submittedAt: "2025-07-09",
  },
  {
    id: "F004",
    customer: "Portwise Traders",
    status: "Pending",
    submittedAt: "2025-07-12",
  },
];
