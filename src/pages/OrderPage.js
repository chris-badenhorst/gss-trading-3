import React from "react";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <Container>
      <div className="mt-5 pt-4"></div>
      <Row className="mt-4">
        <Col md={5}>
          <Image src="images/building.jpg" fluid />
          <ListGroup>
            <ListGroup.Item>
              <span className="color-blue">Service:</span>Building{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="color-blue">Estimated amount:</span> Wall-top
              fencing: R180 to R300 per meter Free-standing fencing: R600 to
              R1,500 per meter Electrified barbed wire: R50 to R100 per meter
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="color-blue">Description:</span> uihdiwucgfwef
              wefwefuwefwefw efwefewfwvwavetbry jntryjmniytkyiumretgvwrfrw
              hgethry7jetgb{" "}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <Form>
            <Form.Group controlId="formNumber">
              <Form.Label className="color-blue">Description:</Form.Label>
              <p>
                Note: Please provide any additional details or specifications
                related to your order in the space above. Your input is
                important to us, and we want to ensure that we meet your
                requirements accurately.
              </p>
              <Form.Control className="my-2" as="textarea" />
            </Form.Group>
            <Link to="/cart">
              <Button type="submit" className="btn-block my-2">
                Add to Cart
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
