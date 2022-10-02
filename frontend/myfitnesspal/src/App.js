import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import About from "./pages/About";

import BlogHomepage from "./Components/BlogHomepage";

import HomePage from "./Components/HomePage";
// import Footer from "./Components/Footer";
import { Exercise } from "./pages/Exercise";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
