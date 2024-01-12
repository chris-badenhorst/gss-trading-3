import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Button,
  Image,
} from "react-bootstrap";

/**
 * User Profile Page Component
 * Allows users to view and update their profile details and address information.
 */
const UserProfilePage = () => {
  return (
    <Container>
      {/* Top margin for spacing */}
      <div className="pt-5 mt-4"></div>

      {/* Main content row */}
      <Row>
        {/* Left Column - User Details Form */}
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>User Details</h1>
              {/* User Details Form */}
              <Form>
                <Form.Group controlId="formFirstName">
                  <Form.Label className="color-blue">First Name:</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    placeholder="Enter your first name"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label className="color-blue">Email:</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group controlId="formNumber">
                  <Form.Label className="color-blue">
                    Cellphone Number:
                  </Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    placeholder="Enter your cellphone number"
                  />
                </Form.Group>
                <Button type="submit">Update</Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Right Column - User Address Form */}
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>User Address</h1>
              {/* User Address Form */}
              <Form>
                <Form.Group controlId="formProvince">
                  <Form.Label className="color-blue">Province:</Form.Label>
                  <Form.Control className="my-2" as="select">
                    <option value="">Select...</option>
                    <option>Gauteng</option>
                    <option>Free State</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formCity">
                  <Form.Label className="color-blue">City:</Form.Label>
                  <Form.Control className="my-2" as="select">
                    <option value="">Select...</option>
                    <option>Vaalpark</option>
                    <option>Vanderbijlpark</option>
                    <option>Vereeniging</option>
                    <option>Sasolburg</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSuburb">
                  <Form.Label className="color-blue">Suburb:</Form.Label>
                  <Form.Control
                    className="my-2"
                    type="text"
                    placeholder="Optional"
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
                <Button type="submit">Update</Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* My Orders Section */}
      <Row>
        <Col md={12} className="mt-4">
          <div style={{ maxHeight: "calc(100vh - 400px)", overflowY: "auto" }}>
            <h1>My Orders</h1>
            <h5>Review your order history</h5>
            {/* User Orders Section */}
            <ListGroup>
              <div style={{ overflowY: "auto", maxHeight: "180px" }}>
                <ListGroup.Item style={{ minHeight: "80px" }}>
                  <Row>
                    <Col xs={4}>
                      <Image
                        style={{ height: "70px" }}
                        fluid
                        src="images/building.jpg"
                        alt="Building"
                      />
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={4}
                    >
                      <h4 className="color-blue">Building</h4>
                    </Col>
                    <Col
                      className="d-flex align-items-center justify-content-center"
                      xs={4}
                    >
                      <h4 style={{ color: "red" }}>Not processed</h4>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </div>
              {/* Add more items as needed */}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
