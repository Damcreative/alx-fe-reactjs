import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((i) => i.trim());
    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    // Later, you might save to backend or localStorage
    console.log("New Recipe Submitted:", {
      title,
      ingredients: ingredientList,
      steps,
    });

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Add a New Recipe 🍲
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Ingredients (separated by commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Eggs, Flour, Milk"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe the steps to prepare this recipe..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
