import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home, PageNotFound } from "./pages";
import { Testing } from "./pages/testing";
import { Parent } from "./pages/test4";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/pages" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/icons" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/test4" element={<Parent />} />
      </Routes>
    </>
  );
}

export default App;
