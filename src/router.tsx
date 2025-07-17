// src/router.tsx
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Help = lazy(() => import("./pages/Help"));
const Filings = lazy(() => import("./pages/Filings"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        }
      />

      <Route
        element={
          <Suspense fallback={<Loader />}>
            <DashboardLayout />
          </Suspense>
        }
      >
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/filings"
          element={
            <Suspense fallback={<Loader />}>
              <Filings />
            </Suspense>
          }
        />
        <Route
          path="/customers"
          element={
            <Suspense fallback={<Loader />}>
              <Customers />
            </Suspense>
          }
        />
        <Route
          path="/help"
          element={
            <Suspense fallback={<Loader />}>
              <Help />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;

