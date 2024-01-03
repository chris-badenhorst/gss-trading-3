import React from "react";
import Navigation from "./Navigation";
import { Container, Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="header-container" fluid>
      <Container>
        <Navigation />
        <Row>
          <Col xl={7} lg={7} md={4}></Col>
          <Col className="my-3 py-3" xl={5} lg={5} md={8} sm={10}>
            <h1>Welcome to Gsstrading3</h1>
            <div className="color-blue">
              <h3>
                Your Premier Partner for Plumbing, Building, Security, and
                Electrical Solutions!
              </h3>
            </div>
            <p>
              {" "}
              At Gsstrading3, we blend expertise and innovation to deliver
              top-notch services in plumbing, building, security, and electrical
              systems. With a customer-centric approach, quality craftsmanship,
              and a commitment to safety, we're your trusted choice for creating
              secure, efficient, and comfortable spaces.Discover excellence at
              Gsstrading3 – Where Quality Meets Commitment.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
