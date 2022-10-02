import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import About from "./pages/About";
import HomePage from "./Components/HomePage";
import BlogHomepage from "./Components/BlogHomepage";
import { Allapps } from "./pages/AllappsPage";

import { Exercise } from "./pages/Exercise";
import Footer from "./Components/Footer";
import { SecondaryNav } from "./Components/SecondaryNav";
import Food from "./pages/Food";
import Myhome from "./pages/Myhome";
import { Community } from "./pages/Community";
export default function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname == "/blog" ? null : (
        <>
          <TopNavbar />
          <SecondaryNav />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<BlogHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/app" element={<Allapps />} />
        <Route path="/food" element={<Food />} />
        <Route path="/community" element={<Community />} />
        <Route path="/myhome" element={<Myhome />} />
      </Routes>
      <Footer />
    </div>
  );
}
