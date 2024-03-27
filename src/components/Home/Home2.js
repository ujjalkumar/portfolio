import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaFacebookMessenger
} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've developed a deep affection for programming, and
              I believe I've acquired some knowledge along the way, or so I think... 🤷‍♂️
              <br />
              <br />I am proficient in classic languages such as
              <i>
                <b className="purple"> PHP, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              I am interested in creating innovative
              <i>
                <b className="purple"> web technologies and products.</b>
              </i>
              <br />
              <br />
              I consistently leverage my enthusiasm for product development using
              <b className="purple"> Node.js, PHP, Python, </b> and &nbsp;
              <i>
                <b className="purple">
                   contemporary JavaScript libraries and frameworks
                </b>
              </i>
               &nbsp; such as
              <i>
                <b className="purple"> React.js and Vue.js</b> &nbsp;
              </i>
              whenever the opportunity arises.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://github.com/ujjalkumar"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://twitter.com/ujjal42834920"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/ujjal-kumar-das"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.instagram.com/ujjalkumardas_official"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <AiFillInstagram/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://m.me/100085183327799"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <FaFacebookMessenger/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
