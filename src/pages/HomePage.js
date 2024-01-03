import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Row>
        <Col className="text-center my-2" md={12}>
          <h1>What are you looking for?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/building.jpg"
            />
            <Card.Body>
              <Card.Title>
                <span className="color-blue">Building</span>
              </Card.Title>
              <Card.Text>
                Explore our range of building services, ensuring quality
                craftsmanship and innovative solutions to bring your vision to
                life.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/electrical.jpg"
            />
            <Card.Body>
              <Card.Title>
                <span className="color-blue">Electrical</span>
              </Card.Title>
              <Card.Text>
                From installations to repairs, our electrical services guarantee
                safety and efficiency to meet your residential or commercial
                needs.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/plumbing.jpg"
            />
            <Card.Body>
              <Card.Title>
                <span className="color-blue">Plumbing</span>
              </Card.Title>
              <Card.Text>
                Our plumbing experts provide reliable solutions for your
                plumbing needs, ensuring functionality and durability in every
                project.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              fluid
              variant="top"
              src="images/security.jpg"
            />
            <Card.Body>
              <Card.Title>
                <span className="color-blue">Security</span>
              </Card.Title>
              <Card.Text>
                Enhance your security with our state-of-the-art solutions,
                tailored to protect your property and loved ones.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
