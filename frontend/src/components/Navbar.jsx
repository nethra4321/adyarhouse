// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import '../styles/Layout.css'; 
import Layout from './Layout';

const Navbar = () => {
  return (
      <nav className="layout-navbar">
        <div className="logo-section">
          <Link to="/">
          <img src="/logo2.png" class="logo-img"></img>
          </Link>
          {/* <h1 className="hotel-title">THE ADYAR HOUSE</h1> */}
        </div>
        <ul className="nav-links">
          <li className="left-link">
            <Link to="/contact" className="no-style-link">
              <FaPhone className="icon flipped-icon" />CONTACT US
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
