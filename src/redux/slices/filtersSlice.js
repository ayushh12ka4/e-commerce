import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { category: "All", sort: "newest", priceRange: [0, 100000] },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload; },
    setSort: (state, action) => { state.sort = action.payload; },
    setPriceRange: (state, action) => { state.priceRange = action.payload; }
  }
});

export const { setCategory, setSort, setPriceRange } = filtersSlice.actions;
export default filtersSlice.reducer;
