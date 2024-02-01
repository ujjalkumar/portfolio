import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import rbg from "../../Assets/Projects/rbg.png";
import chirply from "../../Assets/Projects/chirply.png";
import suicide from "../../Assets/Projects/suicide.png";
import link from "../../Assets/Projects/link.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Latest <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Presenting some of the recent projects I have been involved in.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={rbg}
                isBlog={false}
                title="Red belt gym"
                description="Stop Paying for Multiple Software Programs To Run Your Martial Arts School. The Ultimate CRM, Built For Martial Arts School Owners Do More, Pay Less. Smart Features Never Seen Before- All Built Into Red Belt Gym."
                demoLink="https://www.redbeltgym.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chirply}
              isBlog={false}
              title="Chirply"
              description="Chirply revolutionizes communication with dynamic features like 2-way SMS and phone calls, automated outreach, and ringless voicemails. Enjoy seamless interactions through SMS auto responders, live or pre-recorded calls, and click-to-call widgets. Dive into advanced capabilities with drip campaigns and lead generation, including Google business, Yelp, and domain leads. Chirply's Interactive Voice Response (IVR) ensures efficient call handling, providing pre-recorded responses and routing calls appropriately. Connect your Facebook lead ads effortlessly and explore the simplicity and versatility of Chirply's comprehensive communication suite."
              demoLink="https://chirply.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={link}
              isBlog={false}
              title="Link Wizard"
              description="Link Wizard is a potent link management tool that enables users to create custom short links, offering in-depth analytics and click tracking. Its versatility shines through the ability to add multiple Tracking Pixels to smart links, facilitating thorough data collection. The software goes beyond basic tracking by allowing users to implement custom pixel events, tailoring analytics to specific requirements. Link Wizard stands out as a comprehensive solution, redefining link management with advanced features for optimizing link performance and understanding user engagement."
              demoLink="https://uselinkwizard.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
