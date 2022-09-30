import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      {/* <Welcome_signup/> */}
      <Routes>
        <Route path="/" element={ <TopNavbar/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
