import { useState } from "react";
import { searchUsers } from "../services/github";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const users = await searchUsers(query);
    setResults(users);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          className="w-full border px-3 py-2 rounded mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>

      <ul>
        {results.map((user) => (
          <li key={user.id} className="border-b py-2">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
