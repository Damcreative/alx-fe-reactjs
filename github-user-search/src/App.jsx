import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          GitHub User Search
        </h1>

        <Routes>
          {/* Home route → Search Page */}
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
