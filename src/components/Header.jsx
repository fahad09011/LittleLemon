import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img 
            src="https://img.icons8.com/color/96/000000/lemon.png" 
            alt="Little Lemon Logo" 
            className="logo-img"
          />
          <h1 className="logo-text">Little Lemon</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
  <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
  <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
  <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
  <li className="nav-item"><a href="#reservations" className="nav-link">Reservations</a></li>
  <li className="nav-item"><a href="#order" className="nav-link">Order Online</a></li>
  <li className="nav-item"><a href="#login" className="nav-link">Login</a></li>
</ul>
        </nav>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;