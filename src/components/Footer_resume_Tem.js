import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer2() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer_2">
      <Row>
        <Col md="4" className="footer-copywright1">
          <h3>Conçu et développé par ERRAJI ANASS</h3>
        </Col>
        <Col md="4" className="footer-copywright1">
          <h3>Copyright © {year} CA</h3>
        </Col>
        <Col md="4" className="footer-body1">
          <ul className="footer-icons1">
            <li className="social-icons1">
              <a
                href="https://github.com/AnassErraji"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons1">
              <a
                href="https://www.linkedin.com/in/anass-erraji-652b11278/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer2;
