import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../products/categorySlice";
import productsSlice from "../products/productsSlice";
import sliderProductsSlice from "../products/sliderProductsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categorySlice,
    sliderProducts: sliderProductsSlice,
  },
});
