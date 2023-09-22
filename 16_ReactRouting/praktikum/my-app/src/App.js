import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CreateAccount from "./pages/OtherPage/CreateAccount";
import LandingPage from "./pages/OtherPage/LandingPage";
import DetailProduk from "./pages/OtherPage/ProductDetail";
import { useState } from "react";
import produk from "./utils/constants/dataProduct";
import ListProduct from "./components/ListProduct/ListProduct";
function App() {
  const [product, setProduct] = useState(produk);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home product={product} setProduct={setProduct}/>}></Route>
        <Route path="/my-app/createaccount" element={<CreateAccount />}></Route>
        <Route path="/my-app/landingpage" element={<LandingPage />}></Route>
        <Route path="/my-app/detailproduk/:id" element={<DetailProduk product={product} ListProduct={ListProduct}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
