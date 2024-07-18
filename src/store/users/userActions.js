import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:3000';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ identifier, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'accept': 'application/json'
        }
      }

      const response = await axios.post(
        `${backendUrl}/api/v1/users/login`,
        { identifier, password },
        config
      )

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (refreshToken, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'accept': 'application/json'
        }
      }

      const response = await axios.post(
        `${backendUrl}/api/v1/users/logout`,
        { token: refreshToken },
        config
      )

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const refreshingToken = createAsyncThunk(
  'users/refreshingToken',
  async ({email, refreshToken}, { rejectWithValue }) => {
    console.log("refreshing")
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'accept': 'application/json'
        }
      }

      console.log(refreshToken);

      const response = await axios.post(
        `${backendUrl}/api/v1/users/refreshToken`,
        { identifier: email, token: refreshToken },
        config
      )

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)
