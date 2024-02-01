import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, everyone! I'm <span className="purple">Ujjal Kumar Das </span>
            , hailing from <span className="purple"> Kolkata, India.</span>
            <br />
            I currently hold the position of <span className="purple">Team Leader </span>at
            <span className="purple"> Tier5 Technology Solutions Private Limited</span>.
            <br />
            I graduated with a <span className="purple">Bachelor of Technology (B. Tech.)</span> in
            <span className="purple"> Computer Science and Engineering </span> from the
            <span className="purple"> Academy of Technology</span>.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Crafting Code, Building Tomorrow.!"{" "}
          </p>
          <footer className="blockquote-footer">Ujjal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
