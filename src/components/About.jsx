import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. The restaurant 
            features a locally-sourced menu with daily specials.
          </p>
          <p>
            Founded in 2010 by brothers Mario and Adrian, Little Lemon brings 
            the flavors of the Mediterranean to Chicago. Our chefs draw inspiration 
            from Italian, Greek, and Turkish cuisine.
          </p>
          <p>
            We pride ourselves on using fresh, locally-sourced ingredients to create 
            dishes that are both familiar and exciting. Every dish tells a story of 
            tradition, family, and passion for good food.
          </p>
        </div>
        <div className="about-images">
          <div className="about-image-main">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant interior"
            />
          </div>
          <div className="about-image-secondary">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w-800&q=80" 
              alt="Chefs preparing food"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;