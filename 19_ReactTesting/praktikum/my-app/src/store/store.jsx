import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist"
import productReducer from "./productSlice";

const store = configureStore({
  reducer: { product: productReducer },
});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer( persistConfig, reducers)

// const store = configureStore({reducer: persistedReducer})
// const persistor = persistStore(store)

// export { store, persistor}
export default store;
