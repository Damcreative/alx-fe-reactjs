import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const recipeId = Number(id); // convert from string
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Editing and Deleting */}
      <EditRecipeForm recipe={recipe} />
    <DeleteRecipeButton recipeId={recipe.id} /> ✅
    </div>
  );
}

export default RecipeDetails;
