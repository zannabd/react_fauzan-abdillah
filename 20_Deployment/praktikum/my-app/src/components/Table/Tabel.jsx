import Table from "react-bootstrap/Table";
import ListProduct from "../ListProduct/ListProduct";
// import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
// import { deleteProduct } from "../../store/productSlice";

function Tabel(props) {
  // const { product } = props;
  const products = useSelector((state) => state.product.products);
  // const dispatch = useDispatch();
  // console.log(products);

  // function handleDeleteProduct(index) {
  //   const confirmDel = window.confirm("Apakah anda yakin ingin menghapus data ini?");
  //   if (confirmDel) {
  //     setTimeout(() => {
  //       dispatch(deleteProduct(index));
  //     }, 0);
  //   }
  // }
  // function deleteProduct(index) {
  //   const confirmDel = window.confirm("Apakah anda yakin ingin menghapus data ini?");
  //   // const newProduct = product.filter((item) => item.id !== id)
  //   if (confirmDel) {
  //     const updatedProduct = [...product];
  //     updatedProduct.splice(index, 1);
  //     setProduct(updatedProduct);
  //     // setProduct({product : newProduct})
  //   }
  // }

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
            {products.map(function (produk, index) {
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
