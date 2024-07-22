import { useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { AddBadge, AddTodoForm, TodoItem } from "src/components";
import { createTodo } from "src/store/todos/todoActions";
import { getTodosSorted } from "src/store/todos/todoSelector";

const TodoList = () => {
  const [ isForm, setIsForm ] = useState(false);
  const todos = useSelector(state => getTodosSorted(state))

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    await dispatch(createTodo({title: data.title}));

    setIsForm(false);
  }

  const todoComponents = todos
    .map((todo) => {
      return <TodoItem key={todo._id} todo={ todo } />
    })

  return (
    <>
      <h1>Tâches restantes à faire</h1>
      <ul>
        { todoComponents }
      </ul>
      <AddTodoForm isOpen={ isForm } onClick={ () => setIsForm(false)} onSubmit={ handleSubmit(submitForm) } register={ register } />
      {
        !isForm &&
        <AddBadge onClick={ () => setIsForm(true) } position='botright' />
      }
    </>
  )
}

export default TodoList;
