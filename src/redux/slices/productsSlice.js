import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/firebaseApi";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await api.get("/products.json");
  return Object.values(res.data || {});
});

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = "loading"; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      });
  }
});

export default productsSlice.reducer;
