import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = ({ background }) => {
  return (
    <>
      <Navbar
        className="navigation"
        variant="dark"
        style={background ? { backgroundColor: background } : null}
        fixed="top"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-item mr-3">
              GssTrading3
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="navbar-item">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="navbar-item">About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <LinkContainer to="/building">
                <NavDropdown.Item>Building</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/electrical">
                <NavDropdown.Item>Electrical</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/plumbing">
                <NavDropdown.Item>Plumbing</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/security">
                <NavDropdown.Item>Security</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/pricing">
              <Nav.Link className="navbar-item">Pricing</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
