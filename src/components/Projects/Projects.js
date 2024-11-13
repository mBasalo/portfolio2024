import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import soundSeeker from "../../Assets/Projects/sound_seeker.png"
import tomato from "../../Assets/Projects/tomato-web.png.png"
import manage from "../../Assets/Projects/manage-webpage.png"
import odonto from "../../Assets/Projects/dh-odonto.png"
import tictactoe from "../../Assets/Projects/tic-tac-toe.png"
import portfolio from "../../Assets/Projects/portfolio1.png"

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
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio example"
              description="This portfolio showcases web development projects. It highlights expertise in technologies like React, Java Spring Boot, MySQL, and AWS, offering a comprehensive view of the developer's skills and experience."
              ghLink="https://github.com/mBasalo/portfolio-website"
              demoLink="https://portfolio-six-sepia-20.vercel.app/"
            />
          </Col> 

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

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
