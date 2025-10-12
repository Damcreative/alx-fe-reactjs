import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./routes/Home";
import BlogPost from "./routes/BlogPost";
import Profile from "./routes/Profile/Profile";
import ProfileDetails from "./routes/Profile/ProfileDetails";
import ProfileSettings from "./routes/Profile/ProfileSettings";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

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

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>

          <Route path="*" element={<div>404 - Not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
