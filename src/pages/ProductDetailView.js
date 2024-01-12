import React from "react";
import { Container, Col, Row, Image, ListGroup } from "react-bootstrap";

const RoofCeilingServiceDetail = () => {
  return (
    <Container>
      <div className="mt-5 pt-5"></div>

      {/* Product Name */}
      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col lg={2}>
              <h2 className="color-blue">Name:</h2>
            </Col>
            <Col lg={10}>
              <span style={{ fontSize: "35px" }}>
                Roofs and Ceilings Services
              </span>
              <hr />
            </Col>
          </Row>
        </ListGroup.Item>

        {/* Product Description */}
        <ListGroup.Item>
          <Row>
            <Col lg={2}>
              <h3 className="color-blue">Description:</h3>
            </Col>
            <Col lg={10} className="d-flex align-items-center pt-2">
              <p>
                <span style={{ fontSize: "20px" }}>
                  Comprehensive services for all your roofing and ceiling needs.
                  We specialize in enhancing the protection, aesthetics, and
                  longevity of your residential or commercial space with our
                  skilled professionals providing tailored solutions for various
                  requirements.
                </span>
              </p>
            </Col>
          </Row>
        </ListGroup.Item>

        {/* Product Image */}
        <ListGroup.Item>
          <Row>
            <Col lg={{ span: 4, offset: 2 }}>
              <Image fluid src="images/roof.jpg" loading="lazy" />
              <hr />
            </Col>
          </Row>
        </ListGroup.Item>

        {/* Welcome Message */}
        <ListGroup.Item>
          <p>
            Welcome to our premier service, where excellence meets craftsmanship
            in the realm of roofs and ceilings. With a dedicated team of skilled
            professionals, we take pride in offering a comprehensive range of
            services designed to elevate the protection, aesthetics, and
            longevity of your residential or commercial space.
          </p>
        </ListGroup.Item>

        {/* List of Services */}
        <ListGroup.Item>
          <p>
            <h3 className="color-blue">Our Comprehensive Services Include:</h3>
            <ol>
              <li>
                <strong>Roof Installations:</strong> Whether you're building a
                new property or replacing an existing roof, our team specializes
                in seamless roof installations. Choose from a variety of
                materials, styles, and colors to enhance the curb appeal and
                functionality of your space.
              </li>
              <li>
                <strong>Ceiling Design and Installation:</strong> Elevate the
                interior aesthetics of your space with our premium ceiling
                design and installation services. Explore a range of styles,
                textures, and materials to complement your unique taste.
              </li>
              <li>
                <strong>Inspections and Maintenance:</strong> Regular
                inspections and maintenance are crucial for preserving the
                integrity of your roof and ceilings. Our team conducts thorough
                assessments and implements preventive measures to keep your
                property in top condition.
              </li>
            </ol>
          </p>
        </ListGroup.Item>

        {/* Contact Information */}
        <ListGroup.Item>
          <p>
            At "Roofs and Ceilings," we don't just build structures; we create
            lasting shields that protect and enhance the beauty of your space.
            Experience the difference with our expert services — where quality
            meets commitment. Contact us today for all your roofing and ceiling
            needs!
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default RoofCeilingServiceDetail;
