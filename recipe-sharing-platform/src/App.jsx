import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav className="bg-green-600 text-white px-4 py-3 flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add-recipe" className="hover:underline">Add Recipe</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
