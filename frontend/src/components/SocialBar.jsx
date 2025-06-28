import React, { useState } from 'react';
import { FaFacebookF, FaYoutube, FaSearch, FaInstagram } from 'react-icons/fa';


const SocialBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="social-bar">
      <div className="icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="icon facebook" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon youtube" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <button onClick={() => setShowSearch(!showSearch)} className="search-button">
          <FaSearch className="icon search" />
        </button>
      </div>

      <div className={`search-container ${showSearch ? 'show' : ''}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SocialBar;
