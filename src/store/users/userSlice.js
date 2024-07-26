import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser, logoutUser, refreshingToken } from "./userActions";

const initialState = {
  loading: false,
  userInfo : {},
  accessToken: null,
  error: null,
  signupSuccess: false,
  loginSuccess: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    clearError: (state) => {
      state.error = null
    }
  },

  extraReducers: builder => {
    // LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.userInfo = payload.user;
      state.loading = false;
      state.loginSuccess = true;
      state.error = null;
    }),
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }),

    // SIGNUP
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(signupUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.signupSuccess = true;
      state.error = null;
      state.userInfo = payload.user;
    }),
    builder.addCase(signupUser.rejected, (state, { payload }) => {
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
      state.loading = false;
      state.accessToken = payload.accessToken;
    }),
    builder.addCase(refreshingToken.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
  }
})

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
