import Table from "react-bootstrap/Table";
import ListProduct from "../ListProduct/ListProduct";
// import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
// import { deleteProduct } from "../../store/productSlice";
import axios from "axios";

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
  return (
    <>
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
      {/* <div>
        <div>
          <input type="text" name="name" id="name" placeholder="Search By Product Name" />
        </div>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked="" />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Deletion
          </label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Search
          </label>
        </div>
      </div> */}
    </>
  );
}

export default Tabel;
