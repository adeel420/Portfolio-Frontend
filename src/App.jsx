import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Verify_Email from "./pages/Verify_Email";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Single from "./components/dashboard_subsections/Single";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  // Define known static and dynamic paths
  const knownPaths = ["/", "/signup", "/login", "/verify-email", "/dashboard"];

  const isDashboardSingle = /^\/dashboard\/[^/]+$/.test(location.pathname);
  const isKnownPath =
    knownPaths.includes(location.pathname) || isDashboardSingle;

  // Show footer only on Home page ("/")
  const showFooter = location.pathname === "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<Verify_Email />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Single />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      {showFooter && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
