import { useState, useEffect } from "react";
import { Link } from "react-router-dom";   // ⬅️ import Link

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        Recipe Sharing Platform 👩‍🍳
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl border border-gray-200 shadow-md 
                       hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300
                       flex flex-col overflow-hidden"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm flex-grow">{recipe.summary}</p>

              {/* Link Button */}
              <Link
                to={`/recipe/${recipe.id}`}   // ⬅️ link to detail page
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg 
                           hover:bg-green-700 transition-colors duration-300 self-start"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
