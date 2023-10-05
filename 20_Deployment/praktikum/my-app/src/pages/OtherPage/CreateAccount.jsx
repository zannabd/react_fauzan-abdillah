import { Col, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import img1 from "../../assets/img1.png";
import Row from "react-bootstrap/Row";

import React, { useEffect } from "react";
import Header from "../../components/Header/Header";

function CreateAccount() {
  useEffect(() => {
    alert("Welcome");
  }, []);
  return (
    <Container>
      <Header />
      <Container className="m-4">
        <Row className="text-center">
          <Col className="navbar-brand" to="/">
            <Image src={img1} alt="Bootstrap" width={50} height={44} />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <h1>Create Account</h1>
            <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </Col>
        </Row>
      </Container>
      <Row>
        <h2>Detail Form</h2>
        <div className="row justify-content-center">
          <Form action="#" className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputFirstName" className="form-label">
                First name
              </label>
              <input type="text" className="form-control" id="inputFirstName" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputLastName" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control" id="inputLastName" />
            </div>
            <div className="col-12">
              <label htmlFor="inputUsername" className="form-label">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail" placeholder=" you@example.com" />
            </div>
            <div>
              <label htmlFor className="form-label">
                Gender
              </label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="male" />
                <label className="form-check-label" htmlFor="male">
                  {" "}
                  Male{" "}
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="female" />
                <label className="form-check-label" htmlFor="female">
                  {" "}
                  Female{" "}
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="others" />
                <label className="form-check-label" htmlFor="others">
                  {" "}
                  Others{" "}
                </label>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2 (optional)
                </label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment or suite" />
              </div>
              <div className="col-12">
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
                <div className="input-group">
                  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value={1}>Indonesian</option>
                    <option value={2}>United Kingdom</option>
                    <option value={3}>South Korean</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="col-12">
                <label htmlFor="language" className="form-label">
                  Leanguage Spoken :
                </label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="bahasa" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {" "}
                    Bahasa{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="lang" />
                  <label className="form-check-label" htmlFor="lang">
                    {" "}
                    Languange{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="bahasa" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {" "}
                    Bahasa{" "}
                  </label>
                </div>
              </div>
              <div className="d-grid gap-2 col-8 mx-auto">
                <button className="btn btn-primary" type="button">
                  Create Account
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Row>
      <div>
        <h2 className="text-center">List Account</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Address2</th>
              <th>Nationality</th>
              <th>Languange</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>dolor</td>
              <td>sit</td>
              <td>ad piscing</td>
              <td>Elit</td>
              <td>Elit2</td>
              <td>Indonesian</td>
              <td>Bahasa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>dolor</td>
              <td>sit</td>
              <td>ad piscing</td>
              <td>Elit</td>
              <td>Elit2</td>
              <td>United Kingdom</td>
              <td>Languange</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>dolor</td>
              <td>sit</td>
              <td>ad piscing</td>
              <td>Elit</td>
              <td>Elit2</td>
              <td>South Korean</td>
              <td>Others</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default CreateAccount;
