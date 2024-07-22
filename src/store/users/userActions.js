import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:3000';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5173';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ identifier, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
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

export const signupUser = createAsyncThunk(
  'user/signup',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          'accept': 'application/json'
        }
      }

      const response = await axios.post(
        `${backendUrl}/api/v1/users/signup`,
        { username, email, password },
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
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          'accept': 'application/json'
        }
      }

      const response = await axios.delete(
        `${backendUrl}/api/v1/users/logout`,
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
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          'accept': 'application/json'
        }
      }

      const response = await axios.post(
        `${backendUrl}/api/v1/users/refreshToken`,
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
