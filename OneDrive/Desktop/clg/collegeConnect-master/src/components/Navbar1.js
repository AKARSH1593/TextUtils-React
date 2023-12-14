import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css'; // Import a custom CSS file for styling
import { IoStar } from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa6';
import Akarsh_Image from './imgs/Akarsh_Image.jpg'

export default function Navbar1() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger custombg">
        <div className="container-fluid">
          <span className="navbar-icon">
          <IoStar style={{fontSize:'4vh',backgroundColor:'transparent',color:'White',marginLeft:'0'}}/>
          </span>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu pink-dropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Blog/News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Partnerships
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </Link>
                <ul className="dropdown-menu pink-dropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Social Networking
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Academic Resourses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Career Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      User Engagement
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Privacy Controls
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get Involved
                </Link>
                <ul className="dropdown-menu pink-dropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Feedback/Survey
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Alumni Network
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      User Dashboard
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </Link>
                <ul className="dropdown-menu pink-dropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Contact Information
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Help/Support
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center', fontSize: '2.5rem',paddingLeft:'9vw' }}>
              <a href="#" style={{color:'white',paddingRight:'1vw'}}><IoSearch /></a>
              <a href="#" style={{color:'white'}}><FaRegBell /></a>
              <img src={Akarsh_Image} alt="" style={{width:'3vw',height:'5vh',borderRadius:'50%'}}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
