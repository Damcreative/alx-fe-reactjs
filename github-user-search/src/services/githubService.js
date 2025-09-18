import axios from "axios";

// Advanced Search API
export const fetchAdvancedUserData = async (username, location, repos) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${repos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data.items; // returns list of users
};

