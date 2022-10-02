import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import About from "./pages/About";
import HomePage from "./Components/HomePage";










function App() {
  return (
    <div className="App">
      <TopNavbar />
      <SecondaryNav />
      {/* <Welcome_signup/> */}
      <TopNavbar/>
      <Routes>

        <Route path="/" element={<HomePage />} />


        <Route path="/" element={ <HomePage/>} />
        <Route path="/about" element={ <About/>} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<BlogHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/app" element={<Allapps />} />
      </Routes>
      <Footer />

        <Route path="/premium" element={<Premium/>}/>
        <Route path="/myhome" element={<Myhome/>}/>
        <Route path="/food" element={<Food/>}/>

      </Routes>
  

    </div>
  );
}

export default App;
