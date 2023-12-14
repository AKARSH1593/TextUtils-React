// import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar1 from './components/Navbar1';
import Home from './components/Home';
import Navbar2 from './components2/Navbars/Navbar2';
import First from './components2/Section/First';
import SecondPage from './components2/Section/SecondPage';
import ThirdPage from './components2/Section/ThirdPage';

function App() {
  return (
    <>
      <Router>
        <Navbar1/>
        <div className="cont">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
      <Navbar2 />
      <First/>
      <SecondPage/>
      <ThirdPage/>
    </>
  );
}

export default App;
