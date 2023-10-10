import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import heroImage from "../../assets/heroImage.png";
import styled from "styled-components";

const StyledMain = styled.div`
  background-color: #37517e;
  color: #fff;
  font-family: "Jost", sans-serif;
  align-self: center ;
  
  #link {
    color: white;
    margin-left: 3rem;
    text-decoration: none;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: rgb(0, 166, 255);
  border-radius: 20px;
  color: white;
`;

function Main() {
  return (
    <StyledMain>
      <Container>
        <Row className="py-5">
          <Col>
            <h1>
              <b>Better Solutions For Your Business</b>
            </h1>
            <p>We are team of talented designer making website with Bootstrap</p>
            <Button>
              <strong>Get Started</strong>
            </Button>
            <Link to="/" id="link">
              Watch Video
            </Link>
          </Col>

          <Col className="me-3">
            <img src={heroImage} alt="main" width="500px" />
          </Col>
        </Row>
      </Container>
    </StyledMain>
  );
}

export default Main;
