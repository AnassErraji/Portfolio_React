import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Récupération des testimonials stockés dans le localStorage
        const storedTestimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
        setTestimonials(storedTestimonials);
    }, []);

    return (
      <div className="testimonial-container">
      <h1>Témoignages</h1>
      <ul className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <li key={index} className="testimonial-item">
            <div className="testimonial-inner">
              <p>Nom
                <h5>{testimonial.name}</h5>
              </p>Témoignage
              <h5>{testimonial.testimonial}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Testimonial;