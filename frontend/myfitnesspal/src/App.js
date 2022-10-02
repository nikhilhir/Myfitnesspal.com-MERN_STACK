import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import About from "./pages/About";
import HomePage from "./Components/HomePage";

<<<<<<< HEAD
import BlogHomepage from "./Components/BlogHomepage";

import HomePage from "./Components/HomePage";
// import Footer from "./Components/Footer";
import { Exercise } from "./pages/Exercise";
import Footer from "./Components/Footer";
=======
>>>>>>> cd75b7e1ede6f95b4159c407c6cc907395eabbda
function App() {
  return (
    <div className="App">
      <TopNavbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<HomePage />} />
=======
      <SecondaryNav />
      {/* <Welcome_signup/> */}
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

>>>>>>> cd75b7e1ede6f95b4159c407c6cc907395eabbda
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<BlogHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
<<<<<<< HEAD
      </Routes>
      <Footer />
=======
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/app" element={<Allapps />} />
      </Routes>
      <Footer />

      <Route path="/premium" element={<Premium />} />
      <Route path="/myhome" element={<Myhome />} />
      <Route path="/food" element={<Food />} />
>>>>>>> cd75b7e1ede6f95b4159c407c6cc907395eabbda
    </div>
  );
}

export default App;
