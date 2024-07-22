import { PropTypes } from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import classes from "./TodoItem.module.css";
import { updateTodo } from "src/store/todos/todoActions";
import { refreshingToken } from "src/store/users/userActions";

const TodoItem = ({ todo }) => {
  const [ isCompleted, setCompleted ] = useState(todo.completed);
  const { accessToken, userInfo } = useSelector(
    (state) => state.user
  );

  const { error } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();

  const completeTask = (e) => {
    e.preventDefault();
    setCompleted(!isCompleted);
    dispatch(
      updateTodo(
        {
          todoId: todo._id,
          title: todo.title,
          completed: !isCompleted,
          accessToken
        }
      )
    );

    if (error) {
      dispatch(refreshingToken({identifier: userInfo.email}));
      dispatch(
        updateTodo(
          {
            todoId: todo._id,
            title: todo.title,
            completed: !isCompleted,
            accessToken
          }
        )
      );
    }
  };

  return (
    <li className={ classes.todo__card } onClick={ (e) => completeTask(e) }>
      <p>{ todo.title }</p>
      <div className={ classes.round }>
        <input type="checkbox" checked={ isCompleted } id={ todo._id } readOnly />
        <label htmlFor={ todo._id }></label>
      </div>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.any
}

export default TodoItem;
