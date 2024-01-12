import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";

/**
 * User Registration Page Component
 * Allows users to register with Gsstrading3.
 */
const UserRegisterPage = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Toggles password visibility.
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Row className="d-flex align-items-center justify-content-center">
      <div className="mt-5 pt-5"></div>
      {/* Include Navigation component */}
      <Navigation />
      {/* User Registration Form Container */}
      <Container
        className="my-2 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "white",
          maxWidth: "600px",
          maxHeight: "700px",
          borderRadius: "30px",
        }}
      >
        <div>
          <Col>
            {/* Logo and Header */}
            <h2 className="color-blue">Gsstrading3</h2>
            <h3>Register </h3>
            {/* Registration Form */}
            <Form>
              {/* First Name Input */}
              <Form.Group controlId="formFirstName">
                <Form.Label className="color-blue">First Name:</Form.Label>
                <Form.Control
                  className="my-2"
                  type="text"
                  placeholder="Enter your first name"
                />
              </Form.Group>

              {/* Email Input */}
              <Form.Group controlId="formEmail">
                <Form.Label className="color-blue">Email:</Form.Label>
                <Form.Control
                  className="my-2"
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              {/* Cellphone Number Input */}
              <Form.Group controlId="formNumber">
                <Form.Label className="color-blue">
                  Cellphone Number:
                </Form.Label>
                <Form.Control
                  className="my-2"
                  type="text"
                  placeholder="Enter your Cellphone number"
                />
              </Form.Group>

              {/* Password Input */}
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

              {/* Confirm Password Input */}
              <Form.Group controlId="formConfirmPassword">
                <Form.Label className="color-blue">
                  Confirm Password:
                </Form.Label>
                <div className="password-input d-flex">
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    className="my-2"
                  />
                </div>
              </Form.Group>

              {/* Remember Me Checkbox */}
              <Form.Group controlId="formRememberMe" className="my-3">
                <Form.Check type="checkbox" label="Remember me for 30 days" />
              </Form.Group>

              {/* Submit Button */}
              <Button type="submit" className="btn-block my-2">
                Register
              </Button>
            </Form>

            {/* Login Link */}
            <Form.Text className="text-muted ">
              Have an Account?{" "}
              <Link to="/login">
                <span style={{ color: "#6495ed" }}>Log in</span>
              </Link>
            </Form.Text>
          </Col>
        </div>
      </Container>
    </Row>
  );
};

export default UserRegisterPage;
