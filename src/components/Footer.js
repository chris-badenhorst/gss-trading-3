import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white p-4">
      <Row className="text-center">
        <Col md={4}>
          <p className="mb-2">Follow us on social:</p>
          <div className="social-icons">
            <p>
              Instagram:
              <a
                className="px-2"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </p>
            <p>
              Facebook:
              <a
                className="px-2"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </p>
            <p>
              TikTok:
              <a
                className="px-2"
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </p>
            <p>
              WhatsApp:
              <a
                className="px-2"
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </p>
          </div>
          <hr />
        </Col>
        <Col md={4}>
          <p>Gsstrading3 &copy; 2023</p>
          <hr />
        </Col>
        <Col md={4}>
          <p className="mb-2">Contact us:</p>
          <p>Email: GssTrading3@gmail.com</p>
          <p>WhatsApp: 083 858 8594</p>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
