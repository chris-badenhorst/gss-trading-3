import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container>
      {/* Empty space for better readability */}
      <div className="pt-3 mt-5"> </div>

      {/* Contact Banner */}
      <Container
        style={{
          backgroundImage: "url('images/pointing.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "85vh",
        }}
      >
        <Container className="text-center py-4 text-white">
          <h1>Contact Us</h1>
          <h3>Let our friendly staff guide and help you to get a quote</h3>
        </Container>
      </Container>

      {/* Contact Information */}
      <Row className="mt-3">
        <Col
          className="my-2 text-white"
          style={{
            backgroundColor: "#6495ed",
            border: "solid",
            borderColor: "white",
          }}
          md={4}
        >
          <h3>
            Call:
            <br /> 083 858 84 94
          </h3>
          <p>
            For real-time assistance, reach out to us via phone. Speak directly
            with our knowledgeable staff for immediate guidance and quotes.
          </p>
        </Col>

        <Col
          className="my-2 text-white"
          style={{
            backgroundColor: "#6495ed",
            border: "solid",
            borderColor: "white",
          }}
          md={4}
        >
          <h3>
            WhatsApp:
            <br /> 092 829 2928
          </h3>
          <p>
            Contact us through WhatsApp for quick responses. Our team is ready
            to assist you with any inquiries or quotes via text.
          </p>
        </Col>

        <Col
          className="my-2 text-white"
          style={{
            backgroundColor: "#6495ed",
            border: "solid",
            borderColor: "white",
          }}
          md={4}
        >
          <h3>
            Email:
            <br /> Gsstrading3.co.za
          </h3>
          <p>
            For non-urgent matters, drop us an email. Please note that responses
            via email may take longer, but we'll ensure thorough addressing of
            your queries.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
