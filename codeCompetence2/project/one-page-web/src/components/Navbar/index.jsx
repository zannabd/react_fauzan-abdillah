import styled from "styled-components";

const StyledNavbar = styled.div`
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #d9d9d9;
    padding: 1.5rem;
    z-index: 10000;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }
  ul li {
    list-style-type: none;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: lightgray;
  }
  button:hover {
    color: gray;
  }
`;

export default function Navbar() {
  const scrollToWelcome = () => {
    const welcomeComponent = document.getElementById("welcome");
    welcomeComponent.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactComponent = document.getElementById("contact");
    contactComponent.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutComponent = document.getElementById("about");
    aboutComponent.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledNavbar>
      <nav style={{ position: "fixed", width: "100%", backgroundColor: "lightgray" }}>
        <div style={{ display: "flex", justifyContent: "space-around", listStyleType: "none" }}>
          <h2 className="fs-1 flex-shrink-0">Nature</h2>
        </div>
        <div>
          <ul className="d-flex align-items-center">
            <li className="fs-5">
              <button onClick={scrollToWelcome}>Welcome</button>
            </li>
            <li className="fs-5">
              <button onClick={scrollToContact}>Contact Us</button>
            </li>
            <li className="fs-5">
              <button onClick={scrollToAbout}>About</button>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}
