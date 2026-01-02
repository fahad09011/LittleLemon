import React from 'react';
import './Specials.css';

const Specials = () => {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      icon: '🥗'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$7.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      icon: '🍅'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.99',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      icon: '🍰'
    }
  ];

  return (
    <section className="specials">
      <div className="container">
        <div className="specials-header">
          <h2>This Week's Specials!</h2>
          <a href="#menu" className="btn">Online Menu</a>
        </div>
        
        <div className="specials-grid">
          {specials.map((special) => (
            <div className="special-card" key={special.id}>
              <div className="special-image">
                <img src={special.image} alt={special.name} />
                <div className="special-icon">{special.icon}</div>
              </div>
              <div className="special-content">
                <div className="special-header">
                  <h3>{special.name}</h3>
                  <span className="special-price">{special.price}</span>
                </div>
                <p className="special-description">{special.description}</p>
                <div className="special-footer">
                  <a href="#order" className="special-order">
                    Order for delivery <i className="fas fa-bicycle"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;