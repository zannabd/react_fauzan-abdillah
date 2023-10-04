import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledAddress = styled.div`
  padding: 2rem;
  font-family: "Jost", sans-serif;

  h2 {
    color: #37517e;
    font-weight: 600;
    font-size: 28px;
  }

  h3 {
    color: #37517e;
    font-weight: 700;
    font-size: 16px;
  }
  li {
    list-style-type: none;
    font-size: 14px;
  }
  #circle {
    height: 36px;
    width: 36px;
    background-color: #47b2e4;
    border-radius: 50%;
  }

  #shape {
    display: flex;
    justify-content: space-evenly;
  }
`;
function Address() {
  return (
    <StyledAddress>
      <Container>
        <div className="d-flex justify-content-evenly py-3">
          <div>
            <h2>ARSHA</h2>
            <p>
              A108 Adam Street <br />
              New York, NY 535022 <br />
              United States <br />
              <br />
              <b>Phone</b>: +1 5589 55488 55 <br />
              <b>Email</b>: info@example.com
            </p>
          </div>
          <div className="carde">
            <h3>Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="carde">
            <h3>Our Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="carde">
            <h3>Our Social Networks</h3>
            <p>
              Cras fermentum odio eu feugiat lide par
              <br />
              naso tierra videa magna derita valies
            </p>
            <div id="shape">
              <div id="circle"></div>
              <div id="circle"></div>
              <div id="circle"></div>
              <div id="circle"></div>
              <div id="circle"></div>
            </div>
          </div>
        </div>
      </Container>
    </StyledAddress>
  );
}

export default Address;
