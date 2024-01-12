import React from "react";
import { Row, Col, Container, Form, ListGroup } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const AdminPage = () => {
  return (
    <Container>
      {/* Empty space for better readability */}
      <div className="mt-5 py-4"></div>

      {/* Tabs for Orders and Services */}
      <Tabs defaultActiveKey="orders" id="admin-tabs" className="mb-3">
        {/* Orders Tab */}
        <Tab eventKey="orders" title="Orders">
          <Row>
            <Col xs={12}>
              {/* Filters for Orders */}
              <Form>
                <Form.Group as={Row} controlId="services">
                  <Col sm={2}>
                    <Form.Check type="checkbox" label="Building" />
                  </Col>
                  <Col sm={2}>
                    <Form.Check type="checkbox" label="Electrical" />
                  </Col>
                  <Col sm={2}>
                    <Form.Check type="checkbox" label="Plumbing" />
                  </Col>
                  <Col sm={2}>
                    <Form.Check type="checkbox" label="Security" />
                  </Col>
                  <Col sm={2}>
                    <Form.Check type="checkbox" label="Furthest to Nearest" />
                  </Col>
                  <Col sm={2}>
                    <Form.Check type="checkbox" label="Oldest to Newest" />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <hr />

          {/* List of Orders */}
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={2}>
                  <strong>Service</strong>
                </Col>
                <Col xs={3}>
                  <strong>Job</strong>
                </Col>
                <Col xs={3}>
                  <strong>City</strong>
                </Col>
                <Col xs={2}>
                  <strong>Detail</strong>
                </Col>
                <Col xs={1}>
                  <strong>
                    <i className="fa fa-check"></i>
                  </strong>
                </Col>
                <Col xs={1}>
                  <strong>
                    <i className="fa fa-times"></i>
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>

            {/* Sample Order */}
            <div style={{ overflowX: "auto", maxHeight: "400px" }}>
              <ListGroup.Item>
                <Row>
                  <Col xs={2}>
                    <p className="text-primary">Plumbing</p>
                  </Col>
                  <Col xs={3}>
                    <p className="text-primary">Re-routing of pipes</p>
                  </Col>
                  <Col xs={3}>
                    <p className="text-primary">Johannesburg</p>
                  </Col>
                  <Col xs={2}>
                    <p className="text-primary">View</p>
                  </Col>
                  <Col xs={1}>
                    <strong>
                      <h6>
                        <i
                          style={{ color: "green" }}
                          className="fa fa-check"
                        ></i>{" "}
                      </h6>
                    </strong>
                  </Col>
                  <Col xs={1}>
                    <strong>
                      <h6>
                        <i style={{ color: "red" }} className="fa fa-times"></i>{" "}
                      </h6>
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </div>
          </ListGroup>
        </Tab>

        {/* Services Tab */}
        <Tab eventKey="services" title="Services">
          {/* Tabs for Create, Update, and Delete within Services Tab */}
          <Tabs
            defaultActiveKey="create"
            id="service-tabs"
            className="mb-3"
            justify
          >
            {/* Create Tab */}
            <Tab eventKey="create" title="Create">
              <Container>
                {/* Form for Creating a Service */}
                <Form>
                  {/* Category Selection */}
                  <Form.Group as={Row} controlId="category" className="mb-3">
                    <Form.Label column sm={2}>
                      Category
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control as="select" size="sm">
                        <option>Select category</option>
                        <option>Building</option>
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>Security</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  {/* Service Name Input */}
                  <Form.Group as={Row} controlId="serviceName" className="mb-3">
                    <Form.Label column sm={2}>
                      Service Name
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Enter service name"
                      />
                    </Col>
                  </Form.Group>

                  {/* Description Input */}
                  <Form.Group as={Row} controlId="Description" className="mb-3">
                    <Form.Label column sm={2}>
                      Description
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                      />
                    </Col>
                  </Form.Group>

                  {/* Image Upload */}
                  <Form.Group as={Row} controlId="image" className="mb-3">
                    <Form.Label column sm={2}>
                      Image
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="file" />
                    </Col>
                  </Form.Group>

                  {/* Submit Button */}
                  <Form.Group as={Row} controlId="submitBtn" className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </Col>
                  </Form.Group>
                </Form>
              </Container>
            </Tab>

            {/* Update Tab */}
            <Tab eventKey="update" title="Update">
              <Container>
                {/* Form for Updating a Service */}
                <Form>
                  {/* Category Selection */}
                  <Form.Group as={Row} controlId="category" className="mb-3">
                    <Form.Label column sm={2}>
                      Category
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control as="select" size="sm">
                        <option>Select category</option>
                        <option>Building</option>
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>Security</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  {/* Service Name Input */}
                  <Form.Group as={Row} controlId="serviceName" className="mb-3">
                    <Form.Label column sm={2}>
                      Service Name
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Enter service name"
                      />
                    </Col>
                  </Form.Group>

                  {/* Description Input */}
                  <Form.Group as={Row} controlId="Description" className="mb-3">
                    <Form.Label column sm={2}>
                      Description
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                      />
                    </Col>
                  </Form.Group>

                  {/* Image Upload */}
                  <Form.Group as={Row} controlId="image" className="mb-3">
                    <Form.Label column sm={2}>
                      Image
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="file" />
                    </Col>
                  </Form.Group>

                  {/* Submit Button */}
                  <Form.Group as={Row} controlId="submitBtn" className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </Col>
                  </Form.Group>
                </Form>
              </Container>
            </Tab>

            {/* Delete Tab */}
            <Tab eventKey="delete" title="Delete">
              {/* Add content for Delete tab as needed */}
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminPage;
