import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import portfolio from '../../Images/portfolio.png'
import chess from '../../Images/chess.jpg'
import bot from '../../Images/bot.jpg'
import Tictac from '../../Images/Tictac.jpg'


function Projects() {
  return (
    <Container fluid className="project-section">
  
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
              title="Portfolio"
              description="Developed and launched a personal portfolio website to showcase professional accomplishments, skills, and projects. The website serves as an interactive platform for potential employers and clients to explore my work, experience, and expertise in a visually appealing and user-friendly manner."
              ghLink="https://github.com/udayk17"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess"
              description="I developed a captivating Chess game using React, delivering an immersive and strategic gaming experience."
              ghLink="https://replit.com/@udayk17/Chess"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="ChatBot"
              description="I created a responsive chat bot using HTML and JavaScript, providing an interactive and conversational user experience."
              ghLink="https://replit.com/@udayk17/Message-bot"
            
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tictac}
              isBlog={false}
              title="TicTacToe"
              description="I implemented a Tic Tac Toe game using Python, enabling players to engage in a classic and challenging board game"
              ghLink="https://replit.com/@udayk17/Tic-Tak-To"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;