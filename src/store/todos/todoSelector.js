import { createSelector } from "reselect";

const getTodosSelector = state => state.todo.todos;

export const getTodosSorted = createSelector(
  getTodosSelector,
  (todos) => [...todos].sort((a, b) => a.completed - b.completed)
)
