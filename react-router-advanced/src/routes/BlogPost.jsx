// src/routes/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // read :id param

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Displaying post with id: <strong>{id}</strong></p>
    </div>
  );
}
