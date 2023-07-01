import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Flyn Lee </span>
            from <span className="purple"> Calgary, Canada.</span>
           
            <br />
           
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Self-confidence
            </li>
            <li className="about-activity">
              <ImPointRight /> Hard-working
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem-solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Flyn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
