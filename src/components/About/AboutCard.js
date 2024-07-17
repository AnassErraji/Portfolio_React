import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, je suis <span className="purple">Erraji Anass </span>
            du <span className="purple"> Casablanca, Morroco.</span>
            <br /> Je suis étudiant en dernière session 
            en programmation informatique à La Cité Collégial.
            <br />
            <br />
            A part le codage, j'aime faire d'autres activités!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Jouer au football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Efforcez-vous de construire des choses qui font ta différence en forme de tache!"{" "}
          </p>
          <footer className="blockquote-footer">Anass</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
