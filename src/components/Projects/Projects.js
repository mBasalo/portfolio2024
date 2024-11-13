import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import soundSeeker from "../../Assets/Projects/sound_seeker.png"
import tomato from "../../Assets/Projects/tomato-web.png.png"
import manage from "../../Assets/Projects/manage-webpage.png"
import odonto from "../../Assets/Projects/dh-odonto.png"
import tictactoe from "../../Assets/Projects/tic-tac-toe.png"

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
              imgPath={soundSeeker}
              isBlog={false}
              title="Sound Seeker"
              description="This Full Stack application meets the objective of renting musical instruments. It includes user registration, product management, advanced search, date-based reservations, favorites, and chat. Developed with React, Java Spring Boot, MySQL, and AWS."
              ghLink="https://github.com/Nairb-code/SoundSeeker-UI"
              demoLink="https://soundseeker.davidgarmo.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomato}
              isBlog={false}
              title="TOMATO - Food delivery"
              description="Food delivery platform that allows users to explore different restaurant and menu options, place orders online, and manage food deliveries. It includes restaurant search, dish selection, shopping cart, payment processing, and order tracking."
              ghLink="https://github.com/mBasalo/tomato-food-delivery"
              demoLink="https://tomato-food-delivery-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manage}
              isBlog={false}
              title="Manage - SPA"
              description="Project from Digital House program, a project management tool for software teams. It showcases the use of HTML and CSS, standing out for its structured design and advanced functionality for organization and productivity."
              ghLink="https://github.com/mBasalo/basic-responsive-website"
              demoLink="https://manage-website-theta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={odonto}
              isBlog={false}
              title="DH - Odonto "
              description=" final project from Digital House. It is a web application developed with Vite and React, showcasing advanced frontend development skills. The project stands out for its structured design and advanced functionality, reflecting a strong command of HTML and CSS."
              ghLink="https://github.com/mBasalo/f3-final"
              demoLink="https://mbasalo-frontlll-final.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="The Tic Tac Toe game is a project developed as practice to strengthen web development skills. Built with HTML, CSS, and JavaScript, it stands out for its interactive design and full functionality, allowing two players to compete in a classic game of Tic Tac Toe."
              ghLink="https://github.com/mBasalo/ta-te-ti"
              demoLink="https://ta-te-ti-kappa.vercel.app/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
