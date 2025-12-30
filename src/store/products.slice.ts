import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/products.api";

interface ProductsState {
  list: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getProducts();
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to load products");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
