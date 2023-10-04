import { Col, Container, Form, Row } from "react-bootstrap";

import * as Yup from "yup";
import { useState } from "react";


export default function Regist() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    cofirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function validationSchema() {
    return Yup.object().shape({
      firstName: Yup.string().min(3, "Minimal 3 karakter").required("Harus diisi"),
      lastName: Yup.string().min(3, "Minimal 3 karakter").required("Harus diisi"),
      userName: Yup.string().required("Harus diisi"),
      email: Yup.string().email("Format email tidak valid").required("Harus diisi"),
      password: Yup.string().min(8, "Minimal 8 karakter").required("Harus diisi"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password tidak cocok")
        .required("Harus diisi"),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validationSchema();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Data registrasi:", formData);
    }
  }

  return (
    <Container className="row justify-content-center">
      <Col className="col-md-4 my-4" >
        <h2 className="text-center">Registrasi</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" className="form-control border border-2" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </Row>
          <Row>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" className="form-control border border-2" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </Row>
          <Row>
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" id="username" name="username" className="form-control border border-2" value={formData.username} onChange={handleChange} />
          </Row>
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
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="form-control border border-2" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </Row>
          <button type="submit" className="btn btn-primary mt-3" id="button">
            Daftar
          </button>
        </Form>
      </Col>
    </Container>
  );
}
