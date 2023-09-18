import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import img1 from "../../assets/img1.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const article = {
  title: {
    id: "Buat Produk",
    en: "Create Product",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "id",
      randomNumber: null,
    };
  }

  changeLanguage = () => {
    const newLanguage = this.state.language === "id" ? "en" : "id";
    this.setState({ language: newLanguage });
  };

  randomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100);
    this.setState({ randomNumber: randomNum });
  };

  render() {
    const { language } = this.state;
    const title = article.title[language];
    const description = article.description[language];

    return (
      <Container className="text-center m-5">
        <Row>
          <Col>
            <Image src={img1} alt="Bootstrap" width={50} height={44} />
          </Col>
        </Row>
        <Row>
          <h2>{title}</h2>
          <p>{description}</p>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.randomNumber} variant="secondary">
              Random Number
            </Button>
          </Col>
          <Col>
            <Button onClick={this.changeLanguage}>Ganti Bahasa</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hero;
