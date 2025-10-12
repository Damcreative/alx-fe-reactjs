import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return <h2>Viewing Post #{id}</h2>;
};

export default Post;
