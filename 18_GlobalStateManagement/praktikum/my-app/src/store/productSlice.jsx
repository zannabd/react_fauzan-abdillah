import { createSlice } from "@reduxjs/toolkit";
import produk from "../../src/utils/constants/dataProduct";

const productSlice = createSlice({
  name: "Product Slice",
  initialState: {
    product: produk,
  },
  reducers: {
    deleteProduct: (state, action) => {
      state.product = state.product.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { deleteProduct } = productSlice.reducer;
export default productSlice.reducer