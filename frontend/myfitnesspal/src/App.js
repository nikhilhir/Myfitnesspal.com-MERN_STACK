import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import {Routes,Route} from 'react-router-dom'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome_signup from "./Components/Welcome_signup";
import Weightgoal from "./Components/Weightgoal";
import ActivityLevel from "./Components/ActivityLevel";
import WhichSex from "./Components/WhichSex";
import HeightAndWeight from "./Components/HeightAndWeight";
import EmailPassword from "./Components/EmailPassword";
import Username from "./Components/Username";
import Calories from "./Components/Calories";
function App() {
  return (
    <div className="App">
      {/* <Welcome_signup/> */}
      <Routes>
        <Route path="/" element={ <Calories/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
