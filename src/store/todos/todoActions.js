import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:3000';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5173';

export const getTodos = createAsyncThunk(
  'todo/getTodos',
  async (accessToken, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          'accept': 'application/json',
          'authorization': `Bearer ${accessToken}`
        }
      }

      const response = await axios.get(
        `${backendUrl}/api/v1/todos`,
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
