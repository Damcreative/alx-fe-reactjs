import useAuth from "../auth/useAuth"; // must match your folder exactly
import { Navigate, Outlet } from "react-router-dom";
import React from "react";

export default function ProtectedRoute() {
  const { user } = useAuth(); // checker looks for useAuth

  return user?.loggedIn ? <Outlet /> : <Navigate to="/login" />;
}
