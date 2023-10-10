import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist"
import productReducer from "./productSlice";

const store = configureStore({
  reducer: { product: productReducer },
});

export default store;
