import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiPhp,
    DiAws,
    DiLaravel
} from "react-icons/di";
import {
    SiRedis,
    SiServerless,
    SiPostgresql,
    SiVuedotjs
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiPhp title="PHP"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 title="Javascript"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython title="Python"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs title="Node.js"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact title="React.js"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiLaravel title="Laravel"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiServerless title="Serverless"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit title="Git"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVuedotjs title="Vue.js"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis title="Redis"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql title="Postgress SQL"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb title="MongoDB"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAws title="AWS"/>
            </Col>
        </Row>
    );
}

export default Techstack;
