import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Premium from "./pages/Premium"
import About from "./pages/About";
import HomePage from "./Components/HomePage";

import Footer from "./Components/Footer";
import Myhome from "./pages/Myhome";
function App() {
  return (
    <div className="App">
      {/* <Welcome_signup/> */}
      <TopNavbar/>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/myhome" element={<Myhome/>}/>
      </Routes>
      {/* <HomePage/> */}
      <Footer/>
      {/* <About/> */}
    </div>
  );
}

export default App;
