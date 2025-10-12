import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function ProtectedRoute({ redirectTo = "/login" }) {
  const auth = useAuth();
  return auth.isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
