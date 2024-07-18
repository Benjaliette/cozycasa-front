import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./todoActions";

const initialState = {
  todos: [],
  loading: false,
  error: false
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {},

  extraReducers: builder => {
    // LOGIN
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(getTodos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos = payload.todos;
    }),
    builder.addCase(getTodos.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
  }
})

// export const selectUsers = (state) => state.user.users;

export default todoSlice.reducer;
