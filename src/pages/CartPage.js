import React from "react";
import { Container, Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Cart Page Component
 * Displays user's orders in the cart.
 */
const CartPage = () => {
  return (
    <Container>
      {/* Top margin for spacing */}
      <div className="py-5 my-5"></div>

      {/* Orders heading */}
      <h1>My Orders</h1>

      <Row>
        {/* Left Column - Order List */}
        <Col sm={9}>
          <ListGroup>
            <div style={{ overflowY: "auto", maxHeight: "300px" }}>
              {/* Order Item */}
              <ListGroup.Item>
                <Row>
                  <Col className="my-2" xs={3}>
                    <Image
                      style={{ height: "75px" }}
                      fluid
                      src="images/building.jpg"
                      alt="Building"
                    />
                  </Col>
                  <Col
                    className="d-flex align-items-center justify-content-center"
                    xs={3}
                  >
                    <h4 className="color-blue">Building</h4>
                  </Col>
                  <Col
                    className="d-flex align-items-center justify-content-center"
                    xs={3}
                  >
                    <h4 style={{ color: "red" }}>
                      <i className="fa fa-times"></i>
                    </h4>
                  </Col>
                  <Col
                    className="d-flex align-items-center justify-content-center"
                    xs={3}
                  >
                    <h4 style={{ color: "blue" }}>
                      <i className="fa fa-question"></i>
                    </h4>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Repeat the above item structure for additional orders */}
            </div>
            <hr />
          </ListGroup>
        </Col>

        {/* Right Column - Order Summary */}
        <Col sm={3}>
          <ListGroup>
            <ListGroup.Item>Price: Free</ListGroup.Item>
            <ListGroup.Item>Items: 1</ListGroup.Item>
          </ListGroup>

          {/* Checkout Button */}
          <Link to="/checkout">
            <Button variant="outline-primary" className="mt-2">
              Order
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
