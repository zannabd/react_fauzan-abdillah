// import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import { deleteProduct } from "../../store/productSlice";
import axios from "axios";
// import EditForm from "../Form/EditForm";
// import { useState } from "react";

const StyledListProduct = styled.div`
  #linkid {
    text-decoration: none;
    color: #000;
  }
`;

function ListProduct(props) {
  // const { id } = useParams();
  const { produk, onDelete } = props;

  // const dispatch = useDispatch();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus produk ini?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/products/${produk.id}`);
        onDelete(produk.id);
        console.log(`Produk dengan ID ${produk.id} telah dihapus.`);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

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
        {/* onClick={() => handleEdit(produk.id)} */}
        <Link to={`/edit/${produk.id}`}>
          <button type="button" className="btn btn-success">
            {"Edit"}
          </button>
        </Link>
        {/* <EditForm produk={produk} index={index} /> */}
      </td>
    </tr>
  );
}

export default ListProduct;
