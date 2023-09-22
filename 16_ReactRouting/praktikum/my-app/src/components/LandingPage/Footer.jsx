import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #37517e;
  color: #fff;
  padding: 1rem;

  p {
    justify-content: space-between;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    align-self: center;
  }

  #end {
    position: absolute;
    right: 0;
    margin-right: 1rem;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col>
            <p>
              © Copyright <strong>Arsha</strong>. All Rights Reserved
            </p>
          </Col>
          <Col>
            <p id="end">Designed by BootstrapMade</p>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
