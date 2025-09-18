import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

// GitHub API instance
const githubAPI = axios.create({
  baseURL: "https://api.github.com/",
  headers: token
    ? { Authorization: `token ${token}` }
    : {}, // only use token if it exists
});

// Example function: Search users
export const searchUsers = async (username) => {
  const response = await githubAPI.get(`/search/users?q=${username}`);
  return response.data.items; // returns array of users
};
