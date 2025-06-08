import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { refreshingToken } from "../users/userActions";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_FRONT_URL
})

const headers = {
  'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': '*',
  'accept': 'application/json',
  'API-KEY': import.meta.env.VITE_API_KEY
}

export const getTodos = createAsyncThunk(
  'todo/getTodos',
  async ({homeId}, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          ...headers,
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.get(
        `${backendUrl}/api/v1/homes/${homeId}/todos`,
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        await dispatch(getTodos());
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async({homeId, title}, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          ...headers,
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.post(
        `${backendUrl}/api/v1/homes/${homeId}/todos`,
        { title },
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        const title = JSON.parse(error.config.data).title;

        await dispatch(createTodo({ title }));
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async({homeId, todoId, title, completed}, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          ...headers,
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.put(
        `${backendUrl}/api/v1/homes/${homeId}/todos/${todoId}`,
        { todoId, title, completed },
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        const { todoId, title, completed } = JSON.parse(error.config.data);

        await dispatch(updateTodo({ todoId, title, completed }));
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async({homeId, todoId}, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          ...headers,
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.delete(
        `${backendUrl}/api/v1/homes/${homeId}/todos/${todoId}`,
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        const { todoId } = JSON.parse(error.config.data);

        await dispatch(updateTodo({ todoId }));
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)
