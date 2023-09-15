import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import styles from "./Header.module.css";
function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg border-bottom">
      <Container className="container-fluid">
        <h1>Simple Header</h1>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Nav.Link className="nav-link active" aria-current="page" to="/">
              Home
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="nav-link" to="/">
              Features
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="nav-link" to="/">
              Pricing
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="nav-link" to="/">
              FAQs
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="nav-link" to="/">
              About
            </Nav.Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;
