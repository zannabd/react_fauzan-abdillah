const StyledNavbar = styled.div`
  background-color: #d9d9d9;
`;

import { Col } from "react-bootstrap";
import styled from "styled-components";

export default function About() {
  return (
    <StyledNavbar>
      <Col className="py-5">
        <div className="mx-5 text-center">
          <h1 className="my-5" id="about">About Us</h1>
          <img className="rounded-3" src="https://picsum.photos/450/300?image=1084" alt="aboutImg" />
        </div>
        <div className="p-5 text-center">
          <p className="fs-3">Kini saatnya semua sadar akan keadaan alam yang kini sudah tak terkendali, bumi sudah masuk kategori mendidih. Mari bersama dalam kontribusi memelihara alam</p>
        </div>
      </Col>
    </StyledNavbar>
  );
}
