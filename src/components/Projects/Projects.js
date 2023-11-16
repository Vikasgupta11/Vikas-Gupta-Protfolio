import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/img-steg.png";
import editor from "../../Assets/Projects/E-learning.png";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/News-monkey.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Image Stegnography"
              description="This project revolves around the development of a software application or 
              system that leverages advanced image based 
              steganographic method, where User can Encrypt Confidential data
              within an Image or Vedio file, and Decrypt the file to get Data again."
              ghLink="https://github.com/Vikasgupta11/image-steg"
              demoLink="https://vikasgupta11.github.io/image-steg/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Learning"
              description="This Project E-learning Management System where Teacher can Upload their Course on E-learning Platform and 
               and Student can Purchase that course as per price. Technologies used are Html, Css, Javascript,  Ajax and Mysql "
              ghLink="https://github.com/Vikasgupta11/CAPSTONE-PROJECT"
              demoLink="https://github.com/Vikasgupta11/CAPSTONE-PROJECT"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="News Monkey"
              description="Developed a web application using React JS, Bootstrap, and JavaScript, where a user can view News of all categories on onepage."
              ghLink="https://github.com/Vikasgupta11/newsapp"
              demoLink="https://github.com/Vikasgupta11/newsapp"
            />
          </Col>

        

        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
