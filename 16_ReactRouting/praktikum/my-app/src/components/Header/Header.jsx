import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// import styles from "./Header.module.css";
function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg border-bottom">
      <Container className="container-fluid">
        <h1>Simple Header</h1>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="my-app/landingpage">
              Landing Page
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="my-app/createaccount">
              Create Account
            </Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;
