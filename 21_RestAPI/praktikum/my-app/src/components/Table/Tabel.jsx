import Table from "react-bootstrap/Table";
import ListProduct from "../ListProduct/ListProduct";
// import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
// import { deleteProduct } from "../../store/productSlice";
import axios from "axios";
import Inputform from "../Form/Inputform";

function Tabel() {
  // const products = useSelector((state) => state.product.products);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://6524e7f8ea560a22a4ea3f65.mockapi.io/products");
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getProducts();
  }, []);

  // Callback untuk nambahin produk baru ke state lokal
  const addProductToList = (newProduct) => {
    setProduct([...product, newProduct]);
  };
  return (
    <>
     <Inputform onAddProduct={addProductToList} />
      <div>
        <h2 className="text">List Product</h2>
        <Table className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Image of Product</th>
              <th>Product Freshness</th>
              <th>Additional Description</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map(function (produk, index) {
              return <ListProduct key={index} produk={produk} />;
              // sebelumnya di list ^^ props deleteProduct={deleteProduct}
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Tabel;
