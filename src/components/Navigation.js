import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar
        className="navigation"
        variant="dark"
        style={{ backgroundColor: "#6495ed" }}
        fixed="top"
        expand="lg"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-item mr-3">
              GssTrading3
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link className="navbar-item">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navbar-item">About</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Services" id="basic-nav-dropdown">
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
              <LinkContainer to="/contact">
                <Nav.Link className="navbar-item">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              <LinkContainer to="/admin">
                <Nav.Link className="navbar-item">Admin</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="navbar-item">Log In</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title={<i className="fa fa-user-circle"></i>}
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/user-profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavDropdown.Item>Log Out</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/cart">
                <Nav.Link className="navbar-item">
                  <i className="fa fa-shopping-cart"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
