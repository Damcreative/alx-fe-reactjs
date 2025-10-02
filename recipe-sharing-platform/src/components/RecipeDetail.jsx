import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Back Button */}
      <Link
        to="/"
        className="text-green-700 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Recipes
      </Link>

      {/* Recipe Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
