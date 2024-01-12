import React from "react";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlumbingPage = () => {
  // Array of plumbing services with improved naming conventions
  const plumbingServices = [
    {
      id: 1,
      name: "Repairs to Leaking Pipes and Taps",
      description:
        "Expert plumbing services for repairing leaks in pipes and taps.",
      image: "images/plumbing-repair_resized.jpg",
    },
    {
      id: 2,
      name: "Installation and Repairs to Geysers",
      description:
        "Professional services for geyser installation and repairs in residential and commercial spaces.",
      image: "images/geyser_resized.jpg",
    },
    {
      id: 3,
      name: "Re-Routing of Pipes",
      description:
        "High-quality plumbing services for re-routing pipes to optimize water distribution.",
      image: "images/re-routing-pipes_resized.jpg",
    },
    {
      id: 4,
      name: "Blocked Drains",
      description:
        "Skilled plumbing services to address and resolve blocked drains efficiently.",
      image: "images/drains_resized.jpg",
    },
  ];

  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col xl={7} lg={7} md={6}>
          {/* Lazy loading for the main plumbing image */}
          <Image
            className="mt-4 px-2 categorie-image"
            fluid
            src="images/plumbing.jpg"
            loading="lazy"
          />
        </Col>
        <Col className="my-3 py-3" xl={5} lg={5} md={6} sm={10}>
          <h1>Plumbing</h1>
          <div className="color-blue">
            <h3>Elevate Your Spaces with Expert Plumbing Solutions</h3>
          </div>
          <p>
            {/* Improved description */}
            At Gsstrading3, we specialize in delivering exceptional plumbing
            solutions that redefine functionality and comfort. From efficient
            pipe repairs to advanced installations, we offer comprehensive
            services to enhance the plumbing systems of your projects. Our team
            is dedicated to providing top-notch plumbing services, ensuring a
            seamless blend of functionality and peace of mind. Choose
            Gsstrading3 for your plumbing needs, where expertise meets
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
        {plumbingServices.map((service) => (
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

export default PlumbingPage;
