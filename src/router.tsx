// src/router.tsx
import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Help = lazy(() => import("./pages/Help"));
const Filings = lazy(() => import("./pages/Filings"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));

// Reusable wrapper to delay showing fallback
const DelayedFallback = ({
  children,
  delay = 300,
  fallback = <Loader />,
}: {
  children: React.ReactNode;
  delay?: number;
  fallback?: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return <Suspense fallback={show ? fallback : null}>{children}</Suspense>;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <DelayedFallback>
            <Login />
          </DelayedFallback>
        }
      />

      <Route
        element={
          <DelayedFallback>
            <DashboardLayout />
          </DelayedFallback>
        }
      >
        <Route
          path="/dashboard"
          element={
            <DelayedFallback>
              <Dashboard />
            </DelayedFallback>
          }
        />
        <Route
          path="/filings"
          element={
            <DelayedFallback>
              <Filings />
            </DelayedFallback>
          }
        />
        <Route
          path="/customers"
          element={
            <DelayedFallback>
              <Customers />
            </DelayedFallback>
          }
        />
        <Route
          path="/help"
          element={
            <DelayedFallback>
              <Help />
            </DelayedFallback>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
