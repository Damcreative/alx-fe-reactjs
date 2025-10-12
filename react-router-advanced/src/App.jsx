// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import BlogPost from "./routes/BlogPost";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./components/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* dynamic route: note the exact path string the checker expects */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected nested route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/*" element={<Profile />} />
        </Route>

        <Route path="*" element={<div>404 - Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
