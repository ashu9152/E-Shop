import "./App.css";
import Navbar from "./Components/Navbar";
import Single from "./Components/SingleProduct";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
