import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = true; // mock authentication
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
