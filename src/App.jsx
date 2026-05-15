import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import Loader from "./utils/Loader";
// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Sale = lazy(() => import("./pages/Sale"));
const Purchase = lazy(() => import("./pages/Purchase"));
const Inventory = lazy(() => import("./pages/Inventory"));
const Account = lazy(() => import("./pages/Account"));
const Settings = lazy(() => import("./pages/Settings"));
const Help = lazy(() => import("./pages/Help"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Tax = lazy(() => import("./pages/Tax"));
const RevenueDetails = lazy(() => import("./pages/RevenueDetails"));
const TotalProducts = lazy(() => import("./pages/TotalProducts"));
const CustomerOutstanding = lazy(() => import("./pages/CustomerOutstanding"));




function App() {
 

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="sale" element={<Sale />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="tax" element={<Tax />} />
            <Route path="revenue-details" element={<RevenueDetails />} />
            <Route path="total-products" element={<TotalProducts />} />
            <Route path="customer-outstanding" element={<CustomerOutstanding />} />
          </Route>



        </Routes>
      </Suspense>
    </>
  );
}

export default App;
