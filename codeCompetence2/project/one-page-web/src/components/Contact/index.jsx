import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import illustrasi1 from "../../assets/undraw_About_me_re_82bv.png";
import styled from "styled-components";

const StyledContact = styled.div`
  #contsctUs {
    flex-basis: 50%;
  }
  #formInput {
    margin: 2rem;
    flex-basis: 50%;
    align-self: center;
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Input yang Anda Kirim : \n First Name    : ${formData.firstName} \n Last Name    :   ${formData.lastName} \n Email            :   ${formData.email}  \n Message       :  ${formData.message}`);
  }
  return (
    <StyledContact>
      <Container>
        <div className="container my-5" id="contact">
          <div className="container-fluid p-5">
            <Row>
              <Col id="contactUs">
                <h1 className="fs-1 fw-bold">Contact Us</h1>
                <p>Hubungi kami untuk mendapatkan informasi menarik lainnya</p>
                <img src={illustrasi1} alt="illustrasi" width="500" />
              </Col>
              <Col id="formInput">
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <label htmlFor="name" className="form-label">
                        First Name :
                      </label>
                      <input type="text" className="form-control" name="firstName" id="lastname" value={formData.firstName} onChange={handleInputChange} />
                    </Col>
                    <Col>
                      <label htmlFor="lastname" className="form-label">
                        Last Name :
                      </label>
                      <input type="text" className="form-control" name="lastName" id="lastname" value={formData.lastName} onChange={handleInputChange} />
                    </Col>
                  </Row>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email :
                    </label>
                    <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">
                      Message :
                    </label>
                    <textarea className="form-control" name="message" id="message" rows={3} value={formData.message} onChange={handleInputChange} />
                  </div>
                  <div className="d-grid gap-2 col-8 mx-auto mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </StyledContact>
  );
}
