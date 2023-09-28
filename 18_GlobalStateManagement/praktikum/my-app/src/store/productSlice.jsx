import { createSlice } from "@reduxjs/toolkit";
import produk from "../../src/utils/constants/dataProduct";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: produk,
  },
  reducers: {
    deleteProduct: (state, action) => {
    const index = action.payload; // memakai payload untuk menyimpan indeks yang akan dihapus
    const updatedProduct = [...state.products];
    updatedProduct.splice(index, 1);
    state.products = updatedProduct;
    },
  },
});

const { deleteProduct } = productSlice.actions;
const productReducer = productSlice.reducer;

export { deleteProduct };
export default productReducer;
