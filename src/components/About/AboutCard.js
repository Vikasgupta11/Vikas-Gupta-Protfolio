import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vikas Gupta </span>
            from <span className="purple"> Mumbai, India.</span>
            <br /> I am a final-year student pursuing a BE (Bachelor's of
            Engineering) in Computer Science Engineering at Mumbai University.
            <br />
            I am <span className="purple" >3 star at  </span>CodeChef and Solved More then <span className="purple">500 </span>Question on LeetCode
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning code into innovation, one line at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Vikas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
