import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="nav-links">
            <Nav.Link href="#" className="active">
              HOME
            </Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">SERVICES</Nav.Link>
            <Nav.Link href="#">BLOG</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
