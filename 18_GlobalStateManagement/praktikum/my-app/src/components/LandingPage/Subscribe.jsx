import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledSubscribe = styled.div`
  background-color: #f3f5fa;

  h3 {
    font-family: "Jost", sans-serif;
    color: #37517e;
    font-weight: 600;
    font-size: 24px;
  }

  p {
    font-family: "Open Sans", sans-serif;
  }

  #inputan {
    max-width: 350px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  input {
    flex: 1;
    border: none;
    padding: 10px;
    border-radius: 20px;
  }

  #subscribe {
    background-color: rgb(0, 166, 255);
    border-radius: 20px;
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
`;
function Subscribe() {
  return (
    <StyledSubscribe>
      <Container>
        <Col className="text-center py-4">
          <Row>
            <h3>Join Our Newsletter</h3>
          </Row>
          <Row>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>{" "}
          </Row>
          <div id="inputan">
            <input type="text" name="teks" id="teks" />
            <button id="subscribe">
              <strong>Get Started</strong>
            </button>
          </div>
        </Col>
      </Container>
    </StyledSubscribe>
  );
}

export default Subscribe;
