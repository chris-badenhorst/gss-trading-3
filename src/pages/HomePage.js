import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Define the HomePage functional component
const HomePage = () => {
  return (
    <>
      {/* Add spacing */}
      <div className="pt-5"></div>

      {/* Header Section */}
      <Container className="header-container" fluid>
        <Container>
          <Row>
            {/* Empty column for spacing */}
            <Col xl={7} lg={7} md={4}></Col>

            {/* Main content column */}
            <Col className="my-3 py-3" xl={5} lg={5} md={8} sm={10}>
              <h1>Welcome to Gsstrading3</h1>
              <div className="color-blue">
                <h3>
                  Your Premier Partner for Plumbing, Building, Security, and
                  Electrical Solutions!
                </h3>
              </div>
              <p>
                At Gsstrading3, we blend expertise and innovation to deliver
                top-notch services in plumbing, building, security, and
                electrical systems. With a customer-centric approach, quality
                craftsmanship, and a commitment to safety, we're your trusted
                choice for creating secure, efficient, and comfortable spaces.
                Discover excellence at Gsstrading3 – Where Quality Meets
                Commitment.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Section asking user's preference */}
      <Row>
        <Col className="text-center my-3" md={12}>
          <h1>Get a free survey today!</h1>
          {/* Important comment: Link to the detailed survey page */}
          <Link to="/detail">
            <p className="color-blue">
              <u>How does it work?</u>
            </p>
          </Link>
        </Col>
      </Row>

      {/* Card Section - Building, Electrical, Plumbing, Security */}
      <Row>
        {/* Building Card */}
        <Col className="my-2 d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/building_resized.jpg"
              loading="lazy"
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
              <Link to="/building">
                {/* Important comment: Link to the Building services page */}
                <Button variant="primary">Explore</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Electrical Card */}
        <Col className="my-2 d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/electrical_resized.jpg"
              loading="lazy"
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
              <Link to="/electrical">
                {/* Important comment: Link to the Electrical services page */}
                <Button variant="primary">Explore</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Plumbing Card */}
        <Col className="my-2 d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              variant="top"
              src="images/plumbing-repair_resized.jpg"
              loading="lazy"
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
              <Link to="/plumbing">
                {/* Important comment: Link to the Plumbing services page */}
                <Button variant="primary">Explore</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Security Card */}
        <Col className="my-2 d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-image"
              fluid
              variant="top"
              src="images/security_resized.jpg"
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>
                <span className="color-blue">Security</span>
              </Card.Title>
              <Card.Text>
                Enhance your security with our state-of-the-art solutions,
                tailored to protect your property and loved ones.
              </Card.Text>
              <Link to="security">
                {/* Important comment: Link to the Security services page */}
                <Button variant="primary">Explore</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

// Export the HomePage component as the default export
export default HomePage;
