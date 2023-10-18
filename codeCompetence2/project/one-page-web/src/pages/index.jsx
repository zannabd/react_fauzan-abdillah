import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Welcomponent from "../components/Welcome";
import Footer from "../components/Footer";

const StyledIndex = styled.div`
  font-family: "Poppins";
`;

export default function Welcome() {
  return (
    <StyledIndex>
      <Navbar />
      <Welcomponent />
      <Contact />
      <About />
      <Footer />
    </StyledIndex>
  );
}
