import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          {/* Left Side - Text Info */}
          <Col
            xs={12}
            md="auto"
            className="d-flex flex-wrap align-items-center gap-3 justify-content-center justify-content-md-start"
          >
            <span>Payment Options</span>
            <span className="d-flex align-items-center gap-2">
              <FaMapMarkerAlt /> Your Location goes here
            </span>
            <span className="d-flex align-items-center gap-2">
              <FaEnvelope /> youremail@gmail.com
            </span>
          </Col>

          {/* Right Side - Circular Icons */}
          <Col
            xs={12}
            md="auto"
            className="icon-group justify-content-center justify-content-md-end mt-2 mt-md-0"
          >
            <div className="icon-circle">
              <FaLinkedin />
            </div>
            <div className="icon-circle">
              <FaGithub />
            </div>
            <div className="icon-circle">
              <FaInstagram />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
