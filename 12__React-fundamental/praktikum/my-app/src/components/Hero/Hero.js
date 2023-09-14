import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import img1 from "../../assets/img1.png";

import Container from "react-bootstrap/Container";
function Hero() {
  return (
    <Container className="text-center m-5">
      <Row>
        <Col>
          <Image src={img1} alt="Bootstrap" width={50} height={44} />
        </Col>
      </Row>
      <Row>
        <h2>Create Product</h2>
        <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </Row>
    </Container>
  );
}

export default Hero;
