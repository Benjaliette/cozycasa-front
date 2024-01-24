import { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./userState";

const signUpFulfilled = (state: any, action: any) => {
  state.user = action.payload;
};

const signUpError = (state: any, action: any) => {
  state.errors.other = action.error.message || "";
};

const loginFulfilled = (state: any, action: any) => {
  state.isLoggedIn.value = true;
  state.isLoggedIn.token = action.payload.token;
  state.user = action.payload.user;
};

const loginError = (state: any, action: any) => {
  state.errors.other = action.error.message || "";
};

const updateStateReducer = (
  state = initialState,
  action: PayloadAction<{ [key: string]: string }>
) => {
  return {
    ...state,
    user: action.payload,
  };
};

const logoutUserReducer = (state: any) => {
  return initialState;
}

export {
  signUpFulfilled,
  signUpError,
  loginFulfilled,
  loginError,
  updateStateReducer,
  logoutUserReducer
};
