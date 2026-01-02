import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      rating: 5,
      review: 'The best Mediterranean food I\'ve had outside of Greece! The atmosphere is wonderful and the staff is incredibly friendly.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'James Wilson',
      rating: 4,
      review: 'Little Lemon never disappoints! The Greek salad is my absolute favorite. Fresh ingredients and authentic flavors.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'Sophie Chen',
      rating: 5,
      review: 'I come here every week with my family. The lemon dessert is to die for! Highly recommend for a family dinner.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      name: 'Robert Johnson',
      rating: 5,
      review: 'Fantastic restaurant! The bruschetta is absolutely delicious. Great place for date nights or business lunches.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? 'filled' : ''}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-user">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <span className="testimonial-name">{testimonial.name}</span>
              </div>
              <p className="testimonial-review">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;