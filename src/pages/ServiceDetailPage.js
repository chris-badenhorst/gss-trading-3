import React from "react";
import { Container, Col, Row, ListGroup, Card, Button } from "react-bootstrap";

const HowItWorksPage = () => {
  return (
    <>
      <div className="pt-5"></div>
      <Container className="mt-5 pt-4">
        <Row>
          {/* Main Content */}
          <Col md={8}>
            <ListGroup variant="flush">
              {/* Section: How it Works */}
              <ListGroup.Item>
                <h2 className="color-blue">How it Works</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  Discover the seamless process of transforming your ideas into
                  reality with our wide range of services. Here's a step-by-step
                  guide on how it works:
                </p>
                <ol>
                  <li>
                    <strong className="color-blue">Initiate:</strong> Start by
                    clicking the "Get a Survey" button. This will prompt you to
                    share your specific requirements and preferences with
                    GssTrading.
                  </li>
                  <li>
                    <strong className="color-blue">Customize:</strong> Tailor
                    your request to your exact needs. Whether it's a unique
                    design, specific materials, or special features, GssTrading
                    will strive to accommodate your preferences.
                  </li>
                  <li>
                    <strong className="color-blue">Survey and Quote:</strong>{" "}
                    GssTrading will conduct a thorough survey based on your
                    input and provide you with a detailed quote. Expect
                    transparency and accuracy in the pricing.
                  </li>
                  <li>
                    <strong className="color-blue">Confirmation:</strong> Once
                    you receive the quote, review the details and confirm your
                    requirements. GssTrading is committed to delivering what you
                    envision.
                  </li>
                  <li>
                    <strong className="color-blue">Commence:</strong> Upon
                    confirmation, the process begins. Trust in our skilled
                    craftsmen and innovative solutions to bring your vision to
                    life.
                  </li>
                </ol>
                <p>
                  Experience the convenience of obtaining a quote with just a
                  click, and let GssTrading turn your dreams into reality.
                </p>
              </ListGroup.Item>

              {/* Section: Additional Information */}
              <ListGroup.Item>
                <h2 className="color-blue">Additional Information</h2>
                <p>
                  Explore additional features and details about our
                  comprehensive services. From sustainable practices to
                  cutting-edge technology, we go the extra mile to meet your
                  expectations.
                </p>
              </ListGroup.Item>

              {/* Section: Contact Us */}
              <ListGroup.Item>
                <h2 className="color-blue">Contact Us</h2>
                <p>
                  Have questions or need assistance? Feel free to contact our
                  dedicated team. We're here to help you with any inquiries
                  regarding our building services or to provide personalized
                  guidance for your project.
                </p>
                <address>
                  <strong className="color-blue">
                    GssTrading3 Headquarters
                  </strong>
                  <br />
                  15 Darbez Street
                  <br />
                  Gauteng, Vanderbilpark
                  <br />
                  <a href="mailto:info@gss-trading.com">info@gss-trading.com</a>
                  <br />
                  <a href="tel:+123456789">+1 (234) 567-89</a>
                </address>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Sidebar */}
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "24rem", height: "32rem" }}>
              <Card.Img
                variant="top"
                src="images/building.jpg"
                loading="lazy"
              />
              <Card.Body>
                <Card.Title>Building</Card.Title>
                <Card.Text>
                  Explore our range of building services, ensuring quality
                  craftsmanship and innovative solutions to bring your vision to
                  life.
                </Card.Text>
                <Button variant="primary">Get a Survey</Button>
                <i className="fa fa-arrow-left mx-3"></i>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HowItWorksPage;
