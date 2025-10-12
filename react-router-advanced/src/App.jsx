import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import BlogPost from "./routes/BlogPost";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./components/Profile"; // <-- points to components/Profile.jsx

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* dynamic route */}
          <Route path="/blog/:postId" element={<BlogPost />} />

          {/* Protected wrapper for /profile and its nested routes */}
          <Route element={<ProtectedRoute />}>
            {/* note the trailing /* so Profile's internal Routes can work */}
            <Route path="/profile/*" element={<Profile />} />
          </Route>

          <Route path="*" element={<div>404 - Not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
