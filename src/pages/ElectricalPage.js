import React from "react";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ElectricalPage = () => {
  // Array of electrical services with improved naming conventions
  const electricalServices = [
    {
      id: 1,
      name: "Supply and Repair of DB Boxes",
      description:
        "Expert electrical services for the supply and repair of distribution boxes.",
      image: "images/DB-box_resized.jpg",
    },
    {
      id: 2,
      name: "Rewiring of Houses and Buildings",
      description:
        "Professional rewiring solutions for residential and commercial spaces.",
      image: "images/house-rewiring_resized.jpg",
    },
    {
      id: 3,
      name: "Electrical Wiring",
      description:
        "High-quality electrical wiring services for both residential and commercial projects.",
      image: "images/electrical-wiring_resized.jpg",
    },
    {
      id: 4,
      name: "Electrical Installation",
      description:
        "Skilled certification of compliance (COC) services for electrical installations.",
      image: "images/electrical-installation_resized.jpg",
    },
  ];

  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col xl={7} lg={7} md={6}>
          {/* Lazy loading for the main electrical image */}
          <Image
            className="mt-4 px-2 categorie-image"
            fluid
            src="images/electrical2.jpg"
            loading="lazy"
          />
        </Col>
        <Col className="my-3 py-3" xl={5} lg={5} md={6} sm={10}>
          <h1>Electrical</h1>
          <div className="color-blue">
            <h3>Elevate Your Spaces with Expert Electrical Solutions</h3>
          </div>
          <p>
            {/* Improved description */}
            At Gsstrading3, we specialize in delivering exceptional electrical
            solutions that redefine safety and efficiency. From advanced wiring
            to reliable installations, we offer comprehensive services to
            enhance the electrical systems of your projects. Our team is
            dedicated to providing top-notch electrical services, ensuring a
            seamless blend of functionality and peace of mind. Choose
            Gsstrading3 for your electrical needs, where expertise meets
            excellence.
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
        {electricalServices.map((service) => (
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

export default ElectricalPage;
