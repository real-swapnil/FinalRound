import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import bgShape from "/src/assets/bg-shape-4.png"; // Background Shape
import bannerBg from "/src/assets/baner-bg-2.png"; // Banner Background

const HeroSection = () => {
  return (
    <div className="hero-section position-relative">
      {/* Background Images */}
      <img src={bannerBg} alt="Banner Background" className="banner-bg" />
      <img src={bgShape} alt="Shape" className="bg-shape" />

      <Container className="hero-content text-center text-md-start">
        <Row className="align-items-center justify-content-center">
          <Col lg={8} md={10}>
            <h2 className="hero-title">
              No Queues, No Hassle, No Confusion! —just results
            </h2>
            <p className="hero-text">
              EHR systems centralize patient information, allowing secure access
              and sharing of medical records. They enhance care coordination,
              streamline workflows, and support clinical decisions through
              real-time patient data.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-md-row gap-3 hero-buttons">
              <Button className="primary-btn hero-button">Discover More</Button>
              <Button className="video-btn">
                <span className="play-icon">▶</span> Watch Video
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
