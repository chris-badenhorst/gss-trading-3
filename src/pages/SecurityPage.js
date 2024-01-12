import React from "react";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecurityPage = () => {
  // Array of security services with improved naming conventions
  const securityServices = [
    {
      id: 1,
      name: "CCTV",
      description:
        "Expert installation and maintenance of CCTV systems for surveillance and security.",
      image: "images/cctv_resized.jpg",
    },
    {
      id: 2,
      name: "Alarms",
      description:
        "Professional alarm system installation and configuration for enhanced security measures.",
      image: "images/alarm_resized.jpg",
    },
    {
      id: 3,
      name: "Electric Fencing",
      description:
        "High-quality installation and maintenance of electric fencing systems to secure premises.",
      image: "images/fencing_resized.jpg",
    },
    {
      id: 4,
      name: "Gate & Garage Motors",
      description:
        "Skilled installation and repair of gate and garage motors for convenient access control.",
      image: "images/motors.jpg",
    },
    {
      id: 5,
      name: "Gate & Garage Doors",
      description:
        "Expert replacement and installation services for gate and garage doors.",
      image: "images/doors_resized.jpg",
    },
    {
      id: 6,
      name: "Smoke & Fire Detection Systems",
      description:
        "Installation of advanced smoke and fire detection systems for improved safety.",
      image: "images/smoke_resized.jpg",
    },
  ];

  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col xl={7} lg={7} md={6}>
          {/* Lazy loading for the main security image */}
          <Image
            className="mt-4 px-2 categorie-image"
            fluid
            src="images/security2.jpg"
            loading="lazy"
          />
        </Col>
        <Col className="my-3 py-3" xl={5} lg={5} md={6} sm={10}>
          <h1>Security</h1>
          <div className="color-blue">
            <h3>Elevate Your Spaces with Expert Security Solutions</h3>
          </div>
          <p>
            {/* Improved description */}
            At Gsstrading3, we specialize in delivering exceptional security
            solutions that redefine safety and protection. From cutting-edge
            technology installations to meticulous system configuration, we
            offer comprehensive services to enhance the security of your
            premises. Our team is dedicated to providing top-notch security
            services, ensuring a seamless blend of functionality and peace of
            mind. Choose Gsstrading3 for your security needs, where expertise
            meets excellence.
          </p>
        </Col>
      </Row>

      <Container className="background-blue text-white text-center my-2 py-2">
        <h2>What We Offer</h2>
      </Container>

      <Row>
        <Link to="/detail">
          <p className="color-blue">
            <u>How Does It Work?</u>
          </p>
        </Link>
        {securityServices.map((service) => (
          <Col className="py-1 px-1" key={service.id} md={4}>
            <Card style={{ width: "100%", height: "100%" }}>
              {/* Lazy loading for service images */}
              <Card.Img
                className="card-image"
                variant="top"
                src={service.image}
                loading="lazy"
              />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Container className="background-blue text-white text-center my-2 py-2">
        <h2>Skeptical?</h2>
      </Container>
    </Container>
  );
};

export default SecurityPage;
