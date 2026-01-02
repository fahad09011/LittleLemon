import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist. Experience the taste of the Mediterranean 
            in the heart of Chicago.
          </p>
          <a href="#reservations" className="btn hero-btn">Reserve a Table</a>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Delicious Mediterranean food"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;