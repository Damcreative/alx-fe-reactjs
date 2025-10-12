import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Nav() {
  const auth = useAuth();
  return (
    <nav style={{ marginBottom: 12 }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/blog/abc">Blog post (dynamic)</Link> |{" "}
      <Link to="/profile">Profile (protected)</Link> |{" "}
      <Link to="/login">Login</Link>
      {auth.isAuthenticated && (
        <>
          {" "} | <span>Hi {auth.user.name}</span>
        </>
      )}
    </nav>
  );
}
