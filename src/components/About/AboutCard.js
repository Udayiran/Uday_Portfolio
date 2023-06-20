import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Uday Kiran </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> I am a final year student pursuing an B.tech
            in CSE at Parul university.
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading NewsPapers
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Beware of an old man in a profession where men usually die young."{" "}
          </p>
          <footer className="blockquote-footer">Uday Kiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;