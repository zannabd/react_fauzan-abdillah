import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateForm() {
    const errors = {};
    if (!/[@/#{}$]/.test(formData.email)) {
      errors.email = "Email tidak valid";
    }
    if (formData.password.length < 8) {
      errors.password = "Minimal 8 karakter";
    }
    return errors;
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const formErrors = validateForm();
  //   setErrors(formErrors);

  //   if (Object.keys(formErrors).length === 0) {
  //     console.log("Data Login : ", formData);
  //   }
  // }

  function handleLogin() {
    // Simulasi data login berhasil
    const user = { email: formData.email, isLoggedIn: true };
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User logged in:", user);
    // Redirect ke halaman tertentu setelah login
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      handleLogin();
    }
  }

  const button = {
    color: "#fff",
  };

  return (
    <Container className="row justify-content-center">
      <Col className="col-md-4 my-4">
        <h2 className="text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" id="email" name="email" className="form-control border border-2" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </Row>
          <Row>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" id="password" name="password" className="form-control border border-2" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
          </Row>
          <Row>
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
            <p>
              Silakan registrasi
              <button className="btn btn-primary m-3" style={button}>
                <Link to="/register">Register</Link>
              </button>
            </p>
          </Row>
        </Form>
      </Col>
    </Container>
  );
}
