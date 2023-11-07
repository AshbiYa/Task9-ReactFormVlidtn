import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Components/NavbarStyles.css";
import "../routes/Home.css";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = {};

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Invalid Password ";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/Dashboard");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="login-form">
        <h1>Login</h1>
        {loginSuccess ? (
          <div className="success-message">
            Login successfully..You are Redirecting now..
          </div>
        ) : null}

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={submitted && errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <div className="password-input">
              <Form.Control
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={submitted && errors.password}
              />
              <i
                className={`password-toggle ${
                  passwordVisible ? "visible" : ""
                }`}
                onClick={togglePasswordVisibility}
              >
                👁️
              </i>
            </div>
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <p>
          Don't have an account?
          <Link to="/Signup">Signup</Link>
        </p>
      </div>
    </Container>
  );
}

export default Login;
