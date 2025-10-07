import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null }, // user = { email, uid }
  reducers: {
    loginUser: (state, action) => { state.user = action.payload; },
    logoutUser: (state) => { state.user = null; }
  }
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
