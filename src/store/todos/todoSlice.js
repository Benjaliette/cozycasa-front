import { createSlice } from "@reduxjs/toolkit";
import { getTodos, createTodo, updateTodo } from "./todoActions";

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
    // GET TODOS
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

    // POST TODO
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(createTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos.push(payload);
    }),
    builder.addCase(createTodo.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })

    // PUT TODO
    builder.addCase(updateTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      const todoIdx = state.todos.findIndex(todo => todo._id === payload._id);
      state.todos[todoIdx] = payload;
    }),
    builder.addCase(updateTodo.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
  }
})

// export const selectUsers = (state) => state.user.users;

export default todoSlice.reducer;
