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
        <Route path="/blog/:postId" element={<BlogPost />} />

        {/* Protected nested route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/*" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
