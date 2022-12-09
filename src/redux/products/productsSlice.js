import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(response.data));
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: () => console.log("fulfilled"),
    [getProducts.pending]: () => console.log("pending"),
    [getProducts.rejected]: () => console.log("rejected"),
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
