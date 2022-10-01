import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import About from "./pages/About";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { SecondaryNav } from "./Components/SecondaryNav";
import { Allapps } from "./pages/AllappsPage";
// import HomePage from "./Components/HomePage";
// import Footer from "./Components/Footer";
import { Exercise } from "./pages/Exercise";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <SecondaryNav />
      {/* <Welcome_signup/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/app" element={<Allapps />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
