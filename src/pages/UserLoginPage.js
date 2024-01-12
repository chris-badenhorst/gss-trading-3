import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const UserLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Row className="d-flex align-items-center justify-content-center mt-5 pt-5">
      {/* Empty space for better readability */}
      <div className="mt-5 pt-5"></div>

      {/* Login Container */}
      <Container
        className="my-2 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "white",
          maxWidth: "600px",
          maxHeight: "700px",
          borderRadius: "10px",
        }}
      >
        <div>
          {/* Login Form */}
          <Col className="login-container">
            <h2 className="color-blue">Gsstrading3</h2>
            <h3>Log in </h3>
            <Form>
              {/* Email Input */}
              <Form.Group controlId="formEmail">
                <Form.Label className="color-blue">Email:</Form.Label>
                <Form.Control
                  className="my-2"
                  type="text"
                  placeholder="Enter your email"
                />
              </Form.Group>

              {/* Password Input with Toggle Visibility */}
              <Form.Group controlId="formPassword">
                <Form.Label className="color-blue">Password:</Form.Label>
                <div className="password-input d-flex">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="my-2"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="eye-icon mt-3"
                    style={{ height: "20px" }}
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </Form.Group>

              {/* Remember Me Checkbox */}
              <Form.Group controlId="formRememberMe" className="my-3">
                <Form.Check type="checkbox" label="Remember me for 30 days" />
              </Form.Group>

              {/* Submit Button */}
              <Button type="submit" className="btn-block my-2">
                Log in
              </Button>
            </Form>

            {/* Registration Link */}
            <Form.Text className="text-muted ">
              Don't have an Account?{" "}
              <Link to="/register">
                <span style={{ color: "#6495ed" }}>Register</span>
              </Link>
            </Form.Text>
          </Col>
        </div>
      </Container>
    </Row>
  );
};

export default UserLoginPage;
