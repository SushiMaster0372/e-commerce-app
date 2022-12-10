import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setProducts } from "./productsSlice";

const initialState = {
  categories: [],
  active: [],
  allProductsActive: true,
};

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch(setCategories(response.data));
  }
);

export const getProductsByCategory = createAsyncThunk(
  "products/getProductsByCategory",
  async (category, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    dispatch(setProducts(response.data));
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setActive: (state) => {
      state.active = [];
      for (let i = 0; i < state.categories.length; i++) {
        state.active.push(false);
      }
    },
    toggleActive: (state, action) => {
      state.active[action.payload] = true;
    },
    setAllProductsActive: (state, action) => {
      state.allProductsActive = action.payload;
    },
  },
  extraReducers: {
    [getCategories.fulfilled]: () => console.log("fulfilled"),
    [getCategories.pending]: () => console.log("pending"),
    [getCategories.rejected]: () => console.log("rejected"),
  },
});

export const { setCategories, toggleActive, setActive, setAllProductsActive } =
  categorySlice.actions;
export default categorySlice.reducer;
