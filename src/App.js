import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Accreditation from "./Pages/Accreditation";
import Submissions from "./Pages/Submissions";
import Services from "./Pages/Services";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
