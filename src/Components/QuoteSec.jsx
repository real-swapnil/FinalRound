import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

const QuoteSec = () => {
  return (
    <div className="bg-light py-5">
      <Container className="d-flex justify-content-center">
        <Container
          className="position-relative text-white p-4 rounded"
          style={{
            backgroundColor: "#333145",
            maxWidth: "1000px",
            width: "100%",
            borderRadius: "5px",
            padding: "2rem",
          }}
        >
          {/* Floating Stats Box */}
          <div
            className="position-absolute bg-primary text-white text-center p-3 rounded shadow d-none d-md-block"
            style={{
              width: "130px",
              left: "-65px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <p className="fs-4 fw-bold mb-1">29K+</p>
            <p className="small mb-2">HAPPY CLIENTS</p>
            <hr className="border-light my-2" />
            <p className="fs-4 fw-bold mb-1">96</p>
            <p className="small">AWARDS WON</p>
          </div>

          {/* Mobile Stats Box (Visible on small screens) */}
          <div className="d-md-none text-center bg-primary text-white p-3 rounded shadow mb-3">
            <p className="fs-4 fw-bold mb-1">29K+</p>
            <p className="small mb-2">HAPPY CLIENTS</p>
            <hr className="border-light my-2" />
            <p className="fs-4 fw-bold mb-1">96</p>
            <p className="small">AWARDS WON</p>
          </div>

          {/* Main Content */}
          <Row className="align-items-center text-center text-md-start">
            <Col xs={12}>
              <h5 className="fw-bold">Facing Any Problem To Get A Quote?</h5>
              <p className="mt-2 text-uppercase">Contact Us Anytime</p>
              <p className="d-flex align-items-center justify-content-center justify-content-md-start">
                <FaPhoneAlt className="me-2 text-primary" />
                Call: +254 888 888 888
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default QuoteSec;
