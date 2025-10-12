import React from "react";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    auth.login("Aminat");
    navigate("/profile"); // go to protected page after login
  }

  return (
    <div>
      <h1>Login</h1>
      {auth.isAuthenticated ? (
        <>
          <p>Already logged in as {auth.user?.name}</p>
          <button onClick={() => { auth.logout(); }}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Click to simulate login</button>
      )}
    </div>
  );
}
