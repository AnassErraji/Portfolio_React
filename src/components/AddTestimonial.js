import React, { useState } from 'react';
import './AddTestimonial.css';

function AddTestimonial({ addTestimonial }) {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setSubmitted(false); // Reset submitted state on change
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Ce champ est requis.';
    tempErrors.message = formData.message ? '' : 'Ce champ est requis.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addTestimonial(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        message: ''
      });
    }
  };

  return (
    <div className="add-testimonial-page">
      <h1>Ajouter votre Témoignage</h1>
      {submitted && <div className="success-message">Témoignage envoyé avec succès !</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default AddTestimonial;
