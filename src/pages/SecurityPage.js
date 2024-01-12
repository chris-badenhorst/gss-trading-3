import React from "react";
import Navigation from "../components/Navigation";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";

const SecurityPage = () => {
  const services = [
    {
      id: 1,
      name: "Roofs and Ceilings",
      description: "Expert roofing and ceiling services.",
      image: "images/roof.jpg",
    },
    {
      id: 2,
      name: "Painting",
      description: "Professional painting solutions for your space.",
      image: "images/painting.jpg",
    },
    {
      id: 3,
      name: "Tilings of Floors and Walls",
      description: "High-quality tiling services for floors and walls.",
      image: "images/tiling.jpg",
    },
    {
      id: 4,
      name: "Brickwork and Plastering",
      description: "Skilled brickwork and plastering services.",
      image: "images/bricks.jpg",
    },
    {
      id: 5,
      name: "Windows and Doorframe Replacements",
      description: "Replacement and installation of windows and doorframes.",
      image: "images/frames.jpg",
    },
    {
      id: 6,
      name: "Laying of Foundations",
      description: "Foundation laying services for stability and durability.",
      image: "images/foundation.jpg",
    },
  ];
  return (
    <Container>
      <Navigation mode={"dark"} background={"#6495ed"} />
      <Row className="mt-5 align-items-center">
        <Col xl={7} lg={7} md={4}>
          <Image className="mt-4 px-2" fluid src="images/building.jpg" />
        </Col>
        <Col className="my-3 py-3" xl={5} lg={5} md={8} sm={10}>
          <h1>Building</h1>
          <div className="color-blue">
            <h3>Elevate Your Spaces with Expert Building Solutions</h3>
          </div>
          <p>
            At Gsstrading3, we specialize in delivering exceptional building
            solutions that redefine spaces. From innovative designs to
            meticulous construction, we offer comprehensive services to enhance
            the structural integrity and aesthetics of your projects. Our team
            is dedicated to providing top-notch building services, ensuring a
            seamless blend of functionality and style. Choose Gsstrading3 for
            your building needs, where craftsmanship meets excellence.
          </p>
        </Col>
      </Row>

      <Container className="background-blue text-white text-center my-2 py-2">
        <h2>What we offer</h2>
      </Container>
      <Row>
        {services.map((service) => (
          <Col className="py-1 px1" key={service.id} md={4}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Card.Img
                className="card-image"
                variant="top"
                src={service.image}
              />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary">view</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Container className="background-blue text-white text-center my-2 py-2">
        <h2>Sceptical ?</h2>
      </Container>
    </Container>
  );
};
export default SecurityPage;
