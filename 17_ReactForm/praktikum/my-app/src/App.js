import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/OtherPage/CreateAccount";
import LandingPage from "./pages/OtherPage/LandingPage";
import DetailProduk from "./pages/OtherPage/ProductDetail";
import { useState } from "react";
import produk from "./utils/constants/dataProduct";
import ListProduct from "./components/ListProduct/ListProduct";
// import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Form/Login";
// import Public from "./pages/OtherPage/Public";
// import Private from "./pages/OtherPage/PrivatePage";
import Regist from "./components/Form/Regist";
function App() {
  const [product, setProduct] = useState(produk);

  // const isAuthenticated = localStorage.getItem("isLogin") === "true";
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home product={product} setProduct={setProduct} />}></Route>
        <Route path="/my-app/createaccount" element={<CreateAccount />}></Route>
        <Route path="/my-app/landingpage" element={<LandingPage />}></Route>
        <Route path="/my-app/detailproduk/:id" element={<DetailProduk product={product} ListProduct={ListProduct} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Regist />}></Route>

        {/* <Route path="/public" element={<Public />}></Route> */}
        {/* <Route path="/private" element={isAuthenticated ? <Private /> : <Navigate to="/login" />}></Route> */}
        {/* <Route path="/" element={<Navigate to="/public" />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
