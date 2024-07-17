import React from 'react';
import './Testimonials.css';

function Testimonials({ testimonials }) {
  return (
    <div className="testimonials-page">
      <h1>Témoignages</h1>
      {testimonials.length > 0 ? (
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun témoignage pour le moment.</p>
      )}
    </div>
  );
}

export default Testimonials;
