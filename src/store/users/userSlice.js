import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshingToken } from "./userActions";

const initialState = {
  loading: false,
  userInfo : {},
  accessToken: null,
  refreshToken: null,
  error: null,
  success: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {},

  extraReducers: builder => {
    // LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.userInfo = payload.user;
    }),
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }),

    // LOGOUT
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(logoutUser.fulfilled, (state) => {
      state = initialState;
      return state;
    }),
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })

    // REFRESH TOKEN
    builder.addCase(refreshingToken.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(refreshingToken.fulfilled, (state, { payload }) => {
      console.log(payload)
    }),
    builder.addCase(refreshingToken.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
  }
})

// export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
