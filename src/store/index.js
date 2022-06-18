import uiLoginSlice from "./slices/uiLoginSlice";
import { configureStore } from "@reduxjs/toolkit";
import columnSlice from './slices/uiColumn'

const store = configureStore({
  reducer: {
    cart: uiLoginSlice.reducer,
    column:columnSlice.reducer,
  },
});
export default store;
 