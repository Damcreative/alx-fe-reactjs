// src/components/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{user.name}</h2>
      <p>Email: <span style={{ fontWeight: "bold" }}>{user.email}</span></p>
    </div>
  );
}

export default UserProfile;
