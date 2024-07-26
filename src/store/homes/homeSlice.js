import { createSlice } from "@reduxjs/toolkit";
import { getHomes, createHome, updateHome, deleteHome } from "./homeActions";

const initialState = {
  homes: [],
  loading: false,
  error: null
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // GET HOMES
    builder.addCase(getHomes.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(getHomes.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.homes = payload.homes;
    }),
    builder.addCase(getHomes.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })

    // POST TODO
    builder.addCase(createHome.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(createHome.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.homes.push(payload);
    }),
    builder.addCase(createHome.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })

    // PUT TODO
    builder.addCase(updateHome.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(updateHome.fulfilled, (state, { payload }) => {
      state.loading = false;
      const homeIdx = state.homes.findIndex(home => home._id === payload._id);
      state.homes[homeIdx] = payload;
    }),
    builder.addCase(updateHome.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })

    // DELETE TODO
    builder.addCase(deleteHome.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(deleteHome.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.homes = state.homes.filter(home => home._id !== payload);
    }),
    builder.addCase(deleteHome.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
  }
})

export default homeSlice.reducer
