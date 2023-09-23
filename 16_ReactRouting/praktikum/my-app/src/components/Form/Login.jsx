import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const usernameInput = "admin";
    const passwordInput = "1234";

    if (usernameInput === "admin" && passwordInput === "1234") {
      localStorage.setItem("isLogin", "true");
      navigate.setItem("/private");
    } else {
      alert("Login Gagal \n Login dengan \n Username = admin \n Passwor = 1234 ");
    }
  };
  return (
    <Container>
      <Col>
        <Row>
          <h2>Login Page</h2>
        </Row>
        <Row>
          <label>Username :</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Row>
        <Row>
          <label>Password :</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Row>
        <button onClick={handleLogin}>Login</button>
      </Col>
    </Container>
  );
};

export default Login;
