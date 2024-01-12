import React from "react";
import { Container, Image, Row, Col, ListGroup } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container>
      <div className="pt-5"></div>

      {/* Section 1: Our Distinctive Story */}
      <div style={{ backgroundColor: "#6495ed" }}>
        <Container className="mt-5">
          <Row>
            <Col
              xs={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="images/about2_resized.jpg"
                className="rounded-circle about-image"
                fluid
                loading="lazy"
              />
            </Col>
            <Col
              xs={6}
              style={{
                backgroundColor: "#6495ed",
                padding: "20px",
                color: "#fff",
                maxWidth: "600px",
                margin: "0 auto",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="text-center">
                <h1>Our Distinctive Story</h1>
                <p>
                  Founded on principles of unwavering commitment, GssTrading3
                  has seamlessly woven a narrative of excellence and client
                  satisfaction, ascending to the forefront of diverse
                  industries. Our rich history is a testament to a relentless
                  pursuit of perfection, earning the trust of clients seeking
                  top-tier solutions. GssTrading3, as a beacon of success,
                  navigates through various domains with finesse, delivering
                  high-quality services that transcend industry standards. Our
                  commitment to excellence remains unwavering, solidifying our
                  position as a trusted partner for clients with unique needs.
                  The story of GssTrading3 is not just a reflection of past
                  achievements but a promise for a brighter future, where
                  innovation, adaptability, and a dedication to shaping
                  industries will continue to define our journey and make a
                  lasting impact on the global business landscape.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 2: Our Mission */}
      <hr className="hr" />
      <div className="text-center">
        <Container>
          <Row>
            <Col
              style={{ color: "#6495ed" }}
              xs={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <h1>
                  Empowering Environments, Enriching Lives: Our Mission at
                  GssTrading3
                </h1>
                <p>
                  Embedded in the core of GssTrading3's ethos is a mission that
                  goes beyond mere service provision. With a commitment to
                  "Elevating Spaces, Enhancing Lives," we embark on a journey to
                  redefine industry standards and set new benchmarks for quality
                  and reliability. Our mission transcends the ordinary, aiming
                  to elevate living and working spaces through meticulous
                  craftsmanship and innovative solutions. At GssTrading3, client
                  success is not just a goal; it is an unwavering commitment
                  that drives our every endeavor. Through a fusion of
                  creativity, dedication, and a relentless pursuit of
                  excellence, we strive to empower environments and enrich
                  lives. Our mission serves as a guiding force, propelling us
                  forward to shape the future of industries and make a lasting
                  impact on the quality of spaces and the lives we touch.
                </p>
              </div>
            </Col>
            <Col
              xs={6}
              style={{
                padding: "20px",
                color: "#fff",
                maxWidth: "600px",
                margin: "0 auto",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="images/about5_resized.jpg"
                className="rounded-circle about-image"
                fluid
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 3: Core Values */}
      <hr className="hr" />
      <div style={{ backgroundColor: "#6495ed" }}>
        <Container>
          <Row>
            <Col
              xs={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="images/about3_resized.jpg"
                className="rounded-circle about-image"
                fluid
                loading="lazy"
              />
            </Col>
            <Col
              xs={6}
              style={{
                backgroundColor: "#6495ed",
                padding: "20px",
                color: "#fff",
                maxWidth: "600px",
                margin: "0 auto",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="text-center">
                <h1>Core Values</h1>
                <p>
                  Guiding Principles of Excellence: Our commitment to excellence
                  is embedded in our core values. Quality Craftsmanship remains
                  at the forefront of our endeavors, ensuring that every project
                  is executed with precision and meticulous attention to detail.
                  Embracing a Client-Centric Philosophy, we tailor solutions to
                  meet the unique needs of our clients, fostering lasting
                  partnerships. Innovation is not just a buzzword; it's a way of
                  life at GssTrading3. We continually embrace technological
                  advancements and industry trends to provide cutting-edge
                  solutions to our discerning clientele. Our Unwavering
                  Commitment to Safety is non-negotiable. The safety of our
                  clients, employees, and the community is paramount, and we
                  adhere to the highest safety standards to create secure and
                  risk-free environments.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 4: Comprehensive Services */}
      <hr className="hr" />
      <div className="text-center">
        <Container>
          <Row>
            <Col
              style={{ color: "#6495ed" }}
              xs={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <h1>Comprehensive Services</h1>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <span className="color-blue"> Building Solutions:</span>{" "}
                    Explore our range of building services where quality
                    craftsmanship and innovative solutions converge to bring
                    your architectural vision to life.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="color-blue"> Electrical Expertise:</span>{" "}
                    Our electrical services encompass everything from
                    installations to repairs, guaranteeing safety, efficiency,
                    and compliance for residential and commercial spaces.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="color-blue">Plumbing Excellence:</span>From
                    routine repairs to complex installations, our plumbing
                    services are designed to ensure optimal functionality and
                    long-term durability for both residential and commercial
                    properties.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="color-blue">
                      {" "}
                      Advanced Security Solutions:
                    </span>{" "}
                    Safeguard your property and loved ones with our
                    state-of-the-art security solutions, meticulously tailored
                    to meet your unique security requirements.
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col
              xs={6}
              style={{
                padding: "20px",
                color: "#fff",
                maxWidth: "600px",
                margin: "0 auto",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="images/about1.jpg"
                className="rounded-circle about-image"
                fluid
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 5: What Sets GssTrading3 Apart? */}
      <hr className="hr" />
      <div style={{ backgroundColor: "#6495ed" }}>
        <Container>
          <Row>
            <Col
              xs={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="images/about4_resized.jpg"
                className="rounded-circle about-image"
                fluid
                loading="lazy"
              />
            </Col>
            <Col
              xs={6}
              style={{
                backgroundColor: "#6495ed",
                padding: "20px",
                color: "#fff",
                maxWidth: "600px",
                margin: "0 auto",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="text-center">
                <h1>What Sets GssTrading3 Apart?</h1>
                <p>
                  Decades of Experience: With decades of industry experience,
                  GssTrading3 brings a wealth of knowledge and expertise to
                  every project. Client Satisfaction: Our track record of
                  satisfied clients speaks volumes about our commitment to
                  delivering unparalleled excellence. Professional Team:
                  Comprising a team of highly skilled professionals, we are
                  passionate about creating solutions that not only meet but
                  exceed expectations. Cutting-Edge Technology: We stay ahead of
                  the curve by leveraging the latest technological advancements
                  to provide innovative and future-proof solutions.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 6: Distinctive Recognition */}
      <hr className="hr" />
      <div className="text-center">
        <Container>
          <Row>
            <Col
              style={{ color: "#6495ed" }}
              xs={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <h1>
                  Elevating Excellence: GssTrading3's Distinctive Recognition in
                  Transformative Solutions
                </h1>
                <p>
                  GssTrading3 proudly stands as a beacon of excellence, adorned
                  with an impressive array of certifications and distinguished
                  accolades that reflect our unwavering commitment to
                  excellence, innovation, and client satisfaction. These
                  certifications serve as a testament to our adherence to
                  industry standards and the relentless pursuit of perfection in
                  every project we undertake. Beyond tangible awards, our
                  greatest satisfaction comes from delivering unparalleled
                  solutions that elevate and enrich the spaces we touch. Your
                  consideration of GssTrading3 as your partner in transforming
                  spaces is deeply appreciated, and we eagerly anticipate the
                  privilege of exceeding your expectations and contributing to
                  the success of your projects.
                </p>
              </div>
            </Col>
            <Col
              xs={6}
              style={{
                padding: "20px",
                color: "#fff",
                maxWidth: "600px",
                margin: "0 auto",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="images/about6_resized.jpg"
                className="rounded-circle about-image"
                fluid
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Final Section */}
      <hr className="hr" />
    </Container>
  );
};

export default AboutPage;
