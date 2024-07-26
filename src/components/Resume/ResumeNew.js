import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./zae.css"

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    tempErrors.name = name ? '' : 'Ce champ est requis.';
    tempErrors.email = email ? '' : 'Ce champ est requis.';
    tempErrors.message = message ? '' : 'Ce champ est requis.';
    if (email) {
      tempErrors.email = /\S+@\S+\.\S+/.test(email) ? '' : 'Email invalide.';
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulaire soumis avec succès', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      setSubmitted(true);
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
    }
  };

  return (
    <Container className="contact-page">
      <Row>
        <Col>

          <Form onSubmit={handleSubmit}>
          <h1>Contactez-moi</h1>
          <p></p>
            <Form.Group className="form-group" controlId="name">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={nameRef}
                isInvalid={!!errors.name}
                placeholder="Entrez votre nom"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-group" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                ref={emailRef}
                isInvalid={!!errors.email}
                placeholder="Entrez votre adresse email"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form-group" controlId="message">
            <Form.Control
                  as="textarea"
                  rows={5} 
                  className="textarea-large" 
                  name="message"
                  ref={messageRef}
                  isInvalid={!!errors.message}
                  placeholder="Entrez votre message"
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
            {submitted && <div className="success-message">Message envoyé avec succès !</div>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;