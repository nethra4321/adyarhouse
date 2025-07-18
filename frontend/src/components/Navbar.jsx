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
          <h1 className="hotel-title">THE ADYAR HOUSE</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/contact" className="no-style-link">
              <FaPhone className="icon" /> CONTACT US
            </Link>
          </li>
          <li>
              <Link to="/rooms" className="no-style-link">
              ROOMS
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
