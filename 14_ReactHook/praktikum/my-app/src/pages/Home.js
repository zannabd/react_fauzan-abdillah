import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Inputform from "../components/Form/Inputform";
import Tabel from "../components/Table/Tabel";
import { useState } from "react";
import produk from "../utils/constants/dataProduct";



function Home() {
  const [product, setProduct] = useState(produk);
  return (
    <div>
      <Header />
      <Hero />
      <Inputform product={product} setProduct={setProduct} />
      <Tabel product={product} setProduct={setProduct} />
    </div>
  );
}

export default Home;
