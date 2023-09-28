import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist"

const reducers = combineReducers({
  product: productSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer( persistConfig, reducers)

const store = configureStore({reducer: persistedReducer})
const persistor = persistStore(store)

export { store, persistor}