import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
// import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <AboutCard />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

//         <Github />
      </Container>
    </Container>
  );
}

export default About;
