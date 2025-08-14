import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css'; 

// Navbar component
const Navbar = () => {
  return (
      <nav className="layout-navbar">
        <div className="logo-section">
          <Link to="/">
          <img src="/logo2.png" className="logo-img" alt="adyar house logo"></img>
          </Link>
        </div>
        <ul className="nav-links">
          <li className="left-link">
            <Link to="/contact" className="no-style-link">
             CONTACT US
            </Link>
          </li>
          <li className="right-link">
              <Link to="/rooms" className="no-style-link">
              ROOMS
            </Link>
          </li>
        </ul>
      </nav>

      
  );
};

export default Navbar;
