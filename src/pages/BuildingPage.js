import React from "react";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BuildingPage = () => {
  // Array of services with improved naming conventions
  const buildingServices = [
    {
      id: 1,
      name: "Roofs and Ceilings",
      description: "Expert roofing and ceiling services.",
      image: "images/roof_resized.jpg",
    },
    {
      id: 2,
      name: "Painting",
      description: "Professional painting solutions for your space.",
      image: "images/painting  (1).jpg",
    },
    {
      id: 3,
      name: "Tiling of Floors and Walls",
      description: "High-quality tiling services for floors and walls.",
      image: "images/tiling_resized.jpg",
    },
    {
      id: 4,
      name: "Brickwork and Plastering",
      description: "Skilled brickwork and plastering services.",
      image: "images/bricks_resized.jpg",
    },
    {
      id: 5,
      name: "Windows and Doorframe Replacements",
      description: "Replacement and installation of windows and doorframes.",
      image: "images/frames_resized.jpg",
    },
    {
      id: 6,
      name: "Foundation Laying",
      description: "Foundation laying services for stability and durability.",
      image: "images/foundation (1).jpg",
    },
  ];

  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col xl={7} lg={7} md={6}>
          {/* Lazy loading for the main building image */}
          <Image
            className="mt-4 px-2 categorie-image"
            fluid
            src="images/building.jpg"
            loading="lazy"
          />
        </Col>
        <Col className="my-3 py-3" xl={5} lg={5} md={6} sm={10}>
          <h1>Building</h1>
          <div className="color-blue">
            <h3>Elevate Your Spaces with Expert Building Solutions</h3>
          </div>
          <p>
            {/* Improved description */}
            Gsstrading3 specializes in delivering exceptional building solutions
            that redefine spaces. From innovative designs to meticulous
            construction, we offer comprehensive services to enhance the
            structural integrity and aesthetics of your projects. Our team is
            dedicated to providing top-notch building services, ensuring a
            seamless blend of functionality and style. Choose Gsstrading3 for
            your building needs, where craftsmanship meets excellence.
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
        {buildingServices.map((service) => (
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
                <Link to="/order">
                  <Button style={{ marginRight: "4px" }} variant="primary">
                    Get a Survey
                  </Button>
                </Link>

                <Link to="/p-detail">
                  <Button variant="primary">View</Button>
                </Link>
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

export default BuildingPage;
