import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { refreshingToken } from "../users/userActions";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_FRONT_URL
})

export const getHomes = createAsyncThunk(
  'home/getHomes',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.get(
        `${backendUrl}/api/v1/homes`,
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        await dispatch(getHomes());
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const createHome = createAsyncThunk(
  'home/createHome',
  async({title}, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.post(
        `${backendUrl}/api/v1/homes`,
        { title },
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        const title = JSON.parse(error.config.data).title;

        await dispatch(createHome({ title }));
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const updateHome = createAsyncThunk(
  'home/updateHome',
  async({homeId, title, completed}, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.put(
        `${backendUrl}/api/v1/homes/${homeId}`,
        { homeId, title, completed },
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        const { homeId, title, completed } = JSON.parse(error.config.data);

        await dispatch(updateHome({ homeId, title, completed }));
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const deleteHome = createAsyncThunk(
  'home/deleteHome',
  async({homeId}, { rejectWithValue, dispatch, getState }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'authorization': `Bearer ${user.accessToken}`
        }
      }

      const response = await axiosInstance.delete(
        `${backendUrl}/api/v1/homes/${homeId}`,
        config
      )

      return response.data;
    } catch (error) {
      if (error.response.status === 403 && !error.config._retry) {
        error.config._retry = true;
        await dispatch(refreshingToken()).unwrap();

        const { homeId } = JSON.parse(error.config.data);

        await dispatch(updateHome({ homeId }));
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)
