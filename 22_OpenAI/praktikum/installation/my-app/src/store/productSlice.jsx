import { createSlice } from "@reduxjs/toolkit";
import produk from "../../src/utils/constants/dataProduct";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: produk,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const index = action.payload; // memakai payload untuk menyimpan indeks yang akan dihapus
      state.products.splice(index, 1);
    },
    editProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id)
      
      if (productIndex !== -1) {
        state[productIndex] = { ...state[productIndex], ...updatedProduct}
      }
      // const updatedState = [...state];
      // updatedState[index] = updatedProduct;

      // return updatedState;
    },
  },
});

const { addProduct, deleteProduct, editProduct } = productSlice.actions;
const productReducer = productSlice.reducer;

export { addProduct, deleteProduct, editProduct };
export default productReducer;
