import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Accreditation from "./Pages/Accreditation";
import Submissions from "./Pages/Submissions";
import Services from "./Pages/Services";
import Registration from "./Pages/Registration";
import NotFound from "./Pages/NotFound";
import PasswordReset from "./Pages/PasswordReset";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accreditation" element={user ? <Accreditation /> : <Login />} />
          <Route path="/submissions" element={user ? <Submissions /> : <Login />} />
          <Route path="/services" element={user ? <Services /> : <Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password/:email/:token" element={<PasswordReset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
