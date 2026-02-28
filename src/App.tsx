import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryView from "./pages/CategoryView";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio/:categorySlug" element={<CategoryView />} />
      </Routes>
    </Router>
  );
}
