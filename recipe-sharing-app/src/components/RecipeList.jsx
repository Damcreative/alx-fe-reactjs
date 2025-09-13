import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const displayRecipes =
    filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          {/* Wrap title in a Link so it navigates to /recipe/:id */}
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
