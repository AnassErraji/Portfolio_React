import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Je me <span className="purple"> PRESENTE </span> 
            </h1>
            <p className="home-about-body">
            J'aime beaucoup programmé et travaillé des travaux dans le cadre de la programmation, j'ai au moins appris
            quelque chose, je pense… 🤷‍♂️
              <br />
              <br />Je suis amateur des langages classiques comme
              <i>
                <b className="purple"> Java, C#, Javascript, C et Python. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont la création de nouvelles &nbsp;
              <i>
                <b className="purple">Nouveaux Jeux Vidéos </b> ainsi que les domaines liés au {" "}
                <b className="purple">
                Deep Learning et à la vision par ordinateur.
                </b>
              </i>
              <br />
              <br />
              Dans la mesure du possible, j'applique également ma passion au développement des jeux videos en <b className="purple">Python</b> et
              <i>
                <b className="purple">
                  {" "}
                  JAVA.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Pour me trouver</h1>
            <p>
            N'hésitez pas à me <span className="purple">Contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnassErraji"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/?lang=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anass-erraji-652b11278/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
