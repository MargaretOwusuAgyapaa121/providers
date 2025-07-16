

// export default Navbar;
import React, { useState } from 'react';
import { FaPlus, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img className="img" src="/assets/image/logo/logo-bg.png" alt="Logo" />
        </a>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>

        <li className="dropdown">
          <a href="/">About <FaPlus className="plus" /></a>
          <ul className="dropdown-content">
            <li><a href="/OurStory">Our Story</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Bio">Biography</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/sermonevent">Sermons <FaPlus className="plus" /></a>
          <ul className="dropdown-content">
            <li><a href="/Sermonevent">Sermons</a></li>
            <li><a href="/EventPage">Events</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="/gallery">News Media <FaPlus className="plus" /></a>
          <ul className="dropdown-content">
            <li><a href="/Gallery">Gallery</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="/MissionProject">Platform <FaPlus className="plus" /></a>
          <ul className="dropdown-content">
            <li><a href="/MissionProject">Mission Project</a></li>
            <li><a href="/ApostolicMission">Apostolic Ministry</a></li>
          </ul>
        </li>

        <li><a href="/Contact">Contact Us</a></li>
        <li><a href="/Donate">Donate</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
