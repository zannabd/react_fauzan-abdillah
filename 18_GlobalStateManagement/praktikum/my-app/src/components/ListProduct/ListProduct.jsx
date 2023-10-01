// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { deleteProduct } from "../../store/productSlice";

const StyledListProduct = styled.div`
  #linkid {
    text-decoration: none;
    color: #000;
  }
`;

function ListProduct(props) {
  const { produk } = props;
  // const produk = useSelector((state) => state.product.product);
  
  const dispatch = useDispatch();

  // function handleDeleteProduct(index) {
  //   const confirmDel = window.confirm("Apakah anda yakin ingin menghapus data ini?");
  //   if (confirmDel) {
  //     dispatch(deleteProduct(index));
  //   }
  // }
  const handleDelete = (index) => {
    const confirmDel = window.confirm("Apakah anda yakin ingin menghapus data ini?");
    if (confirmDel) {
      dispatch(deleteProduct(index));
    }
  }
  return (
    <tr key={produk.id}>
      <td>
        <StyledListProduct>
          <Link to={`/my-app/detailproduk/${produk.id}`} id="linkid">
            {produk.id}
          </Link>
        </StyledListProduct>
      </td>
      <td>{produk.name}</td>
      <td>{produk.category}</td>
      <td>{produk.image}</td>
      <td>{produk.freshness}</td>
      <td>{produk.description}</td>
      <td>{produk.price}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(produk.id)}>
          Delete
        </button>
        <button type="button" className="btn btn-success">
          Edit
        </button>
      </td>
    </tr>
  );
}

export default ListProduct;
