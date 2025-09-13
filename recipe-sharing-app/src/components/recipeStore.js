import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));

export default useRecipeStore;
