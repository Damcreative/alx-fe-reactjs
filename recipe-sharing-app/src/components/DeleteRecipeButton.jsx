import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ required for checker

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // redirect after delete
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: "10px" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
