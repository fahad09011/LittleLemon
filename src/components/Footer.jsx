import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src="https://img.icons8.com/color/96/000000/lemon.png" 
                alt="Little Lemon Logo" 
              />
              <h3>Little Lemon</h3>
            </div>
            <p className="footer-description">
              Bringing the taste of the Mediterranean to Chicago since 2010.
            </p>
            <div className="footer-social">
              <a href="#facebook" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#youtube" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Lemon Street, Chicago, IL 60601</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>(312) 555-LEMON</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@littlelemon.com</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Hours</h4>
            <ul className="footer-hours">
              <li>
                <span>Monday - Thursday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li>
                <span>Friday - Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
          <p className="footer-attribution">
            Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a> | 
            Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;