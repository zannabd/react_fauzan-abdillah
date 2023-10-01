import { createSlice } from "@reduxjs/toolkit";
import produk from "../../src/utils/constants/dataProduct";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: produk,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    deleteProduct: (state, action) => {
      const index = action.payload; // memakai payload untuk menyimpan indeks yang akan dihapus
      state.products.splice(index, 1);
    },
  },
});

const { addProduct,deleteProduct } = productSlice.actions;
const productReducer = productSlice.reducer;

export { addProduct, deleteProduct };
export default productReducer;
