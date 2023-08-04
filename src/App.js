import React from "react";
import './App.css';
import Home from "./components/Home";
import StudentData from "./components/StudentData";
import AddStudentData from "./components/AddStudentData";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* nav-bar */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand ms-5" to='/Home'><img src={"../images/icon.png"}></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to='/Home'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/studentdata'>Student Data</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/AddStudentData'>Add Student Data</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Contact'>Contact</Link>
                </li>
              </ul>

              {/* user */}
              <div className="dropdown">
                <img className="dropdown-toggle" src={"../images/login.png"} data-bs-toggle="dropdown" aria-expanded="false"/>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item " href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="studentdata" element={<StudentData/>}></Route>
        <Route path="AddStudentData" element={<AddStudentData/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
