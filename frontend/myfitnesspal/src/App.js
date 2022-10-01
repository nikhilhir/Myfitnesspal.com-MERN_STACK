import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import About from "./pages/About";
<<<<<<< HEAD
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { SecondaryNav } from "./Components/SecondaryNav";
=======
import { Allapps } from "./pages/AllappsPage";
// import HomePage from "./Components/HomePage";
// import Footer from "./Components/Footer";
import { Exercise } from "./pages/Exercise";
>>>>>>> dec85bed0171ab45c1d22f50cafe70aaa0a4fd7d
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
      </Routes>
<<<<<<< HEAD
      <Footer />
=======
      {/* <HomePage/> */}
      {/* <Footer/> */}
      {/* <About/> */}
      {/* <Allapps /> */}
      <Exercise />
>>>>>>> dec85bed0171ab45c1d22f50cafe70aaa0a4fd7d
    </div>
  );
}

export default App;
