import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-app/createaccount" element={<CreateAccount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
