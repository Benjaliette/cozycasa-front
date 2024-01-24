"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./userState";
import {
  signUpFulfilled,
  signUpError,
  updateStateReducer,
  loginFulfilled,
  loginError,
  logoutUserReducer
} from "./userReducers";
import { loginUser, registerUser } from "./userAction";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: updateStateReducer,
    logout: logoutUserReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, signUpFulfilled)
      .addCase(registerUser.rejected, signUpError)
      .addCase(loginUser.fulfilled, loginFulfilled)
      .addCase(loginUser.rejected, loginError);
  },
});

export default userSlice.reducer;

export const { update, logout } = userSlice.actions;
