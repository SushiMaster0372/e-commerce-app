import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sliderProducts: [],
  loading: false,
};

export const getSliderProducts = createAsyncThunk(
  "products/getSliderProducts",
  async (numberOfProducts, { rejectWithValue, dispatch }) => {
    dispatch(toggleLoader(true));
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=${numberOfProducts}`
    );
    dispatch(setSliderProducts(response.data));
    dispatch(toggleLoader(false));
  }
);

export const sliderProductsSlice = createSlice({
  name: "sliderProducts",
  initialState,
  reducers: {
    setSliderProducts: (state, action) => {
      state.sliderProducts = action.payload;
    },
    toggleLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setSliderProducts, toggleLoader } = sliderProductsSlice.actions;
export default sliderProductsSlice.reducer;
