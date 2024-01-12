import React from "react";
import { Container, Col, Row, Form, Button, ListGroup } from "react-bootstrap";

/**
 * Checkout Page Component
 * Displays user's address and order details during the checkout process.
 */
const CheckoutPage = () => {
  return (
    <Container>
      {/* Top margin for spacing */}
      <div className="py-5"></div>

      <Row>
        {/* Left Column - User Address Form */}
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>User Address</h1>
              {/* User Address Form */}
              <Form>
                <Form.Group controlId="formProvince">
                  <Form.Label className="color-blue">Province:</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    placeholder="Please enter your province"
                  />
                </Form.Group>

                <Form.Group controlId="formCity">
                  <Form.Label className="color-blue">City:</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    placeholder="Enter your city of residence"
                  />
                </Form.Group>

                <Form.Group controlId="formSuburb">
                  <Form.Label className="color-blue">Suburb:</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    placeholder="Enter your suburb or neighborhood"
                  />
                </Form.Group>

                <Form.Group controlId="formStreet">
                  <Form.Label className="color-blue">Street:</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    placeholder="Enter your street address"
                  />
                </Form.Group>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Right Column - Order Details */}
        <Col className="pt-2" md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>Order Details</h1>
            </ListGroup.Item>

            {/* Order Information */}
            <ListGroup.Item>
              <p>
                You have selected the service for building maintenance. Our team
                will contact you within the next 24 hours to confirm your order
                and provide you with a scheduled date for the next 7 days when
                our technicians will visit your location.
              </p>
            </ListGroup.Item>

            {/* Additional Information */}
            <ListGroup.Item>
              <p>
                We appreciate your choice in gsstrading3, and thank you for
                entrusting us with your maintenance needs. If you have any
                specific requirements or additional details to share, please
                feel free to mention them during our confirmation call.
              </p>
            </ListGroup.Item>

            {/* Closing Message */}
            <ListGroup.Item>
              <p>
                Thank you for choosing gsstrading3. We look forward to serving
                you!
              </p>
            </ListGroup.Item>

            {/* Checkout Button */}
            <ListGroup.Item>
              <Button>Checkout</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
