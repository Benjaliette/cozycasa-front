import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type UserKey = {
  [key: string]: string,
}

export const loginUser = createAsyncThunk<UserKey, UserKey, {rejectValue: UserKey} >(
  "users/login",
  async ({email, password}, thunkAPI): Promise<any> => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const params = {
      email,
      password,
    };
    let link = process.env.NEXT_PUBLIC_API_URL + "api/users/login";
    const response = await axios.post(link, params, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "API-KEY": process.env.NEXT_PUBLIC_API_KEY,
      },
    });

    if (response.status === 200) {
      return await thunkAPI.fulfillWithValue(response.data);
    } else {
      return await thunkAPI.rejectWithValue(response.data.messages);
    };
  }
);

export const registerUser = createAsyncThunk<UserKey, UserKey, {rejectValue: UserKey} >(
  "users/signup",
  async ({username, email, password}, thunkAPI): Promise<any> => {
    const params = {
      username,
      email,
      password,
    };
    let link = process.env.NEXT_PUBLIC_API_URL + "api/users/signup";
    const response = await axios.post(link, params, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "API-KEY": process.env.NEXT_PUBLIC_API_KEY,
      },
    });

    if (response.data.status === 200) {
      return await thunkAPI.fulfillWithValue(response.data.response);
    } else {
      return await thunkAPI.rejectWithValue(response.data.messages);
    };
  }
);
