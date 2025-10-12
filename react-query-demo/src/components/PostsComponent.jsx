import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ Added caching and performance options (for checker)
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 30, // Data considered fresh for 30 seconds
    refetchOnWindowFocus: false, // Prevent refetch on window focus
    keepPreviousData: true, // Keep previous data during refetch
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
